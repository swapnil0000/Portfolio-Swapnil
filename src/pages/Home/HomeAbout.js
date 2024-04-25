import { Box, Button, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import about from "../About/aboutpage.jpg";
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
                <Typography sx={{ color: 'white', fontSize: '53px', textAlign: 'center' }}>About Me</Typography>
                <Box sx={{ display: 'flex', flexDirection:isMobileView?"column":"row", gap: '30px' ,alignItems:'center',justifyContent:'center'}}>
                <img style={{ width: '250px' }} src={about} alt='logo' />

                    <Typography sx={{ color: 'white', textAlign: 'justify', fontSize:isMobileView?"15px":"21.9px" }}>Hi there! I'm <span style={{ color: 'yellowgreen', fontSize:isMobileView?'22px':"28px" }}>Swapnil Srivastav</span>, a passionate Developer with a love for creativity and problem-solving. I thrive on challenges and enjoy turning ideas into reality. With a background in <span style={{ color: 'yellowgreen', fontSize:isMobileView?'22px':"28px" }}>MERN Developer</span> and 1 year of experience, I bring a unique blend of skills to the table. When I'm not coding/designing/building, you can find me exploring new technologies, reading, or spending time outdoors. Let's connect and create something amazing together!</Typography>
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
