import React, { Component } from 'react';
import './App.css';
import Carousel from './carousel';
import classNames from 'classnames';
import Aus from './assets/img/australia.jpg';

const images = [
  {
    src: './assets/img/australia.jpg',
    imgName: 'australia.jpg',
    name: 'Australia'
  },
  {
    src: './assets/img/istanbul.jpg',
    imgName: 'australia.jpg',
    name: 'Istanbul'
  },
  {
    src: './assets/img/marina_bay_sands.jpg',
    imgName: 'australia.jpg',
    name: 'Marina'
  },
  {
    src: "'./assets/img/santorini.jpg'",
    imgName: 'australia.jpg',
    name: 'Santorini'
  },
  {
    src: './assets/img/turkey.jpg',
    imgName: 'australia.jpg',
    name: 'Turkey'
  }
];
class App extends Component {
  renderContent = () => {
   return (
    images.map(item => {
      const img = require(`./assets/img/${item.imgName}`);
      console.log(img.toString());
      return(
        <div className={classNames('Slick-content')}>
          <img src={require('./assets/img/australia.jpg')} alt="demo" style={{ width: '100%'}}/>
          <span>""</span>
          <div className="image-text-content">
            <div className="FormDiv">
              <div className="InputDiv">
                <label>Destination</label>
                <input/>
              </div>
              <div className="InputDiv">
                <label>Destination</label>
                <input/>
              </div>
              <div className="InputDiv">
                <label>Destination</label>
                <input/>
              </div>
            </div>
            <span>Find adventure of lifetime</span>
          </div>
        </div>
      )
    })
   );
  }
  render() {
    return (
      <div className="App">
        <Carousel>
          {this.renderContent()}
          {/* <div className="Slick-content">
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
          </div> */}
      </Carousel>
      </div>
    );
  }
}

export default App;
