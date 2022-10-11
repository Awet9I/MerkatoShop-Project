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
            variant="h6"
            component={NavLink}
            to="/"
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            MerkatoShop
          </Typography>

          <List sx={{ display: "flex", marginLeft: theme.spacing(50) }}>
            {midLinks.map(({ title, path }) => (
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
          <List sx={{ display: "flex", marginLeft: theme.spacing(45) }}>
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
