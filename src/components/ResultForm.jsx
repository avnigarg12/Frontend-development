import React, { useState, useEffect } from "react";

export default function ResultForm({ onAdd, editingIndex, editingStudent, onUpdate, onCancel }) {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [section, setSection] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name || "");
      setMarks(editingStudent.marks || "");
      setSection(editingStudent.section || "");
    } else {
      setName("");
      setMarks("");
      setSection("");
    }
  }, [editingStudent]);

  const submit = (e) => {
    e.preventDefault();
    if (!name || marks === "" || !section) return;

    const payload = { name, marks: Number(marks), section };

    if (editingIndex != null) {
      onUpdate(editingIndex, payload);
      onCancel();
    } else {
      onAdd(payload);
    }

    setName("");
    setMarks("");
    setSection("");
  };

  return (
    <form onSubmit={submit} className="form">
      <input
        className="input"
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Section"
        value={section}
        onChange={(e) => setSection(e.target.value)}
      />
      <div>
        <button type="submit" className="btn primary">{editingIndex != null ? "Update" : "Add"}</button>
        {editingIndex != null && (
          <button type="button" onClick={onCancel} className="btn secondary" style={{ marginLeft: 8 }}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
