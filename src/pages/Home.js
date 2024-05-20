import React from "react";
import Card from "../components/Card";
import SliderImages from "../components/Slider";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BASEURL } from "../base.js";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = `${BASEURL}/category`;

    const fetchData = async () => {
      const categories_data = await axios.get(url);
      setCategories(categories_data?.data);
      // setLoading(false);
    };

    fetchData();
  }, []);

  const images = [
    {
      image: require("../components/images/slider-pic-1.jpg"),
    },
    {
      image: require("../components/images/slider-pic-2.jpg"),
    },
    {
      image: require("../components/images/slider-pic-3.jpg"),
    },
    {
      image: require("../components/images/bannar.jpg"),
    },
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "10px",
  };

  const sliderContainerStyle = {
    maxWidth: "100%",
  };

  console.log("Loading......................", categories);

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#242424",
        }}
      >
        <Grid item xs={12} sm={3} sx={{ ...areaLinksStyle, order: 2, mt: 2 }}>
          {categories?.map((category) => (
            <Link
              to={`/products?c=${category?.id}`}
              className="area-links"
              key={category?.id}
            >
              {category?.name}
            </Link>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{ width: "100%", order: { xs: 1, sm: 2 } }}
        >
          <div className="slider-container" style={sliderContainerStyle}>
            <Slider {...settings}>
              {images.map((i, index) => (
                <div key={index} className="image-container">
                  <img
                    src={i.image}
                    alt={`Slide ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Grid>
      </Grid>
      <Card />
    </>
  );
};

export default Home;
