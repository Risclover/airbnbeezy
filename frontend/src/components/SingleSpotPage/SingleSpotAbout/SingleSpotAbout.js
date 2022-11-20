import React, { useState } from "react";
import "./SingleSpotAbout.css";
import { Modal } from "../../../context/Modal";
import AboutModal from "../AboutModal";
import SingleSpotAboutHeader from "./SingleSpotAboutHeader";
import SingleSpotAboutHighlights from "./SingleSpotAboutHighlights";
import SingleSpotAboutAircover from "./SingleSpotAboutAircover";
import SingleSpotAboutDescription from "./SingleSpotAboutDescription";
import SingleSpotReservation from "./SingleSpotReservation";
export default function SingleSpotAbout({ spot }) {
  const [showAboutModal, setShowAboutModal] = useState(false);
  return (
    <div className="single-spot-about">
      <div className="single-spot-about-boxes">
        <SingleSpotAboutHeader />
        <SingleSpotAboutHighlights />
        <SingleSpotAboutAircover setShowAboutModal={setShowAboutModal} />
        <SingleSpotAboutDescription spot={spot} />
        {showAboutModal && (
          <Modal onClose={() => setShowAboutModal(false)}>
            <AboutModal
              modalContent={"about"}
              setShowAboutModal={setShowAboutModal}
            />
          </Modal>
        )}
      </div>
      <SingleSpotReservation />
    </div>
  );
}
