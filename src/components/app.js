import React, { Component } from 'react';
import NavBar from './navbar';
import Footer from './footer';
import Eateries from './eateries';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar/>
        <Eateries/>
        <Footer/>
      </div>
    );
  }
}
