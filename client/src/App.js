import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
