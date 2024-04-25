import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import "../icons.css"
const HomeContact = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box sx={{display:'flex',flexDirection:'column',marginTop:'80px'}}>
     <Typography sx={{color:'white',fontSize:'50px',textAlign:'center'}}>Contact Me</Typography>
     <Box sx={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}>
       <Typography sx={{color:'greenyellow',fontSize:'30px'}}>Want to work together?</Typography>

       <Typography sx={{color:'white',fontSize:'15px'}}>I'm open to internship positons and freelance work. Feel free to reach out for collaborations, get help with communities or just a friendly hello!</Typography>

       <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '20px', marginBottom: '50px', gap: isMobileView ? "30px" : "100px" }}>
                    <a href="https://github.com/swapnil0000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fab fa-github icon" style={{ fontSize: isMobileView ? "40px" : "80px", color: 'white', transition: 'transform 0.2s' }}></i>
                    </a>
                    <a href="https://www.instagram.com/spixxels?igsh=NXdxaDh3YzZsZmQw" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fab fa-instagram icon" style={{ fontSize: isMobileView ? "40px" : "80px", color: 'white', transition: 'transform 0.2s' }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/swapnil-srivastav-917560183/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fab fa-linkedin icon" style={{ fontSize: isMobileView ? "40px" : "80px", color: 'white', transition: 'transform 0.2s' }}></i>
                    </a>
                    <a href="https://twitter.com/Swapnil01266706" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fab fa-twitter icon" style={{ fontSize: isMobileView ? "40px" : "80px", color: 'white', transition: 'transform 0.2s' }}></i>
                    </a>
                    <a href="https://www.reddit.com/u/PieceSerious5333/s/Oy766bgdFS" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fab fa-reddit icon" style={{ fontSize: isMobileView ? "40px" : "80px", color: 'white', transition: 'transform 0.2s' }}></i>
                    </a>
                </Box>
                
     </Box>
    </Box>
  )
}

export default HomeContact