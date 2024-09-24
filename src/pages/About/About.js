// src/pages/About/About.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CardsSection from '../../components/CardsSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import EventsSections from '../../components/EventsSections';
import VideoSection from '../../components/VideoSection';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const About = () => {
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
          About Us
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
          width: { xs: '100%', md: '50%' }, // Full width on small screens, 45% on medium and up
          padding: '20px' ,
          // backgroundColor: { xs: 'transparent', md: '#fff' }, // Set background to white
          // boxShadow: { xs: 'none', md: '5px solid #FF6600' } ,
          // borderLeft: { xs: 'none', md: '5px solid #FF6600' }, // No border on small screens
          // borderTop: { xs: '5px solid #FF6600', md: 'none' }, // Border on top for small screens
          color: '#101010', // Text color set to #101010
          textAlign: 'left',
        }}
      >

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Welcome to Favour School, where we believe that early childhood is a magical time for learning and discovery. 
        Founded in 2021 by Mrs. Lucy Nyambuya and her husband, Mr. John Nyambuya, our school has grown from humble 
        beginnings with just four toddlers to a thriving community with over 100 students. We are dedicated to 
        providing a safe, nurturing, and stimulating environment where children from infancy to ECD B 
        (3 months to 5 years) can explore, learn, and grow.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        At Favour, we offer a unique blend of play-based learning, STEM activities, and early coding education, 
        ensuring that every child is equipped with the skills they need for the future. Our passionate teachers 
        and staff are committed to fostering creativity, curiosity, and confidence in all our students.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Located in Mbundane, Bulawayo, Zimbabwe, Favour School is more than just a place to learn – it’s a 
        community where children are supported and empowered to achieve their dreams. With regular workshops, 
        educational tours, and sports activities, we go the extra mile to ensure that our students enjoy a 
        holistic educational experience. We also help our graduates secure placements at reputable schools 
        for Grade 1, ensuring a seamless transition to the next stage of their academic journey.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Join us at Favour School, and let’s embark on a journey of laughter, learning, and endless possibilities!
        </Typography>
      </Box>
    </Box>
    <CardsSection/>
    <EventsSections/>
    <VideoSection/>
    <ContactSection/>
      <InformationSection/>
      <Footer/>
    </Box>
  );
};

export default About;
