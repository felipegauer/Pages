import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Page1 from "./Page1"
import Page2 from "./Page2"

function App() {
  return (<>
  <Router>
    <Routes>
      <Route path="/Pages/" element={<Page1/>}/>
      <Route path="/Pages/love" element={<Page2/>}/>
    </Routes>
  </Router>
  </>)
  
}

export default App
