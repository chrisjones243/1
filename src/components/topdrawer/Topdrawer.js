import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Topdrawer.css';

const Topdrawer = props => (
  <div Id="topdrawer">

    <div className="link-container">
      <div className="home link">
        <Link className="text" to="/">HOME?</Link>
      </div>

      <div className="about link">
        <Link className="text" to="/about" onMouseOver={document.getElementsById('topdrawer').style.backgroundImage="url('./img/about.jpg')"}>ABOUT</Link>
      </div>

      <div className="contact link">
        <Link className="text" to="/contact">HELLO</Link>
      </div>
    </div>

  </div>
);

export default Topdrawer;
