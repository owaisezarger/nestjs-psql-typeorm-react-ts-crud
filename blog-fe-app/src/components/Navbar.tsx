import React from "react";
import { AppBar, Toolbar, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "slateblue" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          OZ Blogs
        </Typography>
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          underline="none"
          sx={{ marginRight: 2 }}
        >
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/about"
          color="inherit"
          underline="none"
          sx={{ marginRight: 2 }}
        >
          About
        </Link>
        <Link
          component={RouterLink}
          to="/contact"
          color="inherit"
          underline="none"
          sx={{ marginRight: 2 }}
        >
          Contact
        </Link>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
