import { Box, Button, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import "../Home/homeStyle.css";

const HomeAbout = () => {
    const navigate = useNavigate();
    const [ref, inView] = useInView();
    const [isVisible, setIsVisible] = useState(false);
    
    const handleClick = () => {
        navigate("/about");
    };

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Box sx={{animation: isVisible ? 'slidetoX 4s ease' : ''}} ref={ref}>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <Typography sx={{ color: 'white', fontSize: '50px', textAlign: 'center',fontFamily:'Montserrat',fontWeight:'700' }}>About Me</Typography>
                <Box sx={{ display: 'flex', flexDirection:isMobileView?"column":"row", gap: '30px' ,alignItems:'center',justifyContent:'center'}}>
                <img style={{ width: '250px' }} src="/assets/aboutpage.webp" alt='logo' />

                    <Typography sx={{ color: 'white', textAlign: 'justify', fontSize:isMobileView?"17px":"21.9px",hyphens:'auto' }}>Hello there! I'm <span style={{fontSize:isMobileView?"18px":"24px",color:'yellowgreen'}}>Swapnil Srivastav</span>, a passionate developer with a knack for creativity and problem-solving. I thrive on challenges and relish the process of turning ideas into reality. With a background in <span style={{fontSize:isMobileView?"18px":"24px",color:'yellowgreen'}}>MERN</span> development and one year of experience, I offer a unique blend of skills. When I'm not coding, designing, or building, you'll find me exploring new technologies, reading, or enjoying the outdoors. Let's connect and collaborate on something amazing together!</Typography>
                </Box>

                <Box sx={{ marginLeft: '0px', marginTop:'8px'}}>
                    <Button
                        onClick={handleClick}
                        variant='outlined'
                        sx={{
                            color: 'wheat',
                            borderColor: 'greenyellow',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                color: 'black',
                                backgroundColor: 'white',
                                borderColor: 'greenyellow',
                                transform: 'scale(1.1)',
                            },
                            '&:active': {
                                transform: 'scale(0.9)',
                            },
                        }}
                    >
                        Read More
                    </Button>

                </Box>

            </Box>
        </Box>
    );
};

export default HomeAbout;
