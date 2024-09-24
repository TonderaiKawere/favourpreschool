// src/pages/HomePage.js

import React, { useRef } from 'react';
import { Box } from '@mui/material';
import HeroSection from '../../components/HeroSection'; // Import the HeroSection component
import AboutSection from '../../components/AboutSection';
import ServicesSection from '../../components/ServicesSection';
import GallerySection from '../../components/GallerySection';
import PartnersSection from '../../components/PartnersSection';
import VideoSection from '../../components/VideoSection';
import TeamSection from '../../components/OurTeamSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import StatisticsSection from '../../components/StatisticsSection';

const HomePage = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection onScrollToAbout={scrollToAbout} />
<StatisticsSection/>
      {/* About Section */}
      <Box ref={aboutRef}>
        <AboutSection />
      </Box>
      <ServicesSection />
      <GallerySection />
      <PartnersSection />
      <VideoSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <InformationSection />
      <Footer />
    </>
  );
};

export default HomePage;
