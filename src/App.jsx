import React, { useState, useEffect } from "react";
import ResultForm from "./components/ResultForm";
import StudentTable from "./components/StudentTable";
import StudentSearch from "./components/StudentSearch";
import Toast from "./components/Toast";

export default function App() {
  const [students, setStudents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("students") || "[]");
    } catch (e) {
      return [];
    }
  });
  const [search, setSearch] = useState("");
  const [sectionFilter, setSectionFilter] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem("students", JSON.stringify(students));
    } catch (e) {
      // ignore
    }
  }, [students]);

  const showToast = (msg) => {
    setToast(msg);
  };

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
    showToast("Student added!");
  };

  const updateStudent = (index, student) => {
    setStudents((prev) => {
      const next = [...prev];
      next[index] = student;
      return next;
    });
    showToast("Student updated!");
  };

  const deleteStudent = (index) => {
    setStudents((prev) => prev.filter((_, i) => i !== index));
    showToast("Student deleted!");
  };

  const startEdit = (index) => setEditingIndex(index);
  const cancelEdit = () => setEditingIndex(null);

  const editingStudent = editingIndex != null ? students[editingIndex] : null;

  const filteredStudents = sectionFilter
    ? students.filter((s) => s.section === sectionFilter)
    : students;

  const total = filteredStudents.length;
  const average = total
    ? (
        filteredStudents.reduce((acc, s) => acc + Number(s.marks || 0), 0) /
        total
      ).toFixed(2)
    : "0";

  // Get unique sections for dropdown
  const sections = Array.from(new Set(students.map((s) => s.section))).filter(Boolean);

  return (
    <div className="app">
      <h1>Student Result App</h1>
      <ResultForm
        onAdd={addStudent}
        editingIndex={editingIndex}
        editingStudent={editingStudent}
        onUpdate={updateStudent}
        onCancel={cancelEdit}
      />
      <StudentSearch search={search} setSearch={setSearch} />

      <div style={{ margin: '12px 0' }}>
        <label>Filter by section: </label>
        <select value={sectionFilter} onChange={e => setSectionFilter(e.target.value)}>
          <option value="">All</option>
          {sections.map(sec => (
            <option key={sec} value={sec}>{sec}</option>
          ))}
        </select>
      </div>

      <div className="summary">
        <span>Total students: {total}</span>
        <span>Average marks: {average}</span>
      </div>

      <StudentTable
        students={filteredStudents}
        search={search}
        onEdit={startEdit}
        onDelete={deleteStudent}
      />
      <Toast message={toast} onClose={() => setToast("")} />
    </div>
  );
}
