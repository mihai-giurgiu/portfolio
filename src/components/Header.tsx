import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaLinkedin } from "react-icons/fa6";
import { FaBehanceSquare, FaFlickr } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
  ];

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          maxWidth: 1300,
          mx: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          height: 100,
        }}
      >
        <Typography variant="h4" component={Link} to="/"
          sx={{
            fontSize: { xs: "1.2rem", sm: "2rem", md: "2rem", lg: "2.4rem" },
            fontWeight: 500,
            textDecoration: "none",
            color: "inherit"
          }}>
          Mihai Giurgiu | UI & Visual Designer
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          {navLinks.map((link) => (
            <Button key={link.title} color="inherit" component={RouterLink} to={link.path}>
              {link.title}
            </Button>
          ))}
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
          <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
        </Box>

        {/* Mobile navbar */}
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
              <List>
                {navLinks.map((link) => (
                  <ListItem key={link.title} disablePadding>
                    <ListItemButton component={RouterLink} to={link.path}>
                      <ListItemText primary={link.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <Box sx={{ display: "flex", justifyContent: "flex-start", pl: 1, mt: 1 }}>
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
                  <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
                </Box>
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
