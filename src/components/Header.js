import React, { useEffect, useState } from 'react';
import { AppBar, Box, Drawer, IconButton, InputBase, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import logo from '../components/logoswapnil.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState('top');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState('');
  const [query, setQuery] = useState('');
const theme=useTheme();
const isMobileView=useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY && !mobileMenu) {
        setShow('hide');
      } else {
        setShow('top'); // Changed to 'top' when scrolling up
      }
    } else {
      setShow('top');
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigateTo = (route) => {
    navigate(route);
    setMobileMenuOpen(false); // Close the drawer after clicking on a menu item
  };

  const menuData=[
    {
      id:1,
      val:'Home',
      path:"/",
    },
    {
      id:2,
      val:'About',
      path:"/about",
    },
    {
      id:3,
      val:'Skills',
      path:"/skills",
    },
    {
      id:4,
      val:'Projects',
      path:"/projects",
    },
    {
      id:5,
      val:'Contact',
      path:"/contact",
    },
  ]

  return (
    <AppBar position="fixed" sx={{
      opacity: show === 'top' ? 1 : 0,
      height: show === 'top' ? 'auto' : 0,
      overflow: 'hidden',
      transition: 'opacity 1.5s, height 0.5s',
      backgroundColor: show === 'top' ? '#181e24' : '#333333',
      boxShadow:'none'

    }}>
      <Toolbar >
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Box>
           <Typography onClick={()=>navigate('/')} sx={{fontSize:'40px',fontWeight:'600',cursor:'pointer',color:'chocolate'}}>S S</Typography>
          </Box>
          <Drawer
          anchor="right"
          open={mobileMenu}
          onClose={handleDrawerToggle}
          sx={{
            '& .MuiDrawer-paper': {
              width: '100vw', // Full width
              height: '50vh', // Half of viewport height
              backgroundColor: '#181e24',
            },
          }}
        >
          <Box
            sx={{ width: "100%",display:'flex',flexDirection:'column' }}
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
          >
          <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          {menuData.map((text) => (
            <ListItem key={text.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }} onClick={() => navigate(text.path)}>
              <ListItemText sx={{ color: 'white', fontSize: '24px' }} onClick={openSearch} primary={text.val} /> {/* Adjust the fontSize here */}
            </ListItem>
          ))}
        </List>
        
          </Box>
        </Drawer>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '55px', alignItems: 'center' }}>
            <Typography onClick={()=>navigate("/")}  sx={{ color: 'white', cursor: 'pointer',fontSize:'20px' }}>Home</Typography>
            <Typography onClick={()=>navigate("/about")}  sx={{ color: 'white', cursor: 'pointer',fontSize:'20px' }}>About</Typography>
            <Typography  onClick={()=>navigate("/skills")} sx={{ color: 'white', cursor: 'pointer',fontSize:'20px' }}>Skills</Typography>
            <Typography  onClick={()=>navigate("/projects")} sx={{ color: 'white', cursor: 'pointer',fontSize:'20px' }}>Project</Typography>
            <Typography onClick={()=>navigate("/contact")}  sx={{ color: 'white', cursor: 'pointer',fontSize:'20px' }}>Contact</Typography>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: '20px', alignItems: 'center' }}>
            {mobileMenu ? (
              <VscChromeClose onClick={() => setMobileMenu(false)} sx={{ color: 'white', cursor: 'pointer' }} />
            ) : (
              <SlMenu onClick={openMobileMenu} sx={{ color: 'white', cursor: 'pointer' }} />
            )}
            {mobileMenu && (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', backgroundColor: '#181e24', position: 'absolute', top: '100%', left: 0, width: '100%', zIndex: 999 }}>
                <Typography onClick={() => navigate("/")} sx={{ color: 'white', cursor: 'pointer',fontSize:'20px' }}>Home</Typography>
                <Typography onClick={() => navigate("/about")} sx={{ color: 'white', cursor: 'pointer',fontSize:'20px' }}>About</Typography>
                <Typography onClick={() => navigate("/skills")} sx={{ color: 'white', cursor: 'pointer',fontSize:'20px' }}>Skills</Typography>
                <Typography onClick={() => navigate("/projects")} sx={{ color: 'white', cursor: 'pointer',fontSize:'20px' }}>Project</Typography>
                <Typography onClick={() => navigate("/contact")} sx={{ color: 'white', cursor: 'pointer',fontSize:'20px' }}>Contact</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
