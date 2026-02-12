import { useState } from "react";
import type { Test } from "../types/Test";

interface Props {
  title: string;
  tests: Test[];
}

function KanbanColumn({ title, tests }: Props) {
  const [selected, setSelected] = useState<Test | null>(null);

  return (
    <>
      <div className="column">
        <div className={`column-header ${title.toLowerCase()}`}>
          <h3>{title}</h3>
          <span className="count">{tests.length}</span>
        </div>

        {tests.map((test) => (
          <div
            key={test.id}
            className="card"
            onClick={() => setSelected(test)}
          >
            <p>{test.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <>
          <div
            className="backdrop"
            onClick={() => setSelected(null)}
          />

          <div className="modal">
            <h3>{selected.name}</h3>
            <p><strong>Status:</strong> {selected.status}</p>
            <p><strong>Suite:</strong> {selected.suite}</p>
            <p><strong>Last Run:</strong> {selected.lastRun}</p>
          </div>
        </>
      )}
    </>
  );
}

export default KanbanColumn;
