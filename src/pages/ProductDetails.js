import {
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControlLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import "../components/Other.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addToCart } from "../redux/reducers/cartActions";
import { useDispatch } from "react-redux";
import { BASEURL } from "../base.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "../hooks/custom.js";

const ProductDetails = () => {
  const query = useQuery();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const product_id = query.get("c");

    const url = `${BASEURL}/product/${product_id}`;

    const fetchproduct = async () => {
      await axios.get(url).then((res) => {
        setProduct(res?.data);
        setLoading(false);
      });
    };

    setTimeout(() => {
      fetchproduct();
    }, 1000);
  }, [query]);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const cardStyle = {
    margin: "auto",
    backgroundColor: "#242424",
    padding: "0",
    maxWidth: 700,
    textAlign: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
    objectFit: "cover",
  };
  const cardDetail = {
    margin: "auto",
    backgroundColor: "#0000",
    padding: "0",
    maxWidth: 700,
    textAlign: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
  };

  const cardMediaStyle = {
    objectFit: "contain",
    backgroundColor: "#fff",
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
    marginBottom: "20px",
  };

  return (
    <>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12} sm={12} md={5} lg={7} style={gridItemStyle}>
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              sx={cardMediaStyle}
              image={product?.image}
              title="Card"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={5} style={gridItemStyle}>
          <Card sx={cardDetail}>
            <CardContent sx={cardDetailStyle}>
              <Typography sx={{ fontSize: "30px" }} p={2}>
                {product.name}
              </Typography>
              <Typography p={3}>{product.description}</Typography>
              <Typography sx={{ fontSize: "20px" }} pb={2}>
                Price ${product.price}
              </Typography>
              <Button
                onClick={() => handleAddToCart(product)}
                sx={addButtonStyle}
              >
                <ShoppingCartIcon />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
