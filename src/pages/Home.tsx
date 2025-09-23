// src/pages/Home.tsx
import React from "react";
import Grid from "@mui/material/Grid";
import ProjectCard from "../components/ProjectCard";
import Box from "@mui/material/Box";
import { projects } from "../data/projectData";


const Home: React.FC = () => {
  return (

        <Grid container spacing={4}>
          {projects.map((p) => (
            <Grid
              key={p.id}
              size={{ xs: 12, sm: 6, md: 4 }}
            >
              <Box sx={{ maxWidth: 400, width: "100%" }}>
                <ProjectCard id={p.id} title={p.title} image={p.image} subtitles={p.subtitles} />
              </Box>
            </Grid>
          ))}
        </Grid>
  );
};

export default Home;
