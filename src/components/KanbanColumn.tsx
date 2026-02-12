import type { Test } from "../types/Test";

interface Props {
  title: string;
  tests: Test[];
}

function KanbanColumn({ title, tests }: Props) {
  return (
    <div className="column">
      <div className={`column-header ${title.toLowerCase()}`}>
        <h3>{title}</h3>
        <span className="count">{tests.length}</span>
      </div>

      {tests.map((test) => (
        <div key={test.id} className="card">
          <p>{test.name}</p>
        </div>
      ))}
    </div>
  );
}

export default KanbanColumn;
