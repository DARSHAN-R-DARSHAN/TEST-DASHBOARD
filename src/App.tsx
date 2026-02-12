import { testData } from "./data/tests";
import KanbanBoard from "./components/KanbanBoard";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="app-container">
        <Sidebar />

        <div className="main-content">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <KanbanBoard tests={testData} />
        </div>
      </div>
    </div>
  );
}

export default App;
