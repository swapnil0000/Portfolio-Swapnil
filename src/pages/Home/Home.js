import { Box, Container } from '@mui/material'
import React from 'react'
import About from '../About/About'
import Skills from '../skills/Skills'
import Project from '../Projects/Project'
import Contact from '../Contact/Contact'
import HomeAbout from './HomeAbout'
import "../Home/homeStyle.css"
import HomeContact from './HomeContact'
import HomeSkills from './HomeSkills'
import HomeProject from './HomeProject'
import Banner from './Banner'

const Home = () => {
  return (
    <Box>
    <Banner/>
    <Container>
     <HomeAbout/>
     <HomeSkills/>
     <HomeProject/>
     <HomeContact/>
       </Container>
       </Box>
  )
}

export default Home