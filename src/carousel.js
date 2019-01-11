import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import classNames from 'classnames';

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const images = [
    {
      src: './assets/img/australia.jpg',
      imgName: 'australia.jpg',
      name: 'Australia'
    },
    {
      src: './assets/img/istanbul.jpg',
      imgName: 'istanbul.jpg',
      name: 'Istanbul'
    },
    {
      src: './assets/img/marina_bay_sands.jpg',
      imgName: 'marina_bay_sands.jpg',
      name: 'Marina'
    },
    {
      src: "'./assets/img/santorini.jpg'",
      imgName: 'santorini.jpg',
      name: 'Santorini'
    },
    {
      src: './assets/img/turkey.jpg',
      imgName: 'turkey.jpg',
      name: 'Turkey'
    }
  ];



class Carousel extends React.PureComponent {
    renderContent = height => {
        return (
         images.map(item => {
           const img = require(`./assets/img/${item.imgName}`);
           console.log(img.toString());
           return(
             <div className='Slick-content' style={{height}}>
               <img src={require(`./assets/img/${item.imgName}`)} alt="demo" style={{ width: '100%', height}}/>
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
                 <span className={classNames('text-carousel-subheading')}>Find adventure of lifetime </span>
               </div>
             </div>
           )
         })
        );
       }
    render() {
        console.log('111: ', this.props);
        return(
            <div style={{width: this.props.width || '100%', height: this.props.height || '60vh' }}>
                <Slider {...settings}>
                    {this.renderContent(this.props.height || '60vh')}
                </Slider>
            </div>
        );
    }
}

Carousel.defaultProps = {
    height: '40vh',
    width: '100%'
};

Carousel.propTypes = {
    height: PropTypes.string.isRequired,
    width: PropTypes.string
};

export default Carousel;