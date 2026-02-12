import React from "react";
import type { Test } from "../types/Test";
import KanbanColumn from "./KanbanColumn";

interface Props {
  tests: Test[];
}

function KanbanBoard({ tests }: Props) {
  // ✅ Declare state FIRST
  const [search, setSearch] = React.useState("");
  const [active, setActive] = React.useState("All");

  // ✅ Filtering logic
  const filtered = tests
    .filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      active === "All"
        ? true
        : t.status.toLowerCase() === active.toLowerCase()
    )
    .sort(
      (a, b) =>
        new Date(b.lastRun).getTime() -
        new Date(a.lastRun).getTime()
    );

  const passed = filtered.filter((t) => t.status === "passed");
  const failed = filtered.filter((t) => t.status === "failed");
  const skipped = filtered.filter((t) => t.status === "skipped");

  return (
    <>
      <div className="search-container">

        {/* ✅ CONNECTED SEARCH */}
        <input
          type="text"
          placeholder="Search tests..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* ✅ FILTER BUTTONS */}
        <div className="filter-buttons">
          {["All", "Passed", "Failed", "Skipped"].map((status) => (
            <button
              key={status}
              className={`filter-btn ${
                active === status ? "active" : ""
              }`}
              onClick={() => setActive(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="board">
        <KanbanColumn title="Passed" tests={passed} />
        <KanbanColumn title="Failed" tests={failed} />
        <KanbanColumn title="Skipped" tests={skipped} />
      </div>
    </>
  );
}

export default KanbanBoard;
