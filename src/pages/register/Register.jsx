import React, { useEffect, useState } from "react";
import "./register.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/profile");
  }, [user, loading]);

  return(
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">gifty</h3>
          <span className="loginDesc">
            Explore, share, and discover great gift ideas
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="Username" className="loginInput" />
            <input value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Email" className="loginInput" />
            <input placeholder="Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className="loginInput" />
            <button className="loginButton" onClick={register}>Sign Up</button>
            <Link to="/login">
            <button className="loginRegisterButton">
              Log into Account
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
