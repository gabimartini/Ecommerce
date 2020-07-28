/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import classes from './MenuItemsMobile.module.css';
import MenuItem from '../MenuItem';

const Menuitems = () => (

  <div className={classes.ItemMobile}>
    <MenuItem link="/All" exact>All</MenuItem>
    <MenuItem link="/Top">Top</MenuItem>
    <MenuItem link="/Bottom">Bottom</MenuItem>
    <MenuItem link="/Jumpsuit">Jumpsuit</MenuItem>
    <MenuItem link="/Dress">Dress</MenuItem>
  </div>

);

export default Menuitems;
