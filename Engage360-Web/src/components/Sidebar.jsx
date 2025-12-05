import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-amber-300 flex flex-col p-4 md:w-1/8 md:min-h-screen">
      <Link to="/">Leads</Link>
      <Link to="/sales">Sales</Link>
      <Link to="/agents">Agents</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default Sidebar;
