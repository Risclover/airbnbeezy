import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./CreateSpot.css";
import { Helmet } from "react-helmet";

export default function CreateSpotOverview({ setIsCreatePage }) {
  useEffect(() => {
    setIsCreatePage(true);
  }, []);

  return (
    <div className="create-spot-overview-page">
      <Helmet>
        <title>Create your listing - Airbnbeezy</title>
      </Helmet>
      <div className="create-spot-overview">
        <div className="create-spot-overview-left">
          <h1>It's easy to get started on Airbnbeezy</h1>
        </div>
        <div className="create-spot-overview-list">
          <div className="create-spot-overview-listitem listitem-first">
            <div className="create-spot-listitem-leftleft">
              <div className="create-spot-listitem-left">1</div>
              <div className="create-spot-listitem-middle">
                <h2>Tell us about your place</h2>
                <h3>
                  Share some basic info, like where it is and how many guests
                  can stay.
                </h3>
              </div>
            </div>
            <div className="create-spot-listitem-right">
              <img src="https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg" />
            </div>
          </div>
          <div className="create-spot-overview-listitem">
            <div className="create-spot-listitem-leftleft">
              <div className="create-spot-listitem-left">2</div>
              <div className="create-spot-listitem-middle">
                <h2>Make it stand out</h2>
                <h3>
                  Add 5 or more photos plus a title and description—we’ll help
                  you out.
                </h3>
              </div>
            </div>
            <div className="create-spot-listitem-right">
              <img src="https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg" />
            </div>
          </div>
          <div className="create-spot-overview-listitem">
            <div className="create-spot-listitem-leftleft">
              <div className="create-spot-listitem-left">3</div>
              <div className="create-spot-listitem-middle">
                <h2>Finish up and publish</h2>
                <h3>
                  Choose if you'd like to start with an experienced guest, set a
                  starting price, and publish your listing.
                </h3>
              </div>
            </div>
            <div className="create-spot-listitem-right">
              <img src="https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="create-spot-button-box">
        <NavLink to={`/create-spot/category`}>
          <button className="create-spot-btn">Get started</button>
        </NavLink>
      </div>
    </div>
  );
}
