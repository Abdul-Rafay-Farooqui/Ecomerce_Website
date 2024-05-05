import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, FormControlLabel, Grid, Input, Radio, RadioGroup, Typography } from '@mui/material'
import "../components/Other.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart } from '../redux/reducers/cartActions';
import { useDispatch } from 'react-redux';


const ProductDetails = () => {
    
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
     };

     const data = {
          id: "1",
          picture: require("../components/images/bags.jpg"),
          name: "Addidas Bag",
          price: 956,
          detail: " Inspired by the summer spirit and beach clubs on the Italian coast, this item is part of Addidas. Ideal for travels and other occasions, the House's iteration of the popular lightweight material, canvas, is presented on totes, clutches, and bucket bags in every size. The 'Addidas' logo defines the front of this variation in striped jute as an embroidered detail"
        };
const cardStyle = {
    margin:"auto", 
    backgroundColor:"#242424" , 
    padding: "0",  
    maxWidth: 700 , 
    textAlign: 'center' ,  
    boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;" ,
    objectFit: "cover"
};
const cardDetail = {
    margin:"auto", 
    backgroundColor:"#0000" , 
    padding: "0",  
    maxWidth: 700 , 
    textAlign: 'center' ,  
    boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;" 

};

  const cardMediaStyle = {
    height: 450,
  };
  const cardDetailStyle = {
    height: 380,
  };
  const addButtonStyle = {
    backgroundColor: "#242424",
    color: "#fff",
    width: "100%",
    ":hover": { backgroundColor: "#fff", color: "#242424" },
    padding: 2,
  };
  const gridItemStyle = {
    marginBottom: '20px',
  };


  return (
            <>

            <Grid container spacing={2} p={2} >
                <Grid item xs={12} md={7} style={gridItemStyle}>
                    <Card sx={cardStyle}>
                    <CardMedia
                        sx={cardMediaStyle }
                        style={{objectFit: "cover"}}
                        image={require("../components/images/bags.jpg")}
                        title="Card"
                    />
                    </Card>
                </Grid>
                <Grid item xs={12} md={5} style={gridItemStyle}>
                    <Card sx={cardDetail}>
                        <CardContent sx={cardDetailStyle}>
                            <Typography sx={{fontSize:"30px"}} p={3}>
                                 {data.name}
                            </Typography>
                            <Typography p={3} >
                                {data.detail}
                            </Typography>
                            <Typography sx={{fontSize: "20px"}} pb={3}>
                                Price ${data.price}
                            </Typography>
                            <Button  onClick={() => handleAddToCart(data)} sx={addButtonStyle}>
                                <ShoppingCartIcon />
                                    Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </>
        )
}

export default ProductDetails;