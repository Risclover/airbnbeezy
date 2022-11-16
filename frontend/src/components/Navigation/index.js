import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import CreateSpot from '../SpotForm/CreateSpot';
import './Navigation.css';
import Logo from '../../images/airbnbeezy_logo.png';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
  const openCreateSpot = () => {
    const createSpotForm = document.querySelector('.createspot-form');
    createSpotForm.style.display = "block";

  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
        <>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className="nav">
        <li><img className="site-logo" alt="Site logo" src={Logo}/></li>
      <li>
        <NavLink exact to="/spots">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
