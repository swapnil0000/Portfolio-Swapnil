import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import node from "../pages/node.jpg"
import express from "../pages/express.png"
import c from "../pages/c++.jpg"
import javaascript from "../pages/jsbackend.jpg"
import respo from "../pages/responsive.png"
import material from "../pages/materail.png"



const Frontend = () => {
    const data=[
        {
            id:1,
            img:node,
            val:"HTML5"
        },
        {
            id:2,
            img:express,
            val:"CSS3"
        },{
            id:3,
            img:c,
            val:"Javascript"
        },{
            id:4,
            img:javaascript,
            val:"React"
        },
    ]
  return (
    <Box sx={{marginTop:'60px'}}>
     <Typography  sx={{ color: 'white', fontSize: '50px', textAlign: 'center' }}>Backend Skills</Typography>
    <Grid container>
    {data.map(item => (
      <Grid key={item.id} item xs={12} sm={6} md={6} lg={3} sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
     
        <Paper sx={{ width: 300, height: 160, display: 'flex', flexDirection: 'row', margin: '5px',alignItems:'center',justifyContent:'space-evenly', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>  
       
          <img  style={{ width: '200px',objectFit:'cover', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`}/>
        
        </Paper>
      </Grid>
    ))}
  </Grid>
  </Box>
  )
}

export default Frontend