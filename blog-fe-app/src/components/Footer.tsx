import React from "react";
import { Typography, Container, Box } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        marginTop: "auto",
        backgroundColor: "lightgrey",
        padding: "1em",
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container>
        <Typography variant="body2" color="textSecondary">
          © 2024 Owaise Zarger | All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
