import { BrowserRouter, Routes, Route } from "react-router-dom"

import Body from "./components/Body"
import Leads from "./components/Leads"

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Leads />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
