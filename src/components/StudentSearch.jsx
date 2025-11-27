import React from "react";

export default function StudentSearch({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search student..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search"
    />
  );
}
