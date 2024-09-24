// src/pages/About/AboutSection.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate('/about'); // Navigates to the About page when clicked
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: {xs: '20px', md: '50px'},
        backgroundColor: '#f9f9f9',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on smaller screens, side by side on larger
      }}
    >
      {/* Left Image */}
      <Box
        component="img"
        src="/images/about.png" // Replace with your image path
        alt="About Us"
        sx={{
          width: { xs: '100%', md: '45%' }, // Full width on small screens, 45% on medium and up
          borderRadius: '10px',
          marginBottom: { xs: '20px', md: '0' }, // Add space below image on small screens
        }}
      />

      {/* Right Content with Drop Shadow */}
      <Box
        sx={{
          width: { xs: '100%', md: '45%' }, // Full width on small screens, 45% on medium and up
          padding: '20px' ,
          backgroundColor: { xs: 'transparent', md: '#fff' }, // Set background to white
          boxShadow: { xs: 'none', md: '5px solid #FF6600' } ,
          borderLeft: { xs: 'none', md: '5px solid #FF6600' }, // No border on small screens
          // borderTop: { xs: '5px solid #FF6600', md: 'none' }, // Border on top for small screens
          color: '#101010', // Text color set to #101010
          textAlign: 'left',
        }}
      >
        <Typography variant="h4" sx={{ color: '#101010', marginBottom: '20px', fontWeight:'700' }}>
          About Us
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          At Favour, we believe that childhood is the perfect time to nurture young minds
          and help them embark on a magical journey towards a dazzling future. In our
          sun-soaked classrooms, children are encouraged to ask questions, create art,
          and explore science. Our passionate teachers believe that play is the key to
          unlocking the potential of each child, helping them overcome obstacles and build confidence.
        </Typography>

        {/* Second Typography: Hidden on small screens */}
        <Typography
          variant="body1"
          sx={{
            marginBottom: '20px',
            display: { xs: 'none', md: 'block' }, // Hidden on mobile, visible on medium and up
            color: '#101010',
          }}
        >
          We are dedicated to providing a safe and supportive environment where children
          can learn and grow, developing skills that will help them succeed in life. From
          building towers of blocks to mastering language and science, we help them become
          confident, curious, and creative individuals.
        </Typography>

        {/* Third Typography: Hidden on small screens */}
        <Typography
          variant="body1"
          sx={{
            marginBottom: '20px',
            display: { xs: 'none', md: 'block' }, // Hidden on mobile, visible on medium and up
            color: '#101010',
          }}
        >
          Join us at Favour and discover how playful days can become the first chapter
          of extraordinary lives. Our commitment to laughter, wonder, and exploration
          will help your child reach new heights and soar toward a bright future.
        </Typography>

        <Button variant="contained" sx={{ backgroundColor: '#FF6600', color: '#fff' }} onClick={handleViewMore}>
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default AboutSection;
