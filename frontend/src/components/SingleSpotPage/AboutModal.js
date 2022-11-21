import React, { useState, useEffect } from "react";

import { Modal } from "../../context/Modal";

export default function AboutModal({ setShowAboutModal }) {
  return (
    <div className="about-modal">
      <div className="about-modal-content">
        <div className="about-modal-header">
          <button
            onClick={() => setShowAboutModal(false)}
            className="close-about-modal"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div></div>
          <div></div>
        </div>
        <div className="about-modal-head">
          <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" />
          <p>
            AirCover is comprehensive protection included for free with every
            booking.
          </p>
        </div>
        <div className="about-modal-body">
          <div className="about-modal-box">
            <div className="about-box-title">Booking Protection Guarantee</div>
            <div className="about-box-text">
              In the unlikely event a Host needs to cancel your booking within
              30 days of check-in, we’ll find you a similar or better home, or
              we’ll refund you.
            </div>
          </div>
          <div className="about-modal-box">
            <div className="about-box-title">Check-In Guarantee</div>
            <div className="about-box-text">
              If you can’t check into your home and the Host cannot resolve the
              issue, we’ll find you a similar or better home for the length of
              your original stay, or we’ll refund you.
            </div>
          </div>
          <div className="about-modal-box">
            <div className="about-box-title">Get-What-You-Booked Guarantee</div>
            <div className="about-box-text">
              If at any time during your stay you find your listing isn't as
              advertised—for example, the refrigerator stops working and your
              Host can’t easily fix it, or it has fewer bedrooms than
              listed—you'll have three days to report it and we’ll find you a
              similar or better home, or we’ll refund you.
            </div>
          </div>
          <div className="about-modal-box">
            <div className="about-box-title">24-hour Safety Line</div>
            <div className="about-box-text">
              If you ever feel unsafe, you’ll get priority access to
              specially-trained safety agents, day or night.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
