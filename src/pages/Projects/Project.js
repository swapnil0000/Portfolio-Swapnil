import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import project1 from "../Projects/p1.png";
import project2 from "../Projects/p2.png";
import project3 from "../Projects/3.png";
import project4 from "../Projects/p4.png";

const projects = [
  { image: project1, title: "Project 1" },
  { image: project2, title: "Project 2" },
  { image: project3, title: "Project 3" },
  { image: project4, title: "Project 4" },
];

const Project = () => {
  const handleProjectClick = () => {
    // Add logic to transition to the next page
    console.log("Clicked on project");
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '80px' }}>
      <Typography sx={{ color: 'white', fontSize: '50px', textAlign: 'center' }}>Projects</Typography>
      <Grid container spacing={3} sx={{ marginTop: '30px' }}>
        {projects.map((project, index) => (
          <Grid key={index} item xs={6}>
            <Paper
              sx={{ width: '100%', transition: 'transform 0.3s', cursor: 'pointer', "&:hover": { transform: 'scale(1.05)' } }}
              onClick={handleProjectClick}
            >
              <img style={{ width: '100%' }} src={project.image} alt={project.title} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Project;
