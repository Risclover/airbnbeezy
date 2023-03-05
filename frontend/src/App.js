import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SingleSpotPage from "./components/SingleSpotPage";
import CurrentUserSpots from "./components/CurrentUserSpots";
import Spots from "./components/Spots";
import CreateSpot from "./components/SpotForm/CreateSpotPages/CreateSpot";
import ReviewPage from "./components/ReviewPage";
import ManageListings from "./components/ManageListings/ManageListings";
import CurrentUserReviews from "./components/CurrentUserReviews";
import ScrollToTop from "./components/ScrollToTop";
import CreateSpotOverview from "./components/SpotForm/CreateSpotPages/CreateSpotOverview";
import CreateSpotLocation from "./components/SpotForm/CreateSpotPages/CreateSpotLocation";
import CreateSpotFloorplan from "./components/SpotForm/CreateSpotPages/CreateSpotFloorplan";
import CreateSpotStandout from "./components/SpotForm/CreateSpotPages/CreateSpotStandout";
import CreateSpotPhotos from "./components/SpotForm/CreateSpotPages/CreateSpotPhotos";
import CreateSpotTitle from "./components/SpotForm/CreateSpotPages/CreateSpotTitle";
import CreateSpotDescription from "./components/SpotForm/CreateSpotPages/CreateSpotDescription";
import CreateSpotFinish from "./components/SpotForm/CreateSpotPages/CreateSpotFinish";
import CreateSpotPrice from "./components/SpotForm/CreateSpotPages/CreateSpotPrice";
import CreateSpotReceipt from "./components/SpotForm/CreateSpotPages/CreateSpotReceipt";
import CreateSpotAccess from "./components/SpotForm/CreateSpotPages/CreateSpotAccess";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import EditSpot from "./components/SpotForm/EditSpot/EditSpot";
import ManageBookings from "./components/ManageBookings/ManageBookings";
import SiteFooter from "./components/SiteFooter.js/SiteFooter";

function App() {
  const dispatch = useDispatch();

  const [isCreatePage, setIsCreatePage] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [access, setAccess] = useState("");
  const [category, setCategory] = useState("");
  const [guests, setGuests] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(
    "You'll always remember your time at this unique place to stay."
  );
  const [address, setAddress] = useState("");
  const [aptsuite, setAptSuite] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [imgUrl2, setImgUrl2] = useState("");
  const [imgUrl3, setImgUrl3] = useState("");
  const [imgUrl4, setImgUrl4] = useState("");
  const [imgUrl5, setImgUrl5] = useState("");
  const [step, setStep] = useState(1);
  const [part, setPart] = useState(1);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Navigation isLoaded={isLoaded} />
      <ScrollToTop />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Spots isLoaded={isLoaded} />
          </Route>
          <Route exact path="/create-spot">
            <CreateSpotOverview
              setIsCreatePage={setIsCreatePage}
              category={category}
              setCategory={setCategory}
              guests={guests}
              beds={beds}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              title={title}
              description={description}
              address={address}
              city={city}
              country={country}
              state={state}
              price={price}
              imgUrl={imgUrl}
            />
          </Route>
          <Route exact path="/create-spot/about-your-place"></Route>
          <Route exact path="/create-spot">
            <CreateSpotOverview
              step={step}
              part={part}
              setStep={setStep}
              setPart={setPart}
            />
          </Route>
          <Route exact path="/create-spot/category">
            <CreateSpot category={category} setCategory={setCategory} />
          </Route>
          <Route exact path="/create-spot/access">
            <CreateSpotAccess access={access} setAccess={setAccess} />
          </Route>
          <Route exact path="/create-spot/location">
            <CreateSpotLocation
              address={address}
              category={category}
              aptsuite={aptsuite}
              zipcode={zipcode}
              city={city}
              state={state}
              country={country}
              setAddress={setAddress}
              setAptSuite={setAptSuite}
              setZipcode={setZipcode}
              setCity={setCity}
              setState={setState}
              setCountry={setCountry}
            />
          </Route>
          <Route exact path="/create-spot/floorplan">
            <CreateSpotFloorplan
              guests={guests}
              beds={beds}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              setGuests={setGuests}
              setBeds={setBeds}
              setBedrooms={setBedrooms}
              setBathrooms={setBathrooms}
              category={category}
            />
          </Route>
          <Route exact path="/create-spot/standout">
            <CreateSpotStandout />
          </Route>
          <Route exact path="/create-spot/photos">
            <CreateSpotPhotos
              category={category}
              imgUrl={imgUrl}
              setImgUrl={setImgUrl}
              imgUrl2={imgUrl2}
              imgUrl3={imgUrl3}
              imgUrl4={imgUrl4}
              imgUrl5={imgUrl5}
              setImgUrl2={setImgUrl2}
              setImgUrl3={setImgUrl3}
              setImgUrl4={setImgUrl4}
              setImgUrl5={setImgUrl5}
            />
          </Route>
          <Route exact path="/create-spot/title">
            <CreateSpotTitle
              category={category}
              title={title}
              setTitle={setTitle}
            />
          </Route>
          <Route exact path="/create-spot/description">
            <CreateSpotDescription
              category={category}
              description={description}
              setDescription={setDescription}
            />
          </Route>
          <Route exact path="/create-spot/finish">
            <CreateSpotFinish />
          </Route>
          <Route exact path="/create-spot/price">
            <CreateSpotPrice
              price={price}
              category={category}
              setPrice={setPrice}
            />
          </Route>
          <Route exact path="/create-spot/receipt">
            <CreateSpotReceipt
              setIsCreatePage={setIsCreatePage}
              imgUrl={imgUrl}
              title={title}
              description={description}
              address={address}
              state={state}
              country={country}
              city={city}
              price={price}
              guests={guests}
              beds={beds}
              category={category}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              access={access}
              setImgUrl={setImgUrl}
              setTitle={setTitle}
              setDescription={setDescription}
              setCategory={setCategory}
              setGuests={setGuests}
              setBedrooms={setBedrooms}
              setBeds={setBeds}
              setBathrooms={setBathrooms}
              setAddress={setAddress}
              setAccess={setAccess}
              setPrice={setPrice}
              setZipcode={setZipcode}
              setCountry={setCountry}
              setCity={setCity}
              setState={setState}
            />
          </Route>
          <Route exact path="/spots/:spotId/edit">
            <EditSpot />
          </Route>
          <Route exact path="/my-listings">
            <ManageListings />
          </Route>
          <Route exact path="/my-bookings">
            <ManageBookings />
          </Route>
          <Route exact path="/users/:userId/profile">
            <CurrentUserSpots />
          </Route>
          <Route exact path="/users/:userId/reviews">
            <CurrentUserReviews />
          </Route>
          <Route exact path="/spots/:spotId">
            <SingleSpotPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/spots/:spotId/create-review">
            <ReviewPage />
          </Route>
        </Switch>
      )}
      {!isCreatePage && <SiteFooter />}
    </LocalizationProvider>
  );
}

export default App;
