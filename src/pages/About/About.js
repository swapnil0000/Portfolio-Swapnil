import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import about from "../About/aboutpage.jpg";
import back from "../About/backgroundabout.jpeg";
import { useNavigate } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about");
    };
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Container sx={{marginTop:'80px'}}>
            <Typography sx={{ color: 'white', fontSize: '50px' ,textAlign:'center',marginTop:'100px'}}>About Me</Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection:isMobileView?"column":'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: '100%',
                        gap:'20px',
                    }}
                >
                <img style={{ width:isMobileView?"200px":"350px", borderRadius: '10%',backgroundColor:'transparent'}} src={about} alt='logo' />
                <Container>
            
                    <Typography sx={{ color: 'white', textAlign: 'justify', fontSize:isMobileView?"15px":"15px" , maxWidth:'100%'
                 }}>
                        Hi there! I'm <span style={{ color: 'chocolate', fontSize:isMobileView?"15px":"20px",textShadow:'2px 0px 1px brown'}}>Swapnil Srivastav</span>, a passionate Developer with a love for creativity and problem-solving. As a freelance professional, 
                        I bring a diverse array of experience gained through independent projects across multiple industries. From web development to graphic design, my portfolio showcases a wide range of successful endeavors completed for various clients. Noteworthy achievements include delivering high-quality websites that have garnered positive feedback and increased user engagement, as well as designing captivating branding materials that have helped clients stand out in competitive markets.
                         My skills encompass a versatile toolkit, including proficiency in <span style={{fontWeight:'700', fontSize:isMobileView?"13px":"18px",color:'chocolate',textShadow:'2px 0px 1px brown'}}>HTML/CSS, Javascript, React, MaterialUI, Nodejs, Expressjs, Mongodb, AWS hosting, testing with JEST, Adobe Creative Suite, and SEO optimization techniques</span> . Beyond technical prowess, 
                        my soft skills shine through in my ability to effectively communicate with clients, understand their needs, and deliver solutions that exceed expectations. Clients value my reliability, adaptability, and commitment to delivering exceptional results on time and within budget. As an independent professional, 
                        I embrace challenges with enthusiasm and thrive on the opportunity to bring clients' visions to life. In summary,
                         I am a dedicated freelancer ready to collaborate on exciting projects, bringing creativity, expertise, and a results-driven approach to every endeavor.
                    </Typography>
                    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'20px'}}>
                     <CallIcon sx={{color:'moccasin'}}/>
                    <Typography sx={{ color: 'chocolate', fontSize: '18px',cursor:'pointer' }}>6386455982</Typography>
                    </Box>
                    </Container>
                </Box>
            </Container>
    );
};

export default About;
