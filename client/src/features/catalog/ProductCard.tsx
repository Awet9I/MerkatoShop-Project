import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import React from "react";

interface Props {
  product: Product;
}

export default function Productcard({ product }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#9e9e9e" }}>
            {product.name.charAt(0).toLocaleUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "dark" },
        }}
      />
      <CardMedia
        sx={{
          height: 140,
          objectFit: "contain",
        }}
        component="img"
        image={product.pictureUrl}
        alt="product"
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="dark">
          kr {(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Kart</Button>
        <Button size="small" component={Link} to={`/catalog/${product.id}`}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}
/*  <ListItem key={product.id}>
      <ListItemAvatar>
        <Avatar src={product.pictureUrl}></Avatar>
      </ListItemAvatar>
      <ListItemText>
        {product.name}-{product.price}
      </ListItemText>
    </ListItem> */
