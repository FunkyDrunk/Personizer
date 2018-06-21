import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/startPage.css';

import logo from '../img/logo.png';

const StartPage = () => (
  <div className="start-page">
    <img src={logo} alt="logo" />
    <div className="start-page-preview">
      <h1>Welcome in the Personizer </h1>
      <h2>
        Before you start, <Link to="/start/login" className="link">sign in</Link>
      </h2>
      <h2>
        If you don`t have account - <Link to="/start/registration" >sign up</Link>
      </h2>
    </div>
  </div>
);

export default StartPage;
