import React, {useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(223, 226, 226)";
    document.body.style.margin = "0";
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";

    // Cleanup when component is unmounted or route changes
    return () => {
      document.body.style.backgroundColor = "initial";
      document.body.style.margin = "0";
      document.body.style.display = "block";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {  email, password }
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/HomePage");
        setEmail("");
      
        setPassword("");
      }
    } catch (error) {
      setEmail("");
     
      setPassword("");
    }
  };

  return (
    <div className="SignUp" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <form>
      
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <Link to="/"><h4>SignUp</h4></Link>
    </div>
  );
}

export default Login;
