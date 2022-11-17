import React from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import CreateSpot from '../SpotForm/CreateSpot';
import './Navigation.css';
import Logo from '../../images/airbnbeezy_logo3.png';
import SearchBar from './SearchBar';


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
        <li><Link to="/spots"><img className="site-logo" alt="Site logo" src={Logo}/></Link></li>
        <li><SearchBar /></li>
      <li>
        <NavLink exact to="/spots">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
