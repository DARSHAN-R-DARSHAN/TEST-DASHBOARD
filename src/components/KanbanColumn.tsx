import { useState } from "react";
import type { Test } from "../types/Test";

interface Props {
  title: string;
  tests: Test[];
}

function getStatusColor(title: string) {
  if (title === "Passed") return "#10B981";
  if (title === "Failed") return "#EF4444";
  return "#F59E0B";
}

function KanbanColumn({ title, tests }: Props) {
  const [selected, setSelected] = useState<Test | null>(null);

  return (
    <div className="column">
      <h3>
        {title} ({tests.length})
      </h3>

      {tests.map((test) => (
        <div
          key={test.id}
          className="card"
          onClick={() => setSelected(test)}
          style={{ cursor: "pointer" }}
        >
          <div
            style={{
              height: "4px",
              backgroundColor: getStatusColor(title),
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          />

          <strong>{test.name}</strong>
          <div>{test.suite}</div>
          <small>{new Date(test.lastRun).toLocaleString()}</small>
        </div>
      ))}

    {selected && (
    <>
        <div
        className="backdrop"
        onClick={() => setSelected(null)}
        />

        <div className="modal">
        <h3>{selected.name}</h3>
        <p><strong>Suite:</strong> {selected.suite}</p>
        <p><strong>Status:</strong> {selected.status}</p>
        <p><strong>Last Run:</strong> {selected.lastRun}</p>
        </div>
    </>
    )}

    </div>
  );
}

export default KanbanColumn;