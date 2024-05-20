import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./Other.css";

const MediaCard = () => {
  const data = [
    {
      title: "Soft dresses",
      subtitle: "Here you have confortable dresses",
      picture: require("./images/pic1.jpg"),
    },
    {
      title: "Deals on Top Brands",
      subtitle: "Here you can find best deals",
      picture: require("./images/pic2.jpg"),
    },
    {
      title: "Costomers favorite",
      subtitle: "Here are your most favourate",
      picture: require("./images/pic3.jpg"),
    },
    {
      title: "Best Sellers in Outlet",
      subtitle: "Here are our best",
      picture: require("./images/pic4.jpg"),
    },
  ];
  return (
    <Grid container spacing={2} p={2} mt={1}>
      {data.map((card) => (
        <Grid item xs={6}>
          <Link to="/product" className="link-cards">
            <Card
              className="cards"
              sx={{
                maxWidth: 700,
                padding: 0,
                backgroundColor: "#242424",
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: 200,
                  objectFit: "fit",
                  backgroundColor: "#fff",
                }}
                image={card.picture}
                title="Card"
                className="media"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#fff"
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" color="#fff">
                  {card.subtitle}
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ color: "#fff" }} size="small" color="inherit">
                  See more
                </Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default MediaCard;
