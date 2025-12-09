import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-amber-300 flex flex-row md:flex-col justify-between md:justify-start md:py-8 p-4 md:w-2/6 md:min-h-screen">
      <Link to="/">Leads</Link>
      <Link to="/sales">Sales</Link>
      <Link to="/agents">Agents</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default Sidebar;
