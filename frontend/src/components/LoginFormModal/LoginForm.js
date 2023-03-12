import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import SignupFormPage from "../SignupFormPage";
import "./LoginForm.css";

function LoginForm({ setShowModal, setLogin }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showSignupModal, setShowSignupModal] = useState(false);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    history.replace("/");

    return dispatch(sessionActions.login({ credential, password }))
      .then(() => setShowModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const handleDemo = (e) => {
    e.preventDefault();
    return dispatch(
      sessionActions.login({ credential: "Demolition", password: "password" })
    ).then(() => setShowModal(false));
  };

  return (
    <div className="loginform-container">
      <div className="loginform-header">
        <button onClick={() => setShowModal(false)} className="loginform-close">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <p>Log in</p>
        <div></div>
      </div>
      <div className="loginform-content">
        <h1 className="loginform-title">Welcome to Airbnbeezy</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <ul className="error-list">
            {errors.map((error, idx) => (
              <li className="error-item" key={idx}>
                {error}
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Username"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            className="loginform-input-top"
          />

          <input
            className="loginform-input-bottom"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-btn" type="submit">
            Continue
          </button>
          <div className="horizontal-or">
            <div className="side-or"></div>
            <div className="middle-or">or</div>
            <div className="side-or"></div>
          </div>

          <button className="demo-btn" onClick={handleDemo}>
            <i className="fa-regular fa-id-card"></i>Continue with Demo Login
            <div></div>
          </button>
        </form>
        <p className="switch-to-signup">
          Need an account?{" "}
          <button className="signup-switch-btn" onClick={() => setLogin(false)}>
            Sign up
          </button>{" "}
          instead.
        </p>
        {showSignupModal && (
          <Modal onClose={() => setShowSignupModal(false)}>
            <SignupFormPage setShowModal={setShowSignupModal} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
