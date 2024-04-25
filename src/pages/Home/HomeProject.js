import { Box, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import { useNavigate } from 'react-router-dom';

const projects = [
  { image: "/assets/p1.png", title: "Project 1" , path:"/projects"},
  { image: "/assets/p2.png", title: "Project 2",path:"/projects" },
  { image: "/assets/p3.png", title: "Project 3",path:"projects" },
  { image: "/assets/p4.png", title: "Project 4" ,path:'/projects'},
];

const HomeProject = () => {
  const handleProjectClick = () => {
    // Add logic to transition to the next page
    console.log("Clicked on project");
  };

  const navigate=useNavigate();
 const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '60px' }}>
      <Typography sx={{ color: 'white', fontSize: '50px', textAlign: 'center' }}>Projects</Typography>
      <Grid container spacing={3} sx={{ marginTop: '30px' }}>
        {projects.map((project, index) => (
          <Grid key={index} item xs={12} lg={6}>
            <Paper

              sx={{ width: '100%', transition: 'transform 0.3s', cursor: 'pointer', "&:hover": { transform: 'scale(1.05)' } }}
              onClick={()=>{navigate(project.path)}}
            >
              <img style={{ width: '100%'}} src={project.image} alt={project.title} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomeProject;
