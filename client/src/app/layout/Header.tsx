import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  List,
  ListItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import { IconButton } from "@mui/material";
import { Badge } from "@mui/material";

const midLinks = [
  {
    title: "catalog",
    path: "/catalog",
  },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  typography: "body1",
  textDecoration: "none",
  "&:hover": {
    color: "#616161",
  },
  "&.active": {
    textDecoration: "underLine",
    textDecorationColor: "primary",
    textUnderlineOffset: "1.6rem",
  },
};

export default function Header() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "##ffffff",
        contrastText: "dark",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{ mb: 5, position: "sticky" }} color={"secondary"}>
        <Toolbar>
          <Typography
            variant="h1"
            component={NavLink}
            end
            to="/"
            sx={{
              color: "inherit",
              typography: "h6",
              textDecoration: "none",
              "&:hover": {
                color: "#616161",
              },
              "&.active": {
                textDecoration: "underLine",
                textDecorationColor: "primary",
                textUnderlineOffset: "1.6rem",
              },
            }}
          >
            MerkatoShop
          </Typography>

          <List sx={{ display: "flex", marginLeft: theme.spacing(50) }}>
            {midLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toLocaleUpperCase()}
              </ListItem>
            ))}
          </List>

          <List sx={{ display: "flex", marginLeft: theme.spacing(45) }}>
            <IconButton size="large" sx={{ color: "inherit" }}>
              <Badge badgeContent={4} color="secondary">
                <ShoppingBagRoundedIcon />
              </Badge>
            </IconButton>

            {rightLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{
                  color: "inherit",
                  typography: "body1",
                }}
              >
                {title.toLocaleUpperCase()}
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
