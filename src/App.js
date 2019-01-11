import React, { Component } from 'react';
import { css } from 'emotion';
import './App.css';
import Carousel from './carousel';
import classNames from 'classnames';
import Aus from './assets/img/australia.jpg';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Carousel height='90vh' width='400px'>
      </Carousel>
      </div>
    );
  }
}

export default App;
