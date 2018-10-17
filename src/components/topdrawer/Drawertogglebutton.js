import React, { Component } from 'react';
import anime from 'animejs';

import './Drawertogglebutton.css';

import Topdrawer from './Topdrawer.js';


class Drawertogglebutton extends Component {

  componentDidMount(){

    const menuLink = document.querySelector('.menu');
    const container = document.querySelector('.container');

    menuLink.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.toggle('open');
    })

  }

  render() {
    return (
      <div className="container">
        <nav>
          <a href="#" className="menu">
            <div className="menu--text"></div>
          </a>
        </nav>
      </div>
    );
  }
}

export default Drawertogglebutton;
