import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; // Import play icon

const VideoSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '50vh', // Adjust as needed
        backgroundImage: 'url(/images/toddler.png)', // Replace with your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom:{md:'50px'}
      }}
    >
      {/* Overlay for darkening the background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for contrast
        }}
      />

      {/* Text and play button container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          color: '#fff', // White text color for visibility
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* First Line of Text */}
        <Typography variant="h3" sx={{ fontSize: { xs: '35px', md: '40px' }, fontWeight: 'bold' }}>
          Growing A Stronger
        </Typography>

        {/* Second Line of Text */}
        <Typography variant="h3" sx={{ fontSize: { xs: '35px', md: '40px' }, fontWeight: 'bold', marginBottom: '20px' }}>
          Tomorrow
        </Typography>

        {/* Play button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: '#FF6600', // Custom button color
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            minWidth: 'unset',
            '&:hover': { backgroundColor: '#FF6600' }, // Same color on hover
          }}
        >
          <PlayArrowIcon sx={{ fontSize: '30px', color: '#fff' }} />
        </Button>
      </Box>
    </Box>
  );
};

export default VideoSection;
