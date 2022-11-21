import React from "react";

export default function IdentityModal({ setShowIdentityModal }) {
  return (
    <div className="identity-modal">
      <div className="identity-form-header">
        <button
          onClick={() => setShowIdentityModal(false)}
          className="loginform-close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h1>Identity verification</h1>
        <div></div>
      </div>
      <div className="identity-modal-body">
        <h1>Why is this important?</h1>
        <p>
          The Airbnb community works best when its members know and trust each
          other. That’s why, before booking a home or experience, or becoming a
          host, we may ask you to confirm some account info.
        </p>
        <div className="identity-modal-point">
          <div className="identity-modal-icon">
            <i className="fa-solid fa-mobile-retro"></i>
          </div>
          <div className="identity-modal-info">
            <h2>Phone and email verification</h2>{" "}
            <p>
              Having confirmed contact info gives your hosts, guests, and Airbnb
              a way to contact you about your reservations or your account.
              Hosts are required to confirm contact info before listing their
              homes, and guests must do the same before booking a reservation.
              You also need a verified phone number to complete identity
              verification.
            </p>
          </div>
        </div>
        <div className="identity-modal-point">
          <div className="identity-modal-icon">
            <i className="fa-regular fa-id-card"></i>
          </div>
          <div className="identity-modal-info">
            <h2>Identity verification</h2>
            <p>
              Airbnb checks that people are who they say they are by confirming
              identity information with third parties or by reviewing
              government-issued documents, like a government ID, passport, or
              national identity card.
            </p>
            <p>
              {" "}
              Airbnb does this differently depending on each person. This is
              because both the best data sources vary from country to country
              and our processes may evolve over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
