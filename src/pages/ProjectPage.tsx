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
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      <Typography
        variant="h2"
        sx={{
          ...glassStyle,
          textAlign: "center",
          mb: 4,
          fontWeight: 700,
        }}
      >
        {project.title}
      </Typography>

      {project.description && (
        <Box sx={{ ...glassStyle }}>
          <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
            {project.description}
          </Typography>
        </Box>
      )}

      {project.subtitles && (
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 4 }}>
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
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        {project.gallery?.slice(0, 3).map((img, i) => (
          <Box key={i} sx={{ ...glassStyle }}>
            <Box
              component="img"
              src={img}
              alt={`Gallery ${i}`}
              sx={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        ))}

        {project.video && (
          <Box sx={{ ...glassStyle }}>
            <video
              src={project.video}
              controls
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProjectPage;
