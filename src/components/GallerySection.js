// src/pages/Gallery/GallerySection.js

import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const GallerySection = () => {
  const navigate = useNavigate();

  const images = [
    '/images/g1.png',
    '/images/g2.png',
    '/images/g3.png',
    '/images/g4.png',
    '/images/g5.png',
    '/images/g6.png',
    '/images/g7.png',
    '/images/g8.png',
  ];

  const handleViewMore = () => {
    navigate('/gallery'); // Navigates to the Gallery page when clicked
  };

  return (
    <Box
      sx={{
        padding: { xs: '20px', md: '50px' },
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      {/* Heading */}
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#101010', fontWeight:'700' }}>
        Our Gallery
      </Typography>

      {/* Gallery Grid for larger screens */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Grid container spacing={2}>
          {images.slice(0, 8).map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                component="img"
                src={image}
                alt={`Gallery Image ${index + 1}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Swiper Carousel for small screens */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 2 }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={image}
                alt={`Gallery Image ${index + 1}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* View More Button */}
      <Button
        variant="contained"
        sx={{
          marginTop: '20px',
          backgroundColor: '#FF6600',
          color: '#FFFFFF',
          '&:hover': { backgroundColor: '#FF5500' },
        }}
        onClick={handleViewMore}
      >
        View More
      </Button>
    </Box>
  );
};

export default GallerySection;
