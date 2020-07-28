/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import classes from './MenuItems.module.css';
import MenuItem from './MenuItem';

const Menuitems = (props) => (

  <div className={classes.dropdown}>
    <li className={classes.dropbtn}>
      {props.children}
    </li>
    <div className={classes.dropdowncontent}>
      <MenuItem link="/All" exact>All</MenuItem>
      <MenuItem link="/Top">Top</MenuItem>
      <MenuItem link="/Bottom">Bottom</MenuItem>
      <MenuItem link="/Jumpsuit">Jumpsuit</MenuItem>
      <MenuItem link="/Dress">Dress</MenuItem>
    </div>
  </div>

);

export default Menuitems;
