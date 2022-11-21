import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SingleSpotPage from "./components/SingleSpotPage";
import CurrentUserSpots from "./components/CurrentUserSpots";
import Spots from "./components/Spots";
import CreateSpot from "./components/SpotForm/CreateSpot";
import ReviewPage from "./components/ReviewPage";
import ManageListings from "./components/CurrentUserSpots/ManageListings";
import CurrentUserReviews from "./components/CurrentUserReviews";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Spots isLoaded={isLoaded} />
          </Route>
          <Route exact path="/create-spot">
            <CreateSpot />
          </Route>
          <Route exact path="/spots/current">
            <ManageListings />
          </Route>
          <Route exact path="/spots/profile">
            <CurrentUserSpots />
          </Route>
          <Route exact path="/reviews/current">
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
    </>
  );
}

export default App;
