import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import html from "../pages/html.png"
import css from "../pages/css.png"
import js from "../pages/javascript.png"
import react from "../pages/react.png"
import respo from "../pages/responsive.png"
import material from "../pages/materail.png"



const Frontend = () => {
    const data=[
        {
            id:1,
            img:html,
            val:"HTML5"
        },
        {
            id:2,
            img:css,
            val:"CSS3"
        },{
            id:3,
            img:js,
            val:"Javascript"
        },{
            id:4,
            img:react,
            val:"React"
        },
        {
            id:5,
            img:material,
            val:"MaterialUI"
        },{
            id:6,
            img:respo,
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
       
          <img  style={{ width: '100px', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`}/>
          <Typography sx={{fontSize:'15px',fontWeight:'500'}}>{item.val}</Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
  </Box>
  )
}

export default Frontend