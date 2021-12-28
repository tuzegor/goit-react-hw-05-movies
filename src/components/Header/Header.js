import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <NavLink to="/" className="homeLink">
        Home
      </NavLink>
      <NavLink to="/movies" className="searchLink">
        Movies
      </NavLink>
    </>
  );
}
