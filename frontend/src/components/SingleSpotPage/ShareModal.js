import React, { useState } from "react";

export default function ShareModal({
  setShowShareModal,
  image,
  title,
  spotId,
}) {
  const [copyText, setCopyText] = useState(
    `http://localhost:3002/spots/${spotId}`
  );
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="share-modal">
      <button className="close-share" onClick={() => setShowShareModal(false)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <h1>Share this place with friends and family</h1>
      <div className="sharemodal-info">
        <img className="share-modal-img" src={image} />
        <div className="share-modal-title">{title}</div>
      </div>
      <div className="sharemodal-form">
        <button
          className="copy-url"
          onClick={() => {
            navigator.clipboard.writeText(copyText);
            setShowResults(true);
          }}
        >
          {" "}
          <i className="fa-regular fa-copy"></i>
          Copy URL
        </button>
      </div>
      {showResults ? (
        <div className="sharemodal-results">Link copied!</div>
      ) : null}
    </div>
  );
}
