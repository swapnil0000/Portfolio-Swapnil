import { Box, Button, Container, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import "../Project/style.css";

const Projects = () => {
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

    // Define project data
    const projects = [
        {
            name: "Shashank Sajwan",
            description: "UPSC CSE Coaching Website",
            stack: "HTML, CSS, React, Js, MaterialUI, Aws Hosting, Nodejs, Expressjs",
            live: "Live Link",
            livelink:'https://www.shashanksajwan.com/'
        },
        {
            name: "Apni Tapri",
            description: "Cloud Kitchen Project",
            stack: "HTML, CSS, React, Js, MaterialUI, Nodejs, Expressjs, Optimisation",
            github: "Github Link",
            gitlink:"https://github.com/swapnil0000/apni_tapri_main"
        },
        {
            name: "Cinebility",
            description: "Search Your Movies & Series",
            stack: "HTML, CSS, React, Js, MaterialUI, Aws Hosting, Nodejs, Expressjs",
            github: "Github Link",
            live: "Live Link",
            gitlink:'https://github.com/swapnil0000/Cinebility',
            livelink:'https://cinebility.vercel.app/'
        },
        {
            name: "Viabel Trips",
            description: "Tour & Travel Website",
            stack: "HTML, CSS, React, Js, MaterialUI, Nodejs, Expressjs, MongoDb",
            github: "Github Link",
            gitlink:'https://github.com/swapnil0000/viableTrips'
        }
    ];

    const handleGithub = (url) => {
        if (url.startsWith("http://") || url.startsWith("https://")) {
            window.open(url, '_blank'); // Open external link in a new tab
        } else {
            window.location.href = url; // Navigate to relative URL within the current tab
        }
    }
    

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '60px' }}>
            <Typography sx={{ fontSize: '40px', fontWeight: '600', color: 'white', textShadow: 'revert', marginTop: '20px' }}>Featured Projects</Typography>
            <Box sx={{ marginTop: '20px', display: 'grid', gridTemplateColumns: isMobileView ? '1fr' : 'repeat(2, 1fr)', gap: '20px', justifyContent: 'center' }}>
                {projects.map((project, index) => (
                    <Paper key={index} elevation={3} style={{ padding: '20px', textAlign: 'center', cursor: 'pointer', width: '300px', height: '200px', backgroundColor: 'darkslategrey' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>{project.name}</Typography>
                        <Typography sx={{ fontSize: '15px', color: 'white', fontWeight: '500' }}>{project.description}</Typography>
                        <Typography sx={{ fontWeight: '600', color: 'cornsilk' }}>{project.stack}</Typography>
                        <Box sx={{ margin: '10px', gap: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            {project.gitlink && <Button onClick={() => handleGithub(project.gitlink)} variant='text' sx={{ color: 'white', border: '1px solid grey' }}>{project.github}</Button>}
                            {project.live && <Button onClick={() => handleGithub(project.livelink)} variant='text' sx={{ color: 'white', border: '1px solid grey' }}>{project.live}</Button>}
                        </Box>
                    </Paper>
                ))}
            </Box>
        </Container>
    );
};

export default Projects;
