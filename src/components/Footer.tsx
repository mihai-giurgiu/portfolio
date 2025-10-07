import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaBehanceSquare, FaFlickr } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

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
          maxWidth: 1300,
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
          <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/mihai-g-b8555818b/" target="_blank">
            <FaLinkedin />
          </IconButton>
          <IconButton color="inherit" component="a" href="https://www.behance.net/mihaigiurgiu" target="_blank">
            <FaBehanceSquare />
          </IconButton>
          <IconButton color="inherit" component="a" href="https://www.flickr.com/people/mihaigg/" target="_blank">
            <FaFlickr />
          </IconButton>
          <IconButton color="inherit" component="a" href="https://github.com/mihai-giurgiu" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
