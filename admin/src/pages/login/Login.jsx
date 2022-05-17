import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching,dispatch} = useContext(AuthContext)

  const handleLogin = (e)=>{
    e.preventDefault();
    login({email,password},dispatch)
  }
  return (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Email Address </label>
          <input
            type="text"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <input type="submit" onClick={handleLogin} 
           disabled={isFetching}/>
        </div>
      </form>
    </div>
  );
};

export default Login;
