import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Link } from '@mui/material';
import { Phone, Email, LocationOn, AccessTime, WhatsApp } from '@mui/icons-material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const InformationSection = () => {
  return (
    <Box sx={{ backgroundColor: '#FF6600', color: '#fff', padding: {xs:'0', md:'20px 50px'}, }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
          gap: '30px',
        }}
      >
        {/* Section 1: Useful Information */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#FF6600',
            borderRadius: '10px',
            
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            Useful Information
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', textAlign:'left' }}>
            Favour Pre-School and Day Care Center provides a broad range of learning programs and activities that's
            unique in itself.
          </Typography>
          {/* Image with Play Button */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '200px',
              backgroundImage: 'url(/images/toddler.png)', // Replace with the actual image path
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
              }}
            >
              <PlayArrowIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>

        {/* Section 2: Our Activities */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: '#FF6600',
            borderRadius: '10px',
            
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            Our Activities
          </Typography>
          <List
            sx={{
              listStyleType: 'disc', // Ensures that bullet points are displayed
              paddingLeft: '20px', // Space for the bullets
            }}
          >
            {[
              'Mountain Trekking Programs',
              'Inter School Competitions',
              'Awards and Ceremony',
              'Graduation Events',
              'Quiz Competitions',
              'Fashion Day',
              'Talents Competitions',
            ].map((activity, index) => (
              <ListItem key={index} sx={{ padding: 0 }}>
                <ListItemText primary={activity} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Section 3: Links */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: {xs:'20px', md:'20px 50px'},
            backgroundColor: '#FF6600',
            borderRadius: '10px',
            
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            Links
          </Typography>
          <List>
            {[
              { text: 'HOME', href: '/' },
              { text: 'ABOUT', href: '/about' },
              { text: 'SERVICES', href: '/services' },
              { text: 'GALLERY', href: '/gallery' },
              { text: 'CONTACT', href: '/contact' },
            ].map((link, index) => (
              <ListItem key={index} sx={{ padding: 0 }}>
                <Link href={link.href} underline="none" color="#fff">
                  <ListItemText primary={link.text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Section 4: Get In Touch */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: '#FF6600',
            borderRadius: '10px',
            
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            Get In Touch
          </Typography>
          {/* Phone Numbers */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <IconButton
              sx={{ color: '#fff' }}
              component="a"
              href="https://wa.me/+263785383686" //  WhatsApp number
            >
                <WhatsApp />
            </IconButton>
            <Link href="https://wa.me/+263785383686" color="#fff" underline="none">
              <Typography variant="body1" sx={{ marginLeft: '10px' }}>
                +263 78 538 3686
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <IconButton
              sx={{ color: '#fff' }}
              component="a"
              href="tel:+263713173394" // Makes the number clickable for dialing
            >
              <Phone />
            </IconButton>
            <Link href="tel:+263713173394" color="#fff" underline="none">
              <Typography variant="body1" sx={{ marginLeft: '10px' }}>
                +263 71 317 3394
              </Typography>
            </Link>
          </Box>

          {/* Emails */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <IconButton
              sx={{ color: '#fff' }}
              component="a"
              href="mailto:lucynyambuya@gmail.com" // Makes the email clickable for opening the mail client
            >
              <Email />
            </IconButton>
            <Link href="mailto:lucynyambuya@gmail.com" color="#fff" underline="none">
              <Typography variant="body1" sx={{ marginLeft: '10px' }}>
                lucynyambuya@gmail.com
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <IconButton
              sx={{ color: '#fff' }}
              component="a"
              href="mailto:favour@gmail.com" // Makes the email clickable for opening the mail client
            >
              <Email />
            </IconButton>
            <Link href="mailto:favour@gmail.com" color="#fff" underline="none">
              <Typography variant="body1" sx={{ marginLeft: '10px' }}>
                favour@gmail.com
              </Typography>
            </Link>
          </Box>

          {/* Location */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <IconButton
              sx={{ color: '#fff' }}
              component="a"
              href="https://maps.google.com?q=1143+Mbundane,+Bulawayo,+Zimbabwe" // Makes the location clickable for Google Maps
              target="_blank" // Opens the map in a new tab
            >
              <LocationOn />
            </IconButton>
            <Link
              href="https://maps.google.com?q=1143+Mbundane,+Bulawayo,+Zimbabwe"
              color="#fff"
              underline="none"
            >
              <Typography variant="body1" sx={{ marginLeft: '10px' }}>
                1143 Mbundane, Bulawayo, Zimbabwe
              </Typography>
            </Link>
          </Box>

          {/* Office Hours */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: '#fff' }}>
              <AccessTime />
            </IconButton>
            <Typography variant="body1" sx={{ marginLeft: '10px' }}>
              Mon - Fri: 07:00am - 17:00pm
            </Typography>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default InformationSection;
