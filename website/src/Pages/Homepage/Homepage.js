import React from 'react';

import Header from './Header';
import Hero from './Hero'
import './Homepage.css';

function Homepage () {
    return(
      <React.Fragment>
        <Header></Header>
        <Hero></Hero>
      </React.Fragment>
      
    )
  }

export default Homepage;