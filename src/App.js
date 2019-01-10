import React, { Component } from 'react';
import './App.css';
import Carousel from './carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel>
          <div className="Slick-content">
            <h3>1</h3>
          </div>
          <div className="Slick-content">
            <h3>2</h3>
          </div>
          <div className="Slick-content">
            <h3>3</h3>
          </div>
          <div className="Slick-content">
            <h3>4</h3>
          </div>
          <div className="Slick-content">
            <h3>5</h3>
          </div>
          <div className="Slick-content">
            <h3>6</h3>
          </div>
      </Carousel>
      </div>
    );
  }
}

export default App;
