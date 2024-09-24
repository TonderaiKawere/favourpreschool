import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const location = useLocation();
  const path = location.pathname;

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrollingDown(currentScrollTop > lastScrollTop);
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#FFFFFF', // White background
        padding: '1% 0',
        transition: 'transform 0.3s ease-in-out',
        transform: scrollingDown ? 'translateY(-100%)' : 'translateY(0)', // Hide on scroll down, show on scroll up
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              src="/images/logo.png" // Ensure the path is correct based on where you place your logo
              alt="Favour Preschool Logo"
              style={{ height: 60, marginRight: 16 }}
            />
          </Link>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                color: path === '/' ? '#FF6600' : '#666666',
                mx: 1,
                '&:hover': {
                  color: '#FF6600',
                },
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                color: path === '/about' ? '#FF6600' : '#666666',
                mx: 1,
                '&:hover': {
                  color: '#FF6600',
                },
              }}
            >
              About
            </Button>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                color: path === '/services' ? '#FF6600' : '#666666',
                mx: 1,
                '&:hover': {
                  color: '#FF6600',
                },
              }}
            >
              Services
            </Button>
          </Link>
          <Link to="/gallery" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                color: path === '/gallery' ? '#FF6600' : '#666666',
                mx: 1,
                '&:hover': {
                  color: '#FF6600',
                },
              }}
            >
              Gallery
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                color: path === '/contact' ? '#FF6600' : '#666666',
                mx: 1,
                '&:hover': {
                  color: '#FF6600',
                },
              }}
            >
              Contact
            </Button>
          </Link>
        </Box>
        <IconButton
          edge="end"
          color={drawerOpen ? '#FF6600' : '#666666'}
          onClick={toggleDrawer}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {drawerOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer}
          sx={{
            width: 250,
            '& .MuiDrawer-paper': {
              width: 250,
              backgroundColor: '#FFFFFF',
              color: '#666666',
            },
          }}
        >
          <Box
            sx={{
              width: 250,
              backgroundColor: '#FFFFFF',
              color: '#666666',
              display: 'flex',
              flexDirection: 'column',
              p: 2,
            }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: path === '/' ? '#FF6600' : '#666666',
                  my: 1,
                  '&:hover': {
                    color: '#FF6600',
                  },
                }}
              >
                Home
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: path === '/about' ? '#FF6600' : '#666666',
                  my: 1,
                  '&:hover': {
                    color: '#FF6600',
                  },
                }}
              >
                About
              </Button>
            </Link>
            <Link to="/services" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: path === '/services' ? '#FF6600' : '#666666',
                  my: 1,
                  '&:hover': {
                    color: '#FF6600',
                  },
                }}
              >
                Services
              </Button>
            </Link>
            <Link to="/gallery" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: path === '/gallery' ? '#FF6600' : '#666666',
                  my: 1,
                  '&:hover': {
                    color: '#FF6600',
                  },
                }}
              >
                Gallery
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  color: path === '/contact' ? '#FF6600' : '#666666',
                  my: 1,
                  '&:hover': {
                    color: '#FF6600',
                  },
                }}
              >
                Contact
              </Button>
            </Link>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
