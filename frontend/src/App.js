import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SingleSpotPage from './components/SingleSpotPage';
import CreateSpot from './components/SpotForm/CreateSpot'
import CurrentUserSpots from './components/CurrentUserSpots'
import Spots from './components/Spots';

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
          <Route exact path="/spots/current">
            <CurrentUserSpots />
          </Route>
          <Route exact path="/spots/:spotId">
            <SingleSpotPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/spots">
            <Spots />
          </Route>
          <Route path="/">
            <Spots />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
