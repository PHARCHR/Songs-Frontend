import "./App.css";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
