import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

// Image data (array-based approach)
const galleryData = {
  schoolKids: [
    { id: 1, image: './images/g1.png', alt: 'School Kid 1' },
    { id: 2, image: './images/g2.png', alt: 'School Kid 2' },
    { id: 3, image: './images/g3.png', alt: 'School Kid 3' },
    { id: 4, image: './images/g4.png', alt: 'School Kid 4' },
    { id: 5, image: './images/g5.png', alt: 'School Kid 5' },
    { id: 6, image: './images/g6.png', alt: 'School Kid 6' },
  ],
  trips: [
    { id: 1, image: './images/g5.png', alt: 'Trip 1' },
    { id: 2, image: './images/g6.png', alt: 'Trip 2' },
    { id: 3, image: './images/g2.png', alt: 'Trip 3' },
    { id: 4, image: './images/g7.png', alt: 'Trip 4' },
    { id: 5, image: './images/g8.png', alt: 'Trip 5' },
    { id: 6, image: './images/g1.png', alt: 'Trip 6' },
  ],
  activities: [
    { id: 1, image: './images/g7.png', alt: 'Activity 1' },
    { id: 2, image: './images/g8.png', alt: 'Activity 2' },
    { id: 3, image: './images/g3.png', alt: 'Activity 3' },
    { id: 4, image: './images/g6.png', alt: 'Activity 4' },
    { id: 5, image: './images/g1.png', alt: 'Activity 5' },
    { id: 6, image: './images/g2.png', alt: 'Activity 6' },
  ],
  graduation: [
    { id: 1, image: './images/g7.png', alt: 'Graduation 1' },
    { id: 2, image: './images/g1.png', alt: 'Graduation 2' },
    { id: 3, image: './images/g6.png', alt: 'Graduation 3' },
    { id: 4, image: './images/g8.png', alt: 'Graduation 4' },
    { id: 5, image: './images/g7.png', alt: 'Graduation 5' },
    { id: 6, image: './images/g2.png', alt: 'Graduation 6' },
  ],
  teachers: [
    { id: 1, image: './images/g4.png', alt: 'Teacher 1' },
    { id: 2, image: './images/g5.png', alt: 'Teacher 2' },
    { id: 3, image: './images/g6.png', alt: 'Teacher 3' },
    { id: 4, image: './images/g8.png', alt: 'Teacher 4' },
    { id: 5, image: './images/g7.png', alt: 'Teacher 5' },
    { id: 6, image: './images/g2.png', alt: 'Teacher 6' },
  ],
};

const GalleryPageSection = () => {
  // Common Swiper settings
  const swiperSettings = {
    slidesPerView: 1, // Default to 1 slide for small screens
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    loop: true,
    breakpoints: {
      // Small screens: Full-width images (1 slide)
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // Medium screens: 4 images
      960: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    modules: [Autoplay, Pagination],
  };

  // Common Box style for sections
  const sectionStyle = {
    marginBottom: '40px',
    textAlign: 'left', // default alignment
    '@media (min-width: 768px)': { textAlign: 'right' }, // right alignment for headings on larger screens where required
  };

  // Reusable component for rendering image slides
  const renderSwiper = (data, altAlign = false) => (
    <Swiper {...swiperSettings}>
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Box
            component="img"
            src={item.image}
            alt={item.alt}
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <Box sx={{ padding: { xs: '20px', md: '50px' } }}>
      {/* Our School Kids Section */}
      <Box sx={sectionStyle}>
        <Typography variant="h4" sx={{ color: '#FF6600', marginBottom: '20px',textAlign:'left' }}>
          Our School Kids
        </Typography>
        {renderSwiper(galleryData.schoolKids)}
      </Box>

      {/* Trips Section */}
      <Box sx={sectionStyle}>
        <Typography
          variant="h4"
          sx={{ color: '#FF6600', marginBottom: '20px', textAlign: { xs: 'left', md: 'right' } }}
        >
          Trips
        </Typography>
        {renderSwiper(galleryData.trips, true)}
      </Box>

      {/* Activities Section */}
      <Box sx={sectionStyle}>
        <Typography variant="h4" sx={{ color: '#FF6600', marginBottom: '20px',textAlign:'left' }}>
          Activities
        </Typography>
        {renderSwiper(galleryData.activities)}
      </Box>

      {/* Graduation Section */}
      <Box sx={sectionStyle}>
        <Typography
          variant="h4"
          sx={{ color: '#FF6600', marginBottom: '20px', textAlign: { xs: 'left', md: 'right' } }}
        >
          Graduation
        </Typography>
        {renderSwiper(galleryData.graduation, true)}
      </Box>

      {/* Our Teachers Section */}
      <Box sx={sectionStyle}>
        <Typography variant="h4" sx={{ color: '#FF6600', marginBottom: '20px',textAlign:'left' }}>
          Our Teachers
        </Typography>
        {renderSwiper(galleryData.teachers)}
      </Box>
    </Box>
  );
};

export default GalleryPageSection;
