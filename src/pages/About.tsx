import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaLinkedin } from "react-icons/fa6";
import { FaBehanceSquare, FaFlickr } from "react-icons/fa";
import { Button } from "@mui/material";

const About: React.FC = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left; // mouse X relative to div
    const y = e.clientY - top;  // mouse Y relative to div

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateMax = 15; // max tilt in degrees

    setRotateY(((x - centerX) / centerX) * rotateMax); // rotate around Y
    setRotateX(-((y - centerY) / centerY) * rotateMax); // rotate around X (invert)
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              p: 3,
              mb: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: 3,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.38)',
            }}
          >
            <Typography variant="h3" paragraph>
              Hello, is it me you’re looking for?
            </Typography>
            <Typography variant="body1" paragraph>
              I’m a Freelance UI/UX Designer working in the industry for over 5 years. I’ve worked
              on projects in a variety of sectors and can take your brief from concept to final delivery.
              <br /><br />

              Over the years, I specialized in technologies like Wordpress, Figma, Adobe Creative Suite,
              and other design tools, polishing my skills in UI/UX, web, and graphic design. I was first introduced to development systems
              through internal projects, working with React JS, Bootstrap, and CSS. I discovered my love for
              interactive design, exploring platforms like Rive and Lottie, giving a litlle extra motions to my projects. :D    <br />
              Got a project in mind, have any questions or just want to say hi? You can reach me through phone, email or Instagram.
            </Typography>

            <hr></hr>
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

            <Button variant="outlined" href="./src/assets/MihaiGiurgiuCV.pdf" download>
              Download CV
            </Button>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ width: 500, height: 500, borderRadius: 8, boxShadow: `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(0,0,0,0.3)` }}
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
            >
              <Card>
                <CardMedia
                  component="img"
                  image={"./src/assets/ProfilePic_1080x1080.jpg"}
                  alt="Mihai Gui"
                />
              </Card>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
