import React from 'react';
import {Link} from 'react-router-dom';

import './Toolbar.css';

import Drawertogglebutton from '../topdrawer/Drawertogglebutton.js';
import Topdrawer from '../topdrawer/Topdrawer.js';



const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_nav">
      <Topdrawer />
      <Drawertogglebutton />
    </nav>
  </header>
);

export default Toolbar;
