import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  title: string;
  image: string;
  subtitles?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, image, subtitles = [] }) => {
  return (
    <Link to={`/projects/${id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          height: 300,
          boxShadow: "-5px 10px 15px rgba(0, 0, 0, 0.24)",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
          "&:hover .overlay": {
            opacity: 1,
          },
          "&:hover .title": {
            opacity: 1,
            transform: "translateY(0)",
          },
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.6)",
            zIndex: 1,
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
            color: "white",
            zIndex: 2,
            textAlign: "left",
          }}
        >
          <Typography
            className="title"
            variant="h4"
            sx={{
              mb: 3,
              ml: 0.5,
              opacity: 0,
              transform: "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {subtitles.map((sub, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: "rgba(0, 0, 0, 0.9)",
                  borderRadius: "50px",
                  px: 2,
                  py: 0.5,
                }}
              >
                <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                  {sub}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Card>
    </Link>
  );
};

export default ProjectCard;
