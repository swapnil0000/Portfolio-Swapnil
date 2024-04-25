import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import aws from "../pages/aws.png"
import firebase from "../pages/firebase.png"
import opti from "../pages/opti.png"
import seo from "../pages/seo.jpg"
import testing from "../pages/testing.jpg"
import dsa from "../pages/dsa.png"



const Frontend = () => {
    const data=[
        {
            id:1,
            img:aws,
            val:"HTML5"
        },
        {
            id:2,
            img:firebase,
            val:"CSS3"
        },{
            id:3,
            img:opti,
            val:"Javascript"
        },{
            id:4,
            img:seo,
            val:"React"
        },
        {
            id:5,
            img:testing,
            val:"MaterialUI"
        },{
            id:6,
            img:dsa,
            val:"Responsiveness"
        },
    ]
  return (
    <Box sx={{marginTop:'60px'}}>
     <Typography  sx={{ color: 'white', fontSize: '50px', textAlign: 'center' }}>Frontend Skills</Typography>
    <Grid container>
    {data.map(item => (
      <Grid key={item.id} item xs={12} sm={6} md={6} lg={4} sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
     
        <Paper sx={{ width: 320, height: 160, display: 'flex', flexDirection: 'row', margin: '5px',alignItems:'center',justifyContent:'space-evenly', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>  
       
          <img  style={{ width: '100%', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`}/>
          
        </Paper>
      </Grid>
    ))}
  </Grid>
  </Box>
  )
}

export default Frontend