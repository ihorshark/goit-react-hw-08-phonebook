import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './authNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Log in
      </NavLink>
    </div>
  );
};
