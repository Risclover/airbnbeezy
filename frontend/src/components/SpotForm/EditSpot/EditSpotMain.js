import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RxChevronRight } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { deleteSpot, getAllSpots, updateSpot } from "../../../store/spots";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { BsFillCircleFill } from "react-icons/bs";
import RadioBtn from "./RadioBtn";
import { Modal } from "../../../context/Modal";
import ConfirmDeleteSpot from "./ConfirmDeleteSpot";
import EditSpotPhotos from "./EditSpotPhotos";
import Countries from "../../../APIs/countries.json";
import { set } from "date-fns";

const categories = [
  "House",
  "Apartment",
  "Barn",
  "Bed & breakfast",
  "Boat",
  "Cabin",
  "Camper",
  "Casa particular",
  "Castle",
  "Cave",
  "Container",
  "Cycladic home",
  "Dammuso",
  "Dome",
  "Earth home",
  "Farm",
  "Guesthouse",
  "Hotel",
  "Houseboat",
  "Mansion",
  "Minsu",
  "Riad",
  "Ryokan",
  "Shepherd's Hut",
  "Tent",
  "Tiny home",
  "Tower",
  "Treehouse",
  "Trullo",
  "Windmill",
  "Yurt",
];

export default function EditSpotMain({ setPhotos, spot }) {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const [name, setName] = useState(spot?.name ? spot.name : "");
  const [openName, setOpenName] = useState(false);
  const [originalName, setOriginalName] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);
  const [city, setCity] = useState(spot?.city);
  const [address, setAddress] = useState(spot?.address);
  const [addressDone, setAddressDone] = useState(false);
  const [state, setState] = useState(spot?.state);
  const [zipcode, setZipcode] = useState(spot?.zipcode);
  const [country, setCountry] = useState(spot?.country);
  const [access, setAccess] = useState(spot?.access);
  const [description, setDescription] = useState(
    spot?.description ? spot?.description : ""
  );
  const [openDesc, setOpenDesc] = useState(false);
  const [originalDesc, setOriginalDesc] = useState(false);
  const [guests, setGuests] = useState(spot?.guests ? spot?.guests : 0);
  const [listed, setListed] = useState(
    spot?.listed === true ? true : spot?.listed === false ? false : false
  );
  const [openListed, setOpenListed] = useState(false);
  const [originalListed, setOriginalListed] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [openRooms, setOpenRooms] = useState(false);
  const [category, setCategory] = useState(spot?.category);
  const [roomsDone, setRoomsDone] = useState(false);
  const [beds, setBeds] = useState(spot?.beds);
  const [bedrooms, setBedrooms] = useState(spot?.bedrooms);
  const [bathrooms, setBathrooms] = useState(spot?.bathrooms);
  const [price, setPrice] = useState(spot?.price);
  const [openPrice, setOpenPrice] = useState(false);
  const [priceDone, setPriceDone] = useState(false);
  const [priceError, setPriceError] = useState("");

  useEffect(() => {
    const payload = { guests: guests, id: +spotId };

    dispatch(updateSpot(payload));
    dispatch(getAllSpots());
  }, [guests, listed]);

  useEffect(() => {
    const payload = { beds: beds, id: +spotId };
    dispatch(updateSpot(payload));
    dispatch(getAllSpots());
  }, [beds]);

  useEffect(() => {
    const payload = { bedrooms: bedrooms, id: +spotId };
    dispatch(updateSpot(payload));
    dispatch(getAllSpots());
  }, [bedrooms]);

  useEffect(() => {
    const payload = { bathrooms: bathrooms, id: +spotId };
    dispatch(updateSpot(payload));
    dispatch(getAllSpots());
  }, [bathrooms]);

  useEffect(() => {
    if (name !== spot?.name && name.length > 0) {
      setOriginalName(true);
    } else {
      setOriginalName(false);
    }

    if (description !== spot?.description && description.length > 0) {
      setOriginalDesc(true);
    } else {
      setOriginalDesc(false);
    }

    if (spot?.listed === true) {
      setOriginalListed(true);
    } else {
      setOriginalListed(false);
    }

    if (
      spot?.address !== address ||
      spot?.city !== city ||
      spot?.state !== state ||
      spot?.zipcode !== zipcode ||
      spot?.country !== country
    ) {
      setAddressDone(true);
    } else {
      setAddressDone(false);
    }

    if (spot?.access !== access || spot?.category !== category) {
      setRoomsDone(true);
    } else {
      setRoomsDone(false);
    }

    if (spot?.price !== price) {
      setPriceDone(true);
    } else {
      setPriceDone(false);
    }
  }, [
    price,
    name,
    description,
    access,
    category,
    address,
    city,
    state,
    zipcode,
    country,
    listed,
  ]);

  const handleNameChange = async (e) => {
    e.preventDefault();
    const payload = { name: name, id: +spotId };
    await dispatch(updateSpot(payload));
    dispatch(getAllSpots());
    setOpenName(false);
  };

  const handleDescChange = async (e) => {
    e.preventDefault();
    const payload = { description: description, id: +spotId };
    await dispatch(updateSpot(payload));
    dispatch(getAllSpots());
    setOpenDesc(false);
  };

  const changeListing = async (e) => {
    e.preventDefault();
    const payload = { listed: listed, id: +spotId };
    await dispatch(updateSpot(payload));
    dispatch(getAllSpots());
    setOpenListed(false);
    // setListed(spot?.listed);
  };

  //   useEffect(() => {
  //     setListed(spot?.listed);
  //   }, [listed]);

  const handleListedChange = (e) => {
    const { name } = e.target;

    if (name === "listed") {
      setListed(true);
    }

    if (name === "unlisted") {
      setListed(false);
    }
  };

  const changeAddress = async (e) => {
    e.preventDefault();
    const payload = {
      address: address,
      city: city,
      state: state,
      country: country,
      zipcode: zipcode,
      id: +spotId,
    };

    await dispatch(updateSpot(payload));
    dispatch(getAllSpots());
    setOpenAddress(false);
  };

  const changeProperty = async (e) => {
    e.preventDefault();
    const payload = { access: access, category: category, id: +spotId };
    await dispatch(updateSpot(payload));
    dispatch(getAllSpots());
    setOpenRooms(false);
  };

  const changePrice = async (e) => {
    e.preventDefault();
    if (price > 0 && price < 10000) {
      const payload = { price: price, id: +spotId };
      await dispatch(updateSpot(payload));
      dispatch(getAllSpots());
      setOpenPrice(false);
    } else {
      setPriceError("Price must be between $0 and $10000.");
    }
  };

  return (
    <div className="edit-spot-main-section">
      <div className="edit-spot-main-section-section">
        <div className="edit-spot-main-section-header">
          <div className="edit-spot-main-section-header-left">
            <span class="anchor" id="Photos">
              Photos
            </span>
          </div>
          <button
            className="edit-spot-main-section-edit-btn"
            onClick={() => setPhotos(true)}
          >
            Edit <RxChevronRight />
          </button>
        </div>
        <EditSpotPhotos />
        <div className="edit-spot-main-section-photos">
          <img src={spot?.previewImage} />
          {spot?.otherImages.map(
            (img, idx) => idx < 3 && <img src={img.url} />
          )}
          <div className="hideyhole">
            <span className="hideyhole-link">
              {spot?.otherImages.length + 1} photos
            </span>
          </div>
        </div>
      </div>
      <div className="edit-spot-main-section-section">
        <div className="edit-spot-main-section-header">
          <div className="edit-spot-main-section-header-left">
            <span class="anchor" id="Listing%20basics">
              Listing basics
            </span>
          </div>
        </div>
        {!openName && (
          <div className="edit-spot-main-section-subsection">
            <div className="edit-spot-main-section-subsection-heading">
              <h3>Listing title</h3>
              <p>{spot?.name}</p>
            </div>
            <button
              className="edit-spot-main-section-edit-btn"
              onClick={() => setOpenName(true)}
            >
              Edit
            </button>
          </div>
        )}
        {openName && (
          <div className="hideybox-wrapper">
            <div className="edit-spot-main-section-hideybox">
              <div className="hideybox-header">
                <div className="hideybox-title">Listing title</div>
                <div
                  className="hideybox-close-btn"
                  onClick={() => setOpenName(false)}
                >
                  <IoMdClose />
                </div>
              </div>
              <div className="hideybox-description">
                Your listing title should highlight what makes your place
                special.
              </div>
              <div
                className={
                  name.length === 50
                    ? "hideybox-input red-input"
                    : "hideybox-input"
                }
                onClick={(e) => e.target.children[0].focus()}
              >
                <input
                  className="hideybox-input-box"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                />
                <span
                  className={
                    name.length === 50
                      ? "hideybox-char-counter char-red"
                      : "hideybox-char-counter"
                  }
                >
                  {name.length}/50
                </span>
              </div>
              <div className="hideybox-button-bar">
                <button
                  className="hideybox-cancel-btn"
                  onClick={() => setOpenName(false)}
                >
                  Cancel
                </button>
                {!originalName && (
                  <button className="hideybox-save-btn" disabled>
                    Save
                  </button>
                )}
                {originalName && (
                  <button
                    className="hideybox-save-btn"
                    onClick={handleNameChange}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        {!openDesc && (
          <div className="edit-spot-main-section-subsection">
            <div className="edit-spot-main-section-subsection-heading">
              <h3>Listing description</h3>
              <p>{spot?.description}</p>
            </div>
            <button
              className="edit-spot-main-section-edit-btn"
              onClick={() => setOpenDesc(true)}
            >
              Edit
            </button>
          </div>
        )}
        {openDesc && (
          <div className="hideybox-wrapper">
            <div className="edit-spot-main-section-hideybox">
              <div className="hideybox-header">
                <div className="hideybox-title">Listing description</div>
                <div
                  className="hideybox-close-btn"
                  onClick={() => setOpenDesc(false)}
                >
                  <IoMdClose />
                </div>
              </div>
              <div className="hideybox-description">
                Give guests a sense of what it’s like to stay at your place,
                including why they’ll love staying there.
              </div>
              <div
                className={
                  description.length === 500
                    ? "hideybox-input red-input"
                    : "hideybox-input"
                }
                onClick={(e) => e.target.children[0].focus()}
              >
                <textarea
                  className="hideybox-input-textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength={500}
                ></textarea>
                <span
                  className={
                    description.length === 500
                      ? "hideybox-char-counter char-red"
                      : "hideybox-char-counter"
                  }
                >
                  {description.length}/500
                </span>
              </div>
              <div className="hideybox-button-bar">
                <button
                  className="hideybox-cancel-btn"
                  onClick={() => setOpenDesc(false)}
                >
                  Cancel
                </button>
                {!originalDesc && (
                  <button className="hideybox-save-btn" disabled>
                    Save
                  </button>
                )}
                {originalDesc && (
                  <button
                    className="hideybox-save-btn"
                    onClick={handleDescChange}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="edit-spot-subsection-guests">
          <div className="edit-spot-subsection-guests-left">
            Number of guests
          </div>
          <div className="edit-spot-subsection-guests-right">
            <button
              className="edit-spot-less-guests"
              onClick={(e) => {
                setGuests((prev) => (guests !== 1 ? prev - 1 : prev));
              }}
            >
              <BiMinus />
            </button>
            <div className="edit-spot-guests-num">{guests}</div>
            <button
              className="edit-spot-more-guests"
              onClick={(e) => {
                setGuests((prev) => prev + 1);
              }}
            >
              <BiPlus />
            </button>
          </div>
        </div>
        {!openListed && (
          <div className="edit-spot-main-section-subsection status-subsection">
            <div className="edit-spot-main-section-subsection-heading">
              <h3>Listing status</h3>
              {spot?.listed === true && (
                <p className="spot-is-listed">
                  <BsFillCircleFill /> Listed - Guests can find your listing in
                  search results and request or book available dates.
                </p>
              )}
              {spot?.listed === false && (
                <p className="spot-is-unlisted">
                  <BsFillCircleFill /> Unlisted - Guests can’t book your listing
                  or find it in search results.
                </p>
              )}
            </div>
            <button
              className="edit-spot-main-section-edit-btn"
              onClick={() => setOpenListed(true)}
            >
              Edit
            </button>
          </div>
        )}
        {openListed && (
          <div className="hideybox-wrapper">
            <div className="edit-spot-main-section-hideybox">
              <div className="hideybox-header header-listing">
                <div className="hideybox-title">Listing status</div>
                <div
                  className="hideybox-close-btn"
                  onClick={() => setOpenListed(false)}
                >
                  <IoMdClose />
                </div>
              </div>
              <div className="hideybox-radio">
                <RadioBtn
                  name="listed"
                  id="listed"
                  value="Listed"
                  text="Listed"
                  onChange={handleListedChange}
                  checked={listed === true}
                />
                <RadioBtn
                  name="unlisted"
                  id="unlisted"
                  value="Unlisted"
                  text="Unlisted"
                  onChange={handleListedChange}
                  checked={listed === false}
                />
                <button
                  className="deactivate-btn"
                  onClick={() => setShowDeleteModal(true)}
                >
                  <RadioBtn
                    name="deactivate"
                    id="deactivate"
                    value="Deactivate"
                    text="Deactivate"
                    onChange={handleListedChange}
                  />
                </button>
              </div>

              <div className="hideybox-button-bar">
                <button
                  className="hideybox-cancel-btn"
                  onClick={() => setOpenListed(false)}
                >
                  Cancel
                </button>
                {originalListed === listed && (
                  <button className="hideybox-save-btn" disabled>
                    Save
                  </button>
                )}
                {originalListed !== listed && (
                  <button className="hideybox-save-btn" onClick={changeListing}>
                    Save
                  </button>
                )}
              </div>
              {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                  <ConfirmDeleteSpot
                    setShowDeleteModal={setShowDeleteModal}
                    showDeleteModal={showDeleteModal}
                    spotId={+spotId}
                  />
                </Modal>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="edit-spot-main-section-section">
        <div className="edit-spot-main-section-header">
          <div className="edit-spot-main-section-header-left">
            <span class="anchor" id="Location">
              Location
            </span>
          </div>
        </div>
        {!openAddress && (
          <div className="edit-spot-main-section-subsection status-subsection">
            <div className="edit-spot-main-section-subsection-heading">
              <h3>Address</h3>
              <p>
                {spot?.address}, {spot?.city},{" "}
                {spot?.state && spot?.state + ", "} {spot?.country}
              </p>
            </div>
            <button
              className="edit-spot-main-section-edit-btn"
              onClick={() => setOpenAddress(true)}
            >
              Edit
            </button>
          </div>
        )}
        {openAddress && (
          <div className="hideybox-wrapper">
            {" "}
            <div className="edit-spot-main-section-hideybox">
              <div className="hideybox-header header-listing">
                <div className="hideybox-title">Address</div>
                <div
                  className="hideybox-close-btn"
                  onClick={() => setOpenAddress(false)}
                >
                  <IoMdClose />
                </div>
              </div>
              <div className="hideybox-form">
                <div className="hideybox-address-input">
                  <label>
                    Country/Region
                    <select
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      className="hideybox-address-select"
                    >
                      <option defaultValue selected disabled>
                        Choose country
                      </option>
                      {Countries.map((cntry) => (
                        <option value={cntry.name}>{cntry.name}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Street
                    <input
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                    />
                  </label>
                  <div className="half-inputs">
                    <label>
                      City
                      <input
                        type="text"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                      />
                    </label>
                    <label>
                      State
                      <input
                        type="text"
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                      />
                    </label>
                  </div>
                  <label>
                    Zipcode
                    <input
                      type="text"
                      className="address-half-input"
                      onChange={(e) => setZipcode(e.target.value)}
                      value={zipcode}
                    />
                  </label>
                </div>
              </div>
              <div className="hideybox-button-bar">
                <button
                  className="hideybox-cancel-btn"
                  onClick={() => setOpenAddress(false)}
                >
                  Cancel
                </button>
                {!addressDone && (
                  <button className="hideybox-save-btn" disabled>
                    Save
                  </button>
                )}
                {addressDone && (
                  <button className="hideybox-save-btn" onClick={changeAddress}>
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="edit-spot-main-section-section">
        <div className="edit-spot-main-section-header">
          <div className="edit-spot-main-section-header-left">
            <span class="anchor" id="Property%20and%20rooms">
              Property and rooms
            </span>
          </div>
        </div>
        {!openRooms && (
          <div className="edit-spot-main-section-subsection">
            <div className="edit-spot-main-section-subsection-heading">
              <h3>Property type</h3>
              <p>{spot?.category}</p>
              <p className="second-p">
                Listing type:{" "}
                {spot?.access === "private" || spot?.access === "shared"
                  ? spot?.access.slice(0, 1).toUpperCase() +
                    spot?.access.slice(1) +
                    " room in "
                  : spot?.access.slice(0, 1).toUpperCase() +
                    spot?.access.slice(1) +
                    " "}{" "}
                home/apt
              </p>
            </div>
            <button
              className="edit-spot-main-section-edit-btn"
              onClick={() => setOpenRooms(true)}
            >
              Edit
            </button>
          </div>
        )}
        {openRooms && (
          <div className="hideybox-wrapper">
            {" "}
            <div className="edit-spot-main-section-hideybox">
              <div className="hideybox-header header-listing">
                <div className="hideybox-title">Property type</div>
                <div
                  className="hideybox-close-btn"
                  onClick={() => setOpenRooms(false)}
                >
                  <IoMdClose />
                </div>
              </div>
              <div className="hideybox-description">
                Choose a property type that’s most like your place to set
                expectations for guests.
              </div>
              <div className="hideybox-form">
                <div className="hideybox-address-input">
                  <label>
                    Property type
                    <select
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                      className="hideybox-address-select"
                    >
                      {categories.map((cat) => (
                        <option value={cat}>{cat}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Listing type
                    <select
                      onChange={(e) => setAccess(e.target.value)}
                      value={access}
                      className="hideybox-address-select"
                    >
                      <option value={"entire"}>Entire place</option>
                      <option value="private">Private room</option>
                      <option value="shared">Shared room</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="hideybox-button-bar">
                <button
                  className="hideybox-cancel-btn"
                  onClick={() => setOpenRooms(false)}
                >
                  Cancel
                </button>
                {!roomsDone && (
                  <button className="hideybox-save-btn" disabled>
                    Save
                  </button>
                )}
                {roomsDone && (
                  <button
                    className="hideybox-save-btn"
                    onClick={changeProperty}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="edit-spot-subsection-guests">
          <div className="edit-spot-subsection-guests-left">Number of beds</div>
          <div className="edit-spot-subsection-guests-right">
            <button
              className="edit-spot-less-guests"
              onClick={(e) => {
                setBeds((prev) => (beds !== 1 ? prev - 1 : prev));
              }}
            >
              <BiMinus />
            </button>
            <div className="edit-spot-guests-num">{beds}</div>
            <button
              className="edit-spot-more-guests"
              onClick={(e) => {
                setBeds((prev) => prev + 1);
              }}
            >
              <BiPlus />
            </button>
          </div>
        </div>
        <div className="edit-spot-subsection-guests">
          <div className="edit-spot-subsection-guests-left">
            Number of bedrooms
          </div>
          <div className="edit-spot-subsection-guests-right">
            <button
              className="edit-spot-less-guests"
              onClick={(e) => {
                setBedrooms((prev) => (bedrooms !== 1 ? prev - 1 : prev));
              }}
            >
              <BiMinus />
            </button>
            <div className="edit-spot-guests-num">{bedrooms}</div>
            <button
              className="edit-spot-more-guests"
              onClick={(e) => {
                setBedrooms((prev) => prev + 1);
              }}
            >
              <BiPlus />
            </button>
          </div>
        </div>
        <div className="edit-spot-subsection-guests  status-subsection">
          <div className="edit-spot-subsection-guests-left">
            Number of bathrooms
          </div>
          <div className="edit-spot-subsection-guests-right">
            <button
              className="edit-spot-less-guests"
              onClick={(e) => {
                setBathrooms((prev) => (bathrooms !== 1 ? prev - 1 : prev));
              }}
            >
              <BiMinus />
            </button>
            <div className="edit-spot-guests-num">{bathrooms}</div>
            <button
              className="edit-spot-more-guests"
              onClick={(e) => {
                setBathrooms((prev) => prev + 1);
              }}
            >
              <BiPlus />
            </button>
          </div>
        </div>
      </div>
      <div className="edit-spot-main-section-section">
        <div className="edit-spot-main-section-header">
          <div className="edit-spot-main-section-header-left">
            <span class="anchor" id="Pricing">
              Pricing
            </span>
          </div>
        </div>
        {!openPrice && (
          <div className="edit-spot-main-section-subsection status-subsection">
            <div className="edit-spot-main-section-subsection-heading">
              <h3>Nightly price</h3>
              <p>Base price: ${spot?.price}</p>
            </div>
            <button
              className="edit-spot-main-section-edit-btn"
              onClick={() => setOpenPrice(true)}
            >
              Edit
            </button>
          </div>
        )}
        {openPrice && (
          <div className="hideybox-wrapper">
            {" "}
            <div className="edit-spot-main-section-hideybox">
              <div className="hideybox-header header-listing">
                <div className="hideybox-title">Nightly price</div>
                <div
                  className="hideybox-close-btn"
                  onClick={() => setOpenPrice(false)}
                >
                  <IoMdClose />
                </div>
              </div>
              <div className="hideybox-form">
                <div className="hideybox-address-input">
                  <label className="base-price-label">
                    Base price
                    <input
                      className="base-price-input"
                      type="text"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      value={price}
                    />
                    <span className="dollar-sign-span">$</span>
                  </label>
                  <div className="price-error">{priceError}</div>
                </div>
              </div>
              <div className="hideybox-button-bar">
                <button
                  className="hideybox-cancel-btn"
                  onClick={() => setOpenPrice(false)}
                >
                  Cancel
                </button>
                {!priceDone && (
                  <button className="hideybox-save-btn" disabled>
                    Save
                  </button>
                )}
                {priceDone && (
                  <button className="hideybox-save-btn" onClick={changePrice}>
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
