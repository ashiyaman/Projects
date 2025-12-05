import { BrowserRouter, Routes, Route } from "react-router-dom"

import Body from "./pages/Body"
//import Leads from "./components/Leads"
import Dashboard from "./pages/Dashboard"
import Reports from "./pages/Reports"

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
