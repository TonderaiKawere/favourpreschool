// src/pages/About/Gallery.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GalleryPageSection from '../../components/GalleryPageSection';
import VideoSection from '../../components/VideoSection';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import CardsSection from '../../components/CardsSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const OurGallery = () => {
  return (
    <Box>
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
          Our Gallery
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
        At Favour School, every day is filled with moments of joy, discovery, and growth. Our gallery captures these special moments, offering a glimpse into the vibrant and engaging environment we’ve created for our students.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Inside our classrooms, you’ll see children actively exploring, building, and learning through hands-on activities. From constructing towers of blocks to experimenting with early science projects, each moment reflects the excitement and curiosity that our programs inspire. Our ICT and coding sessions are particularly popular, where young minds dive into the world of technology, learning basic coding skills that foster problem-solving and critical thinking.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Outside, the energy is just as infectious, with children enjoying outdoor play and sports. Whether it’s running across the field, playing group games, or participating in nature walks, these moments of physical activity help our students develop essential motor skills and a sense of teamwork.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        The creative side of our students shines through in their art and craft projects, where their imaginations take flight in drawings, paintings, and other hands-on activities. Our gallery also features photos from our educational trips and special events, capturing the excitement of our students as they learn through exploration, adventure, and new experiences.
        </Typography>
      
      </Box>
    </Box>
    <Box>
      <GalleryPageSection/>
      <VideoSection/>
    <ContactSection/>
      <InformationSection/>
      <Footer/>
    </Box>
    </Box>
  );
};

export default OurGallery;
