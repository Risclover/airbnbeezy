import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage({ setShowModal, setLogin }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [image, setImage] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) errors.push("Please include a profile picture to sign up.");

    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.createUser({
          email,
          username,
          password,
          firstName,
          lastName,
          image,
        })
      )
        .then(() => setShowModal(false))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors([
      ...errors,
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <div className="loginform-container">
      <div className="loginform-header">
        <button className="signup-close" onClick={() => setShowModal(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <p>Sign up</p>
        <div></div>
      </div>
      <div className="loginform-content">
        <form className="login-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <input
            type="text"
            value={email}
            id="signup-email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            id="signup-password"
          />
          <label className="user-img-input">
            <p className="upload-profile-img">Upload profile image:</p>
            <input
              className="user-img-input"
              type="file"
              onChange={updateFile}
            />
          </label>

          <button className="login-btn" type="submit">
            Sign Up
          </button>
        </form>
        <p className="switch-login">
          Already have an account?{" "}
          <button className="switch-login-btn" onClick={() => setLogin(true)}>
            Log in
          </button>{" "}
          instead.
        </p>
      </div>
    </div>
  );
}
export default SignupFormPage;
