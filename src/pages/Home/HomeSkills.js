import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

import "../Home/homeSkillsStyle.css"
import { useNavigate } from 'react-router-dom'

const HomeSkills = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  const navigate=useNavigate();
  return (
    <Box sx={{marginTop:'60px'}}>
    <Typography sx={{ color: 'white', fontSize: '50px', textAlign: 'center',fontFamily:'Montserrat',fontWeight:'700' }}>Skills</Typography>

    <main className="page-content" style={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'center'}}>
    <div className="card" style={{ backgroundImage: `url(/assets/frontend.webp)`,width:isMobileView?"300px":"360px",height:'200px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="content">
      {!isMobileView && (
        <p className="copy">Check out all of these skills related to <span style={{ color: 'chocolate' ,fontStyle:'italic' }}>FRONTEND</span> </p>
      )}
      {isMobileView && (
        <p className='copy'/>
      )}
          <button onClick={()=>{navigate("/frontend")}} className="btn">View Skills</button>
        </div>
      </div>
      <div className="card" style={{ backgroundImage:`url(/assets/backend.webp)`,width:isMobileView?"300px":"360px",height:'200px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="content">
        {!isMobileView && (
            <p className="copy">Check out all of these skills related to <span style={{ color: 'chocolate' ,fontStyle:'italic' }}>BACKEND</span> </p>
          )}
          {isMobileView && (
            <p className='copy'/>
          )}          <button onClick={()=>{navigate("/backend")}} className="btn">View Skills</button>
        </div>
      </div>
      <div className="card"style={{ backgroundImage: `url(/assets/others.webp)`,width:isMobileView?"300px":"360px",height:'200px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="content">
        {!isMobileView && (
            <p className="copy">Check out all of these skills related to <span style={{ color: 'chocolate' ,fontStyle:'italic' }}>OTHERS</span> </p>
          )}
          {isMobileView && (
            <p className='copy'/>
          )}          <button onClick={()=>{navigate("/others")}} className="btn">View Skills</button>
        </div>
      </div>
    </main>
    </Box>
  )
}

export default HomeSkills;
