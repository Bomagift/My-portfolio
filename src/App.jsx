import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import Navbar from "./components/Navbar"

function App() {
  return (
   
    <Router>
       <Navbar/>
      <Routes> 
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
export default App;
