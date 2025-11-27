import React, { useState, useMemo } from "react";

export default function StudentTable({ students, search, onEdit, onDelete }) {
  const [sortKey, setSortKey] = useState("name");
  const [sortDir, setSortDir] = useState(1);
  const [confirmIndex, setConfirmIndex] = useState(null);

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir((d) => -d);
    else {
      setSortKey(key);
      setSortDir(1);
    }
  };

  const filtered = useMemo(() => {
    const s = students.filter((st) =>
      st.name.toLowerCase().includes(search.toLowerCase())
    );

    const sorted = [...s].sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      if (sortKey === "marks") return (Number(va) - Number(vb)) * sortDir;
      return String(va).localeCompare(String(vb)) * sortDir;
    });

    return sorted;
  }, [students, search, sortKey, sortDir]);

  const handleDelete = (index) => {
    setConfirmIndex(index);
  };

  const confirmDelete = () => {
    onDelete(confirmIndex);
    setConfirmIndex(null);
  };

  const cancelDelete = () => setConfirmIndex(null);

  return (
    <div>
      <div className="table-wrapper">
        <table className="table">
        <thead>
          <tr>
            <th onClick={() => toggleSort("name")}>Name {sortKey === "name" ? (sortDir > 0 ? "▲" : "▼") : ""}</th>
            <th onClick={() => toggleSort("marks")}>Marks {sortKey === "marks" ? (sortDir > 0 ? "▲" : "▼") : ""}</th>
            <th onClick={() => toggleSort("section")}>Section {sortKey === "section" ? (sortDir > 0 ? "▲" : "▼") : ""}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((s, i) => {
            const cls = Number(s.marks) >= 50 ? "pass" : "fail";
            return (
              <tr key={i} className={cls}>
                <td>{s.name}</td>
                <td>{s.marks}</td>
                <td>{s.section}</td>
                <td>
                  <div className="actions">
                    <button className="btn secondary" onClick={() => onEdit(students.indexOf(s))}>Edit</button>
                    <button className="btn danger" onClick={() => handleDelete(students.indexOf(s))}>Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      {confirmIndex != null && (
        <div className="confirm-dialog">
          <div className="confirm-content">
            <p>Are you sure you want to delete this student?</p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8 }}>
              <button className="btn danger" onClick={confirmDelete}>Yes</button>
              <button className="btn secondary" onClick={cancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
