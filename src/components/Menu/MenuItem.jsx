/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MenuItem.module.css';

const MenuItem = (props) => (
  <li className={classes.dropdowncontentItem}>
    <NavLink
      to={{
        pathname: props.link,
        state: { type: props.children },
      }}
      exact={props.exact}
      className={classes.NavLink}
    >
      {props.children}
    </NavLink>
  </li>
);

export default MenuItem;
