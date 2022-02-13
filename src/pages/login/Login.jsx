import "./login.css";
import React, { useEffect, useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import {auth, logInWithEmailAndPassword, signInWithEmailAndPassword, signInWithGoogle} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/profile");
  }, [user, loading]);
  return (
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
            <input value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Email" className="loginInput" />
            <input value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder="Password" className="loginInput" />
            <button className="loginButton"
                    onClick={() => logInWithEmailAndPassword(email, password)}
            >Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
            <button className="loginRegisterButton">
              Create a New Account
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
