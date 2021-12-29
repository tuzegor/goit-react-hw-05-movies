import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
  return (
    <section className={styles.header}>
      <div className="container">
        <NavLink
          to="/"
          exact
          className={styles.homeLink}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={styles.searchLink}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </div>
    </section>
  );
}
