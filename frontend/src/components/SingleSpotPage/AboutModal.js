import React, { useState } from "react";

export default function AboutModal({ setShowAboutModal, modalContent }) {
  const [content, setContent] = useState("");
  if (modalContent === "about") {
    setContent("About 1");
  }
  return (
    <div className="about-modal">
      <button onClick={setShowAboutModal(false)}>X</button>
      {content}
    </div>
  );
}
