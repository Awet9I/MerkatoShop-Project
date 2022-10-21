import Catalog from "../../features/catalog/Catalog";
import React from "react";
import {
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Header from "./Header";
import HomePage from "../../features/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/About/AboutPage";
import ContactPage from "../../features/Contact/ContactPage";

function App() {
  // Creating a custome theme
  const theme = createTheme({
    palette: {
      background: {
        default: "#f5f5f5",
      },
    },
  });
  return (
    // ThemeProvider to wrap the app with custom theme defined above
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
