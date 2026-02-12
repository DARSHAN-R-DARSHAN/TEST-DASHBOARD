import { useState } from "react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { label: "Dashboard", icon: "📊" },
    { label: "Test Suites", icon: "🧪" },
    { label: "Executions", icon: "⚡" },
    { label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      <button
        className="sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}
      >
        ☰
      </button>

      <div className="sidebar-content">
        <h2 className={`logo ${collapsed ? "hidden" : ""}`}>
          Keploy
        </h2>

        <ul>
          {menuItems.map((item) => (
            <li key={item.label} className="menu-item">
              <span className="icon">{item.icon}</span>
              <span className={`label ${collapsed ? "hidden" : ""}`}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
