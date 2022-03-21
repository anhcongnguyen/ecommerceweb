import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyle from "./styles.js";

const Product = ({ product }) => {
  console.log("product", product.image?.url);
  const classes = useStyle();

  return (
    <Card className={classes.root}>
      {/* <CardMedia
        classes={classes.media}
        src={product.image?.url}
        title={product.name}
      /> */}
      {product.image?.url ? (
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          src={product.image?.url}
          title="Contemplative Reptile"
        />
      ) : (
        <div>Dont have to show</div>
      )}
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;