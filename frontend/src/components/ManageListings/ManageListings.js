import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { getSpots, getAllSpots } from "../../store/spots";
import Listing from "../CurrentUserSpots/Listing";
import { BsPlusLg, BsCircleFill } from "react-icons/bs";
import moment from "moment";
import "./ManageListings.css";
import { Helmet } from "react-helmet";

export default function ManageListings() {
  const history = useHistory();
  const dispatch = useDispatch();

  const spotsList = useSelector(getSpots);
  const sessionUser = useSelector((state) => state.session.user);

  const [nameModified, setNameModified] = useState(false);
  const [statusModified, setStatusModified] = useState(false);
  const [bedroomsModified, setBedroomsModified] = useState(false);
  const [bedsModified, setBedsModified] = useState(false);
  const [bathroomsModified, setBathroomsModified] = useState(false);
  const [locationModified, setLocationModified] = useState(false);
  const [updateModified, setUpdateModified] = useState(false);
  const [sorted, setSorted] = useState([...spotsList]);
  const [nameSort, setNameSort] = useState(false);
  const [statusSort, setStatusSort] = useState(false);
  const [bedroomsSort, setBedroomsSort] = useState(false);
  const [bedsSort, setBedsSort] = useState(false);
  const [bathroomsSort, setBathroomsSort] = useState(false);
  const [locationSort, setLocationSort] = useState(false);
  const [updateSort, setUpdateSort] = useState(false);

  useEffect(() => {
    dispatch(getAllSpots());
  }, []);

  let count = 0;
  for (let spot of spotsList) {
    if (spot.ownerId === sessionUser.id) {
      count += 1;
    }
  }

  const clearModifieds = () => {
    setNameModified(false);
    setStatusModified(false);
    setBedroomsModified(false);
    setBedsModified(false);
    setBathroomsModified(false);
    setLocationModified(false);
    setUpdateModified(false);
  };

  const sortByModified = () => {
    let sorted = [...spotsList];
    sorted.sort((a, b) => {
      let spotA = new Date(a.updatedAt);
      let spotB = new Date(b.updatedAt);

      if (!updateSort) return spotB - spotA;
      if (updateSort) return spotA - spotB;
    });

    setSorted(sorted);
    clearModifieds();
    setUpdateModified(true);
    setUpdateSort(!updateSort);
  };

  const sortByLocation = () => {
    let sorted = [...spotsList];

    sorted.sort((a, b) => {
      if (!locationSort) {
        if (a.city < b.city) {
          return -1;
        }
        if (a.city > b.city) {
          return 1;
        }
        return 0;
      }
      if (locationSort) {
        if (a.city > b.city) return -1;
        if (a.city < b.city) return 1;
        return 0;
      }
    });

    setSorted(sorted);
    clearModifieds();
    setLocationModified(true);
    setLocationSort(!locationSort);
  };

  const sortByBeds = () => {
    let sorted = [...spotsList];

    sorted.sort((a, b) => {
      if (bedsSort) return b.beds - a.beds;
      if (!bedsSort) return a.beds - b.beds;
    });

    setSorted(sorted);
    clearModifieds();
    setBedsModified(true);
    setBedsSort(!bedsSort);
  };

  const sortByBedrooms = () => {
    let sorted = [...spotsList];

    sorted.sort((a, b) => {
      if (bedroomsSort) return b.bedrooms - a.bedrooms;
      if (!bedroomsSort) return a.bedrooms - b.bedrooms;
    });

    setSorted(sorted);
    clearModifieds();
    setBedroomsModified(true);
    setBedroomsSort(!bedroomsSort);
  };

  const sortByBathrooms = () => {
    let sorted = [...spotsList];

    sorted.sort((a, b) => {
      if (bathroomsSort) return b.bathrooms - a.bathrooms;
      if (!bathroomsSort) return a.bathrooms - b.bathrooms;
    });

    setSorted(sorted);
    clearModifieds();
    setBathroomsModified(true);
    setBathroomsSort(!bathroomsSort);
  };

  const sortByName = () => {
    let sorted = [...spotsList];

    sorted.sort((a, b) => {
      if (!nameSort) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
      if (nameSort) {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      }
    });

    setSorted(sorted);
    clearModifieds();
    setNameModified(true);
    setNameSort(!nameSort);
  };

  const sortByStatus = () => {
    let sorted = [...spotsList];

    sorted.sort((a, b) => {
      if (statusSort) {
        if (a.listed < b.listed) {
          return -1;
        }
        if (a.listed > b.listed) {
          return 1;
        }
        return 0;
      }
      if (!statusSort) {
        if (a.listed > b.listed) return -1;
        if (a.listed < b.listed) return 1;
        return 0;
      }
    });

    setSorted(sorted);
    clearModifieds();
    setStatusModified(true);
    setStatusSort(!statusSort);
  };

  return (
    <div className="manage-listings-page">
      <div className="manage-listings">
        <div className="manage-listings-header">
          <div className="manage-listings-header-left">
            <h1>{count} listings</h1>
          </div>
          <div className="manage-listings-header-right">
            <button
              className="manage-listings-create-listing-btn"
              onClick={() => history.push("/create-spot")}
            >
              <BsPlusLg /> Create listing
            </button>
          </div>
        </div>
        <div className="manage-listings">
          <table className="listings-table">
            <thead>
              <tr>
                <th></th>
                <th className="column-type-1">
                  <button className="table-sort-head" onClick={sortByName}>
                    Listing{" "}
                    {!nameModified && (
                      <div className="sort-icons">
                        <i className="fa-solid fa-sort"></i>
                      </div>
                    )}
                    {nameModified && nameSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-up"></i>
                      </div>
                    )}
                    {nameModified && !nameSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-down"></i>
                      </div>
                    )}
                  </button>
                </th>
                <th className="column-type-3">
                  <button className="table-sort-head" onClick={sortByStatus}>
                    Status{" "}
                    {!statusModified && (
                      <div className="sort-icons">
                        <i className="fa-solid fa-sort"></i>
                      </div>
                    )}
                    {statusModified && statusSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-up"></i>
                      </div>
                    )}
                    {statusModified && !statusSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-down"></i>
                      </div>
                    )}
                  </button>
                </th>
                <th className="column-type-3">
                  <button className="table-sort-head" onClick={sortByBeds}>
                    Beds{" "}
                    {!bedsModified && (
                      <div className="sort-icons">
                        <i className="fa-solid fa-sort"></i>
                      </div>
                    )}
                    {bedsModified && bedsSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-up"></i>
                      </div>
                    )}
                    {bedsModified && !bedsSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-down"></i>
                      </div>
                    )}
                  </button>
                </th>
                <th className="column-type-3">
                  <button className="table-sort-head" onClick={sortByBedrooms}>
                    Bedrooms{" "}
                    {!bedroomsModified && (
                      <div className="sort-icons">
                        <i className="fa-solid fa-sort"></i>
                      </div>
                    )}
                    {bedroomsModified && bedroomsSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-up"></i>
                      </div>
                    )}
                    {bedroomsModified && !bedroomsSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-down"></i>
                      </div>
                    )}
                  </button>
                </th>
                <th className="column-type-3">
                  <button className="table-sort-head" onClick={sortByBathrooms}>
                    Bathrooms{" "}
                    {!bathroomsModified && (
                      <div className="sort-icons">
                        <i className="fa-solid fa-sort"></i>
                      </div>
                    )}
                    {bathroomsModified && bathroomsSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-up"></i>
                      </div>
                    )}
                    {bathroomsModified && !bathroomsSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-down"></i>
                      </div>
                    )}
                  </button>
                </th>
                <th className="column-type-2">
                  <button className="table-sort-head" onClick={sortByLocation}>
                    Location{" "}
                    {!locationModified && (
                      <div className="sort-icons">
                        <i className="fa-solid fa-sort"></i>
                      </div>
                    )}
                    {locationModified && locationSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-up"></i>
                      </div>
                    )}
                    {locationModified && !locationSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-down"></i>
                      </div>
                    )}
                  </button>
                </th>
                <th className="column-type-2">
                  <button className="table-sort-head" onClick={sortByModified}>
                    Last Modified{" "}
                    {!updateModified && (
                      <div className="sort-icons">
                        <i className="fa-solid fa-sort"></i>
                      </div>
                    )}
                    {updateModified && updateSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-up"></i>
                      </div>
                    )}
                    {updateModified && !updateSort && (
                      <div className="sort-icons icon-black">
                        <i className="fa-solid fa-sort-down"></i>
                      </div>
                    )}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map(
                (spot) =>
                  spot.ownerId === sessionUser.id && (
                    <tr>
                      <td className="edit-column">
                        <button
                          className="edit-column-btn"
                          onClick={() => history.push(`/spots/${spot.id}/edit`)}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </td>
                      <td>
                        <NavLink to={`/spots/${spot.id}`}>
                          <div className="listing-cell">
                            <img
                              className="listings-table-img"
                              src={spot.previewImage}
                            />
                            {spot.name}
                          </div>
                        </NavLink>
                      </td>
                      <td
                        className={
                          spot.listed ? "list-status-green" : "list-status-red"
                        }
                      >
                        <BsCircleFill />
                        {spot.listed ? "Listed" : "Unlisted"}
                      </td>
                      <td>{spot.beds}</td>
                      <td>{spot.bedrooms}</td>
                      <td>{spot.bathrooms}</td>
                      <td>
                        {spot.country === "United States"
                          ? spot.city + ", " + spot.state
                          : spot.city + ", " + spot.country}
                      </td>
                      <td>{moment(new Date(spot.updatedAt)).fromNow()}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
