import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { addSpotImg } from "../../../store/spot-images";
import {
  addSpot,
  addImage,
  getAllSpots,
  addPreviewImage,
} from "../../../store/spots";
export default function CreateSpotReceipt({
  imgUrl,
  imgUrl2,
  imgUrl3,
  imgUrl4,
  imgUrl5,
  title,
  description,
  category,
  guests,
  beds,
  bedrooms,
  bathrooms,
  address,
  city,
  state,
  price,
  access,
  country,
  zipcode,
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.session.user);
  const user = useSelector((state) => state.users[currentUser.id]);

  const handleNext = async (e) => {
    e.preventDefault();
    const img = { url: imgUrl, preview: true };
    const img2 = { url: imgUrl2, preview: false };
    const img3 = { url: imgUrl3, preview: false };
    const img4 = { url: imgUrl4, preview: false };
    const img5 = { url: imgUrl5, preview: false };
    const payload = {
      name: title,
      description,
      price,
      zipcode,
      address,
      city,
      state,
      country,
      beds,
      guests,
      bedrooms,
      bathrooms,
      category: category,
      previewImage: imgUrl,
      otherImages: [imgUrl2, imgUrl3, imgUrl4, imgUrl5],
      listed: true,
      access: access,
    };

    const data = await dispatch(addSpot(payload));
    dispatch(getAllSpots());
    await dispatch(addPreviewImage(img, data));
    await dispatch(
      addSpotImg({ url: imgUrl2, preview: false, spotId: data.id })
    );
    await dispatch(
      addSpotImg({ url: imgUrl3, preview: false, spotId: data.id })
    );
    await dispatch(
      addSpotImg({ url: imgUrl4, preview: false, spotId: data.id })
    );
    await dispatch(
      addSpotImg({ url: imgUrl5, preview: false, spotId: data.id })
    );
    history.push("/my-listings");
  };
  return (
    <div className="create-spot-receipt-page">
      <Helmet>
        <title>Review and save your listing - Airbnbeezy</title>
      </Helmet>
      <div className="create-spot-receipt">
        <div className="create-spot-receipt-header">
          <h1>Review your listing</h1>
          <p>
            Here's what we'll show to guests. Make sure everything looks good.
          </p>
        </div>
        <div className="create-spot-preview-box">
          <div className="create-spot-preview-img">
            <img src={imgUrl} />
          </div>
          <div className="create-spot-right">
            <h1>{title}</h1>
            <div className="create-spot-header-details">
              <div className="create-spot-header-details-left">
                <h2>
                  {category} hosted by {currentUser.firstName}
                </h2>
                <div className="create-spot-header-subtitle">
                  {guests} guests - {bedrooms} bedrooms - {beds} beds -{" "}
                  {bathrooms} baths
                </div>
              </div>

              <div className="create-spot-user-img">
                <img src={user?.userImage} />
              </div>
            </div>
            <div
              className="create-spot-receipt-description"
              style={{ whiteSpace: "pre-line" }}
            >
              {description}
            </div>
            <div className="create-spot-receipt-location">
              <h2>Location</h2>
              <h3 className="create-spot-receipt-address">
                {address}, {city}, {state ? state + "," : ""}{" "}
                {zipcode ? zipcode + "," : ""} {country}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="create-spot-button-bar">
        <div className="button-bar-step-bars">
          <div className="button-bar-step">
            <div
              className="button-bar-stepstep"
              style={{
                transition: "transform 600ms linear 0s",
                transform: "translateX(100%)",
              }}
            ></div>
          </div>
          <div className="button-bar-step">
            {" "}
            <div
              className="button-bar-stepstep"
              style={{
                transition: "transform 600ms linear 0s",
                transform: "translateX(100%)",
              }}
            ></div>
          </div>
          <div className="button-bar-step">
            <div
              className="button-bar-stepstep"
              style={{
                transition: "transform 600ms linear 0s",
                transform: "translateX(82%)",
              }}
            ></div>
          </div>
        </div>
        <div className="button-bar-buttons-box">
          <button
            className="button-bar-back"
            onClick={() => history.push("/create-spot/price")}
          >
            Back
          </button>
          <button className={"button-bar-next"} onClick={handleNext}>
            Create Listing
          </button>
        </div>
      </div>
    </div>
  );
}
