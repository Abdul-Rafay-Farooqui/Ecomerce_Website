import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart } from '../redux/reducers/cartActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';


const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
     dispatch(addToCart(product))
  };
  const data = [
    {
      id: "1",
      picture: require("../components/images/bags.jpg"),
      name: "Addidas Bag",
      price: 956,
    },
    {
      id: "2",
      picture: require("../components/images/speakers.jpg"),
      name: "Speakers",
      price: 1960
    },
    {
      id: "3",
      picture: require("../components/images/controller.jpg"),
      name: "Controller",
      price: 500
    },
    {
      id: "4",
      picture: require("../components/images/suit.jpg"),
      name: "Suit",
      price: 1000
    },

  
  ];

  const data2 = [
    {
      id: "5",
      picture: require("../components/images/laptop.webp"),
      name: "Laptop",
      price: 3200
    },
    {
      id: "6",
      picture: require("../components/images/keyboard.webp"),
      name: "Keyboard",
      price: 500
    },
    {
      id: "7",
      picture: require("../components/images/moniter.webp"),
      name: "Moniter",
      price: 1000
    },
    {
      id: "8",
      picture: require("../components/images/phone.webp"),
      name: "Phone",
      price: 1500
    },
  ];

  const cardStyle = {
    maxWidth: 700,
    padding: 0,
    backgroundColor: "#242424",
    boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
    hover:{
      transform: 'scale(1.02)'
    }
  };

  const cardMediaStyle = {
    height: 200,
  };

  const addButtonStyle = {
    backgroundColor: "#fff",
    color: "#242424",
    width: "100%",
    ":hover": { backgroundColor: "#242424", color: "#fff" },
  };

  const productNameStyle = {
    color: "#fff",
    textAlign: "center",
    pt: "5px",
  };

  const productPriceStyle = {
    color: "#fff",
    marginLeft: "43%",
  };

  const gridItemStyle = {
    marginBottom: '10px',
  };

  return (
    <>
      {/* WhishList Title */}
      <Grid container sx={{ backgroundColor: "#242424", color: "#fff", marginTop: "4rem" }} padding={2}>
        <Typography>
          WhishList
        </Typography>
      </Grid>

      {/* WhishList Grid */}
      <Grid container spacing={2} p={2}>
        {data.map((card) => (
          <Grid item xs={6} sm={3} key={card.name} style={gridItemStyle}>
            <Link to='/product-details'>
            <Card sx={cardStyle}>
              <CardMedia
                sx={cardMediaStyle}
                image={card.picture}
                title="Card"
                />
              <CardContent>
                <Button onClick={() => handleAddToCart(card)} sx={addButtonStyle}>
                  <ShoppingCartIcon />
                  Add to Cart
                </Button>
                <Typography variant="body1" sx={productNameStyle}>
                  {card.name}
                </Typography>
                <Typography variant='boby2' sx={productPriceStyle}>
                  ${card.price}
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* Just for you Title */}
      <Grid container sx={{ backgroundColor: "#242424", color: "#fff" }} padding={2}>
        <Typography>
          Just for you
        </Typography>
      </Grid>

      {/* Just for you Grid */}
      <Grid container spacing={2} p={2}>
        {data2.map((card) => (
          <Grid item xs={6} sm={3} key={card.name} style={gridItemStyle}>
            <Card sx={cardStyle}>
              <CardMedia
                sx={cardMediaStyle}
                image={card.picture}
                title="Card"
              />
              <CardContent>
                <Button onClick={() => handleAddToCart(card)} sx={addButtonStyle}>
                  <ShoppingCartIcon />
                  Add to Cart
                </Button>
                <Typography variant="body1" sx={productNameStyle}>
                  {card.name}
                </Typography>
                <Typography variant='boby2' sx={productPriceStyle}>
                  {card.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Product;
