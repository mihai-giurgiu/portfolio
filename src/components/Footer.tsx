import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "transparent",
        color: "text.primary",
        py: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: 3,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="body1">
          © {new Date().getFullYear()} Mihai Giurgiu | UI & Visual Designer
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            color="inherit"
            component="a"
            href="https://github.com/yourusername"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://linkedin.com/in/yourusername"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
