import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
  ];

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 2 }}>
      <Toolbar
        sx={{
          maxWidth: 1250,
          mx: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          height: 100
        }}
      >
        <Typography variant="h4" component="div">
          Mihai Giurgiu | UI & Visual Designer
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 1 }}>
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
        </Box>

        {/* Mobile nav */}
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
                <ListItem disablePadding>
                  <ListItemButton component="a" href="https://www.linkedin.com/in/mihai-g-b8555818b/" target="_blank">
                    <FaLinkedin style={{ marginRight: 8 }} /> LinkedIn
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="https://www.behance.net/mihaigiurgiu" target="_blank">
                    <FaBehanceSquare style={{ marginRight: 8 }} /> Behance
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="https://www.flickr.com/people/mihaigg/" target="_blank">
                    <FaFlickr style={{ marginRight: 8 }} /> Flickr
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="https://github.com/mihai-giurgiu" target="_blank">
                    <GitHubIcon style={{ marginRight: 8 }} /> GitHub
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
