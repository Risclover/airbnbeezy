import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupFormPage from "../SignupFormPage";
import LoginForm from "./LoginForm";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <>
      <button
        className="link-span"
        onClick={() => {
          setLogin(true);
          setShowModal(true);
        }}
      >
        Log In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {login && <LoginForm setShowModal={setShowModal} />}
          {!login && <SignupFormPage setShowModal={setShowModal} />}
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
