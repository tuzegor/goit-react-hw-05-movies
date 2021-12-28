import React from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//----------------------------------------------

export function Header() {
  return (
    <>
      <NavLink to="/" className="homeBtn">
        Home
      </NavLink>
      <NavLink to="/movies" className="searchBtn">
        Movies
      </NavLink>
    </>
  );
}
