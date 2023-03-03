import React, { useState } from "react";
import SignupFormPage from "../SignupFormPage";
import LoginForm from "./LoginForm";

export default function AuthModal({ login, setLogin, setShowModal }) {
  return (
    <div>
      {login && (
        <LoginForm
          login={login}
          setLogin={setLogin}
          setShowModal={setShowModal}
        />
      )}
      {!login && (
        <SignupFormPage
          login={login}
          setLogin={setLogin}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}
