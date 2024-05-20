import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addToCart } from "../redux/reducers/cartActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BASEURL } from "../base.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "../hooks/custom.js";
import Skeleton from "@mui/material/Skeleton";
import PropTypes from "prop-types";

const Product = () => {
  const query = useQuery();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const category_id = query.get("c");

    let url;

    if (category_id) {
      url = `${BASEURL}/product/category/${category_id}`;
    } else {
      url = `${BASEURL}/product`;
    }

    const fetchproducts = async () => {
      await axios.get(url).then((res) => {
        setProducts(res?.data);
        setLoading(false);
      });
    };

    setTimeout(() => {
      fetchproducts();
    }, 1000);
  }, [query]);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const cardStyle = {
    maxWidth: 700,
    padding: 0,
    backgroundColor: "#242424",
    boxShadow:
      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
    hover: {
      transform: "scale(1.02)",
    },
  };

  const cardMediaStyle = {
    width: "90%",
    height: 300,
    objectFit: "contain",
    backgroundColor: "#fff",
    padding: "1rem",
  };

  const addButtonStyle = {
    backgroundColor: "#fff",
    color: "#242424",
    width: "100%",
    ":hover": { backgroundColor: "#242424", color: "#fff" },
  };

  const gridItemStyle = {
    marginBottom: "10px",
  };

  return (
    <>
      {/* WhishList Title */}
      <Grid
        container
        sx={{ backgroundColor: "#242424", color: "#fff" }}
        padding={2}
      >
        <Typography>Products</Typography>
      </Grid>

      {/* WhishList Grid */}
      <Grid container spacing={2} p={2}>
        {(loading ? Array.from(new Array(8)) : products).map((product) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            lg={3}
            key={product?.id}
            style={gridItemStyle}
          >
            {!loading ? (
              <Link
                to={`/product-details?c=${product?.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card sx={cardStyle}>
                  <CardMedia
                    component="img"
                    sx={cardMediaStyle}
                    image={
                      product?.image
                        ? product.image
                        : require("../components/images/default.jpg")
                    }
                    title={product?.name}
                  />

                  <CardContent>
                    <Typography
                      variant="h6"
                      color="white"
                      textAlign="center"
                      pt="5px"
                    >
                      {product?.name}
                    </Typography>
                    <Typography variant="h6" color="white" textAlign="center">
                      ${product?.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <>
                <Skeleton variant="rectangular" height={300} />
                <Skeleton variant="rectangular" height={50} />
              </>
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Product;
