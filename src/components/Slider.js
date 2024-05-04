import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const SliderImages = () => {
  const images = [
    {
      image: require("./images/slider-pic-1.jpg")
    },
    {
      image: require("./images/slider-pic-2.jpg")
    },
    {
      image: require("./images/slider-pic-3.jpg")
    },
    {
      image: require("./images/bannar.jpg")
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((i, index) => (
          <div key={index} className='image-container'>
            <img src={i.image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderImages;
