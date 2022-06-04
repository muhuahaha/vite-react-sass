import React from 'react';

import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate('/')}>
            <p>{pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'} Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/offers')}>
            <p>
              {pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'} Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/profile')}>
            <p>
              {pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}
              Profile
            </p>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Navigation;
