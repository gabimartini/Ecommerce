/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import classes from './ButtonMain.module.css';

const ButtonMain = (props) => (
  <button type="button" className="btn btn-secondary" id={classes.btn} onClick={props.ClickOpen}>
    {props.children}
  </button>
);

export default ButtonMain;
