import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import "../Home/icons.css";
import "../Home/homeStyle.css";

const Banner = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{
      animation: 'slideDown 1s ease',
      marginTop: '60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: isMobileView ? "300px" : "600px",
      backgroundSize: 'cover',
      backgroundImage: `url(/assets/background.webp)`, // Preload the background image
      width: '100%'
    }}>
      <Box>
        <Typography sx={{ color: 'chocolate', fontSize: isMobileView ? "40px" : "50px", textAlign: 'center', textShadow: '0px 3px 10px rgba(160, 100, 250, 0.5)' }}>Hi, <span style={{ color: '#328ba8', fontSize: isMobileView ? "50px" : "110px" }}>I'm Swapnil</span></Typography>
        <Typography sx={{ color: 'chocolate', fontSize: isMobileView ? "30px" : "50px", textAlign: 'center', textShadow: '0px 3px 7px rgba(160, 100, 250, 0.5)' }}>A Mern Web Developer</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'center', width: '100%' }}>
        <ul style={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: 'center', width: '100%', gap: '10px' }}>
          <li>
            <a href="https://github.com/swapnil0000" target="_blank">
              <i className="fab fa-github icon"></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/swapnil-srivastav-917560183/' target='_blank'><i className="fab fa-linkedin icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/spixxels?igsh=NXdxaDh3YzZsZmQw" target='_blank'>
              <i className="fab fa-instagram icon"></i>
            </a>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default Banner;
