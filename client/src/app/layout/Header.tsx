import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">MerkatoShop</Typography>
      </Toolbar>
    </AppBar>
  );
}
