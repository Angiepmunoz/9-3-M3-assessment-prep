import "./App.css";
import Nav from "./components/Nav"
import Characters from "./components/Characters"
import Home from "./components/Home"
import Search from "./components/Search"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/search" element={<Search/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
