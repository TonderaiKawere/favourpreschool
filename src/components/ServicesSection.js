// src/pages/Services/ServicesSection.js

import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('Pre-School');

  const handleServiceChange = (service) => {
    setActiveService(service);
  };

  return (
    <Box
      sx={{
        padding: { xs: '20px', md: '50px' }, // Responsive padding
       backgroundColor:'f9f9f9',
        textAlign: 'center',
      }}
    >
      {/* Heading */}
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#101010', fontWeight:'700' }}>
        Services
      </Typography>

      {/* Service Buttons */}
      <Box sx={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="outlined"
          onClick={() => handleServiceChange('Day Care')}
          sx={{
            marginRight: '20px',
            backgroundColor: activeService === 'Day Care' ? 'transparent' : '#FF6600',
            borderColor: '#FF6600',
            color: activeService === 'Day Care' ? '#FF6600' : '#fff',
            borderWidth: activeService === 'Day Care' ? '2px' : '1px',
            '&:hover': { backgroundColor: 'transparent',color:'#FF6600' },
            fontSize: { xs: '12px', md: '16px' }, // Font size responsive
          }}
        >
          Childcare Services
        </Button>

        <Button
          variant="outlined"
          onClick={() => handleServiceChange('Pre-School')}
          sx={{
            backgroundColor: activeService === 'Pre-School' ? 'transparent' : '#FF6600',
            borderColor: '#FF6600',
            color: activeService === 'Pre-School' ? '#FF6600' : '#fff',
            borderWidth: activeService === 'Pre-School' ? '2px' : '1px',
            '&:hover': { backgroundColor: 'transparent',color:'#FF6600' },
            fontSize: { xs: '12px', md: '16px' }, // Font size responsive
          }}
        >
          Educational Enrichment Services
        </Button>
      </Box>

      {/* Service Information */}
      {activeService === 'Day Care'  && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
            justifyContent: 'space-between',
            alignItems: 'center',
            // padding: '20px',
           backgroundColor:{ xs: 'none', md: 'f9f9f9' },
          }}
        >
          {/* Left Content with Drop Shadow */}
          <Box
            sx={{
              width: { xs: '100%', md: '55%' }, // Responsive width
              // padding: '20px',
              backgroundColor: '#fff',
              
             
              color: '#101010',
              textAlign: 'left',
              marginBottom: { xs: '5', md: '0' }, // Spacing for smaller screens
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: '20px', color: '#101010', fontSize: { xs: '18px', md: '24px'}, fontWeight:'600' }}>
            Childcare Services (3 months to 3 years):
            </Typography>
            
            <ul>
              <li>Infant Care (3-12 months): Providing a nurturing and safe environment focused on the unique needs of infants, 
                including feeding, diapering, and nap schedules. Sensory play and early bonding activities are introduced to 
                stimulate early development.</li>
              <li>Toddler Care (1-3 years): Engaging toddlers in structured activities that promote physical development, 
                language acquisition, and social interaction. Activities include basic motor skill development, 
                playtime, and story sessions.</li>
              <li>Personalized Care Plans: Tailored schedules and routines to align with each child’s home routine, 
                ensuring a smooth transition between home and daycare.</li>
              <li>Safe and Stimulating Environment: A secure space designed with age-appropriate toys and equipment to encourage 
                exploration and early learning in a safe setting.</li>
              <li>Daily Updates for Parents: Regular communication with parents regarding their child’s feeding, nap times, 
                and overall development through a daily report.</li>
            </ul>
          </Box>

          {/* Right Image */}
          <Box
            component="img"
            src="/images/toddler.png" // Replace with your image path
            alt="Pre-School"
            sx={{
              width: { xs: '100%', md: '40%' }, // Responsive image width
              borderRadius: '10px',
            }}
          />
        </Box>
      )}

      {activeService === 'Pre-School' && (
        <Box
        sx={{
          // padding: '20px',
         backgroundColor:{ xs: 'none', md: 'f9f9f9' },
        }}
      >
        <Box>
        <Typography variant="h5" sx={{ marginBottom: '20px', color: '#101010', fontSize: { xs: '18px', md: '24px'}, fontWeight:'600' }}>
            Educational Enrichment Services: ECD A and ECD B (3 years to 5 years):
          </Typography>
        </Box>
        
        <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
          justifyContent: 'space-between',
          alignItems: 'top',
        }}
        >
          {/* Left Content with Drop Shadow */}
        <Box
          sx={{
            width: { xs: '100%', md: '45%' }, // Responsive width
            // padding: '20px',
            backgroundColor: '#fff',
            
           
            color: '#101010',
            textAlign: 'left',
            marginBottom: { xs: '5px', md: '0' }, // Spacing for smaller screens
          }}
        >
          {/* <Typography variant="h5" sx={{ marginBottom: '20px', color: '#101010', fontSize: { xs: '18px', md: '24px'}, fontWeight:'600' }}>
            Educational Enrichment Services: ECD A and ECD B (3 years to 5 years):
          </Typography> */}
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '14px', md: '16px' } }}>
            ECD A Program (3-4 years):
          </Typography>
          <ul>
            <li>Pre-Literacy & Numeracy Skills: Introducing children to basic literacy through alphabet recognition, storytelling, 
              and early numeracy activities like counting and pattern recognition.</li>
            <li>Play-Based Learning: Activities that encourage learning through play, fostering creativity, problem-solving, and social skills.</li>
            <li>Music and Movement: Sessions that combine music, dance, and rhythm to promote motor skills and auditory development.</li>
            <li>Safe and Stimulating Environment: A secure space designed with age-appropriate toys and equipment to encourage 
              exploration and early learning in a safe setting.</li>
            <li>ICT Kids Programming: Introducing children to basic coding and early digital literacy, fostering interest in technology from a young age.</li>
          </ul>
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '14px', md: '16px' } }}>
          Parent Involvement: Regular updates, meetings, and progress reports to involve parents in their child’s early learning and development journey.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '45%' }, // Responsive width
            // padding: '20px',
            backgroundColor: '#fff',
            color: '#101010',
            textAlign: 'left',
            marginBottom: { xs: '20px', md: '0' }, // Spacing for smaller screens
          }}
        >
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '14px', md: '16px' } }}>
            ECD B Program (4-5 years):
          </Typography>
          
          <ul>
          <li> School Readiness: A curriculum designed to build literacy (early reading and writing), numeracy, 
              and social-emotional skills, preparing children for formal schooling.</li>
            <li>STEM Introduction: Age-appropriate exposure to STEM concepts through simple science experiments, 
              hands-on building activities, and nature exploration.</li>
            <li>Creative Arts and Crafts: Expanding creativity through drawing, painting, and other craft activities 
              that develop fine motor skills.</li>
            <li>Outdoor Learning & Exploration: Encouraging learning beyond the classroom with outdoor play, nature walks, 
              and exploration to build physical and cognitive skills.</li>
            <li>ICT Kids Programming: Introducing children to basic coding and early digital literacy, fostering interest 
              in technology from a young age.</li>
          </ul>
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '14px', md: '16px' } }}>
          Parent Involvement: Regular updates, meetings, and progress reports to involve parents in their child’s early learning and development journey.
          </Typography>
        </Box>
        </Box>
      </Box>
      )}
    </Box>
  );
};

export default ServicesSection;
