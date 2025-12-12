import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-[#120c2d] border-r border-[#ff00ff] text-(--main-text) flex flex-row md:flex-col justify-between w-full md:justify-start md:py-8 p-4 md:min-w-2/12 md:min-h-screen">
      <Link to="/">Leads</Link>
      <Link to="/sales">Sales</Link>
      <Link to="/agents">Agents</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/settings">Settings</Link>
    </aside>
  );
};

export default Sidebar;
