import React from 'react';
import classes from './App.module.css';
import appLogo from '~/assets/images/logo.png';

export const App = (): void => (
  <div className={classes.app}>
    <h1>Pirate Webpack Template</h1>
    <img src={appLogo}></img>
  </div>
);
