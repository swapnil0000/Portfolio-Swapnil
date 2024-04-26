import { Box, Container, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import "../skills/Style.css"
import { useNavigate } from 'react-router-dom'

const Skills = () => {
  const navigate=useNavigate();
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Container sx={{marginTop:'60px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center ',width:'100%'}}>
    <Typography sx={{ color: 'white', fontSize: '50px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Montserrat',fontWeight:'700' }}>Skills</Typography>

    <main className="page-content" style={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'center',width:'100%'}}>
    <div className="card" style={{ backgroundImage:`url(/assets/frontend.webp)`,width:'360px',height:'200px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="content">
    {!isMobileView && (
      <p className="copy">Check out all of these skills related to <span style={{ color: 'chocolate' ,fontStyle:'italic' }}>FRONTEND</span> </p>
    )}
    {isMobileView && (
      <p className='copy'/>
    )}          <button onClick={()=>{navigate("/frontend")}} className="btn">View Skills</button>
        </div>
      </div>
      <div className="card" style={{ backgroundImage:`url(/assets/backend.webp)`,width:'360px',height:'200px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="content">
        {!isMobileView && (
          <p className="copy">Check out all of these skills related to <span style={{ color: 'chocolate' ,fontStyle:'italic' }}>BACKEND</span> </p>
        )}
        {isMobileView && (
          <p className='copy'/>
        )}          <button onClick={()=>{navigate("/backend")}} className="btn">View Skills</button>
        </div>
      </div>
      <div className="card"style={{ backgroundImage:`url(/assets/others.webp)`,width:'360px',height:'200px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="content">
        {!isMobileView && (
          <p className="copy">Check out all of these skills related to <span style={{ color: 'chocolate' ,fontStyle:'italic' }}>OTHERS</span> </p>
        )}
        {isMobileView && (
          <p className='copy'/>
        )}          <button onClick={()=>{navigate("/others")}} className="btn">Other Skills</button>
        </div>
      </div>
    </main>
    </Container>
  )
}

export default Skills;
