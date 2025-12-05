import { BrowserRouter, Routes, Route } from "react-router-dom"

import Body from "./pages/Body"
//import Leads from "./components/Leads"
import Dashboard from "./pages/Dashboard"
import Sales from "./pages/Sales"
import Agents from "./pages/Agents"
import Reports from "./pages/Reports"
import Settings from "./pages/Settings"

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/sales" element={<Sales />}></Route>
          <Route path="/agents" element={<Agents />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
