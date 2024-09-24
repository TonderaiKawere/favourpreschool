// src/pages/Partners/PartnersSection.js

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const PartnersSection = () => {
  const images = [
    '/images/atlevels.png',
    '/images/kit.png',
    '/images/wallas.png',
    '/images/thembee.png',
    '/images/lions.png',
    '/images/aplus.png',
  ];

  return (
    <Box
      sx={{
        padding: { xs: '20px', md: '50px' },
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      {/* Heading */}
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#101010', fontWeight: '700' }}>
        Our Partners
      </Typography>

      {/* Partners Grid for larger screens */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Box
                component="img"
                src={image}
                alt={`Partners Image ${index + 1}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Swiper for small screens */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 2 }}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={image}
                alt={`Partners Image ${index + 1}`}
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
    </Box>
  );
};

export default PartnersSection;
