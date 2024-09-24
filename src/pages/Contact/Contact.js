// src/pages/About/Contact.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import CardsSection from '../../components/CardsSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Contact = () => {
  return (
    <Box className='Section'>
      <Box
      sx={{
        position: 'relative',
        height: {xs:'100vh', md:'60vh'},
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* Swiper container for background images */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 5000, // Adjust delay as needed
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade" // Fading effect between slides
        modules={[Autoplay]}
        className="heroSwiper"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <SwiperSlide>
          <Box
            component="img"
            src="/images/hero.png"
            alt="Hero Image 1"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="/images/hero2.png"
            alt="Hero Image 2"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="/images/hero3.png"
            alt="Hero Image 3"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="/images/toddler.png"
            alt="Hero Image 4"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="/images/hero3.png"
            alt="Hero Image 5"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
      </Swiper>

      {/* Text content */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
          Contact Us
        </Typography>
        
      </Box>

      {/* Down arrow GIF */}
      <Box
        component="img"
        src="/images/arrow-down.gif"
        alt="Scroll Down"
        sx={{
          position: 'absolute',
          bottom: '20px',
          width: '30px',
          height: '30px',
          animation: 'bounce 1.5s infinite',
          '@keyframes bounce': {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
            '100%': { transform: 'translateY(0)' },
          },
        }}
      />
    </Box>
    <Box className='Info'
>
      <ContactSection/>
      <InformationSection/>
      <Footer/>
    </Box>
    </Box>
  );
};

export default Contact;
