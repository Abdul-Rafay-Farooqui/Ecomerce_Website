import React from 'react';
import Card from '../components/Card';
import SliderImages from '../components/Slider';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Home = () => {
  const images = [
    {
      image: require("../images/slider-pic-1.jpg")
    },
    {
      image: require("../images/slider-pic-2.jpg")
    },
    {
      image: require("../images/slider-pic-3.jpg")
    },
    {
      image: require("../images/bannar.jpg")
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

  const areaLinksStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const sliderContainerStyle = {
    maxWidth: '100%',
  };

  return (
    <>
      <Grid container sx={{ backgroundColor: "#242424", paddingTop: "1rem", marginTop: "2.5rem" }}>
        <Grid item xs={12} sm={3} sx={{ ...areaLinksStyle, order: 2, mt: { xs: 2, sm: 0 } }}>
          <Link className='area-links'>Man's Fashion</Link>
          <Link className='area-links'>Female's Fashion</Link>
          <Link className='area-links'>Electronics</Link>
          <Link className='area-links'>Home & LifeStyle</Link>
          <Link className='area-links'>Sports</Link>
          <Link className='area-links'>Medicine</Link>
          <Link className='area-links'>Toys</Link>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ width: "100%", order: { xs: 1, sm: 2 } }}>
          <div className="slider-container" style={sliderContainerStyle}>
            <Slider {...settings}>
              {images.map((i, index) => (
                <div key={index} className='image-container'>
                  <img src={i.image} alt={`Slide ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </Slider>
          </div>
        </Grid>
      </Grid>
      <Card />
    </>
  );
}

export default Home;
