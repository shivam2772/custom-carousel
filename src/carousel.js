import React from 'react';
import Slider from 'react-slick';
import elements from './App';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class Carousel extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('1111: ', elements);
        return(
            <div style={{width: this.props.width || '100%', height: this.props.height || '60vh' }}>
                <Slider {...settings}>
                    {this.props.children}
                </Slider>
            </div>
        )
    }
}

export default Carousel;