import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "/Users/macbook/portfolio/src/data/projectData.tsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const glassStyle = {
  backdropFilter: "blur(12px)",
  background: "rgba(255,255,255,0.15)",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.3)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  p: 3,
  mb: 4,
};

const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id))!;

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Box sx={{ ...glassStyle }}>
        <Typography
          variant="h2"
          sx={{
            mb: 3,
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 10vw, 4rem)",
            wordBreak: "break-word"
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.2rem", mb: 3 }}
        >
          {project.description}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {project.subtitles.map((sub, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: "rgba(0,0,0,0.7)",
                color: "white",
                borderRadius: "50px",
                px: 2,
                py: 0.5,
                fontSize: "0.9rem",
              }}
            >
              {sub}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ ...glassStyle }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {project.gallery?.slice(0, 3).map((img, i) => (
            <Box key={i}>
              <Box
                component="img"
                src={img}
                alt={`Gallery ${i}`}
                sx={{ width: "100%", borderRadius: "12px" }}
              />
            </Box>
          ))}
          {project.video && (
            <Box
              sx={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                aspectRatio: "4/3"
              }}
            >
              <Box
                component="video"
                src={project.video}
                controls
                autoPlay
                loop
                muted
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Box>
          )}
        </Box>

      </Box>
    </Box>
  );
};

export default ProjectPage;
