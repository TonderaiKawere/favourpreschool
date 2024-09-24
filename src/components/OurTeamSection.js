import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const teamMembers = [
  {
    name: 'Mrs L Nyambuya',
    title: 'Lead Teacher',
    image: '/images/nyambuya.png',
    summary: 'Experienced educator with a passion for early childhood development.',
  },
  {
    name: 'Mrs F Mlambo',
    title: 'ECD Teacher',
    image: '/images/mlambo.png',
    summary: 'Dedicated to fostering a supportive and engaging learning environment.',
  },
  {
    name: 'Miss S Sikhosana',
    title: 'Day Care Coordinator',
    image: '/images/sikhosana.png',
    summary: 'Committed to ensuring a safe and nurturing space for every child.',
  },
  {
    name: 'Mrs S Sibanda',
    title: 'ICT Teacher',
    image: '/images/nyambuya.png',
    summary: 'Specializes in creative activities that inspire young minds.',
  },
];

const TeamSection = () => {
  const navigate = useNavigate();

  const handleTeamPage = () => {
    navigate('/team'); // Navigate to the team page
  };

  return (
    <Box sx={{ padding: { xs: '20px', md: '50px' }, backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      {/* Section Heading */}
      <Typography variant="h4" sx={{ color: '#101010', marginBottom: '10px', fontWeight: '700' }}>
        Our Team
      </Typography>

      {/* Subtext */}
      <Typography variant="body1" sx={{ marginBottom: '40px', color: '#666' }}>
        Meet the Amazing Team at Favour Pre School & Day Care Center!
      </Typography>

      {/* Team Cards - Swiper for Mobile */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, marginBottom: '40px' }}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  maxWidth: 300,
                  margin: '0 auto', // Center the cards on mobile
                  position: 'relative',
                  boxShadow: 'none',
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {/* Image Section */}
                <Box sx={{ position: 'relative', overflow: 'hidden', '&:hover .summary': { bottom: 0 } }}>
                  <CardMedia
                    component="img"
                    image={member.image}
                    alt={member.name}
                    sx={{ height: '250px', objectFit: 'cover', objectPosition: 'top', transition: 'all 0.3s ease-in-out' }}
                  />
                  {/* Hover Summary */}
                  <Box
                    className="summary"
                    sx={{
                      position: 'absolute',
                      bottom: '-100%',
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: '#fff',
                      padding: '20px',
                      textAlign: 'center',
                      transition: 'bottom 0.3s ease-in-out',
                    }}
                  >
                    {member.summary}
                  </Box>
                </Box>

                {/* Name and Title */}
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#101010' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {member.title}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Team Cards - Grid for Desktop */}
      <Box
        sx={{
          display: { xs: 'none', md: 'grid' },
          gridTemplateColumns: '1fr 1fr 1fr 1fr', // 4 columns on larger screens
          gap: '20px',
        }}
      >
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            sx={{
              position: 'relative',
              boxShadow: 'none',
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            {/* Image Section */}
            <Box sx={{ position: 'relative', overflow: 'hidden', '&:hover .summary': { bottom: 0 } }}>
              <CardMedia
                component="img"
                image={member.image}
                alt={member.name}
                sx={{ height: '250px', objectFit: 'cover', objectPosition: 'top', transition: 'all 0.3s ease-in-out' }}
              />
              {/* Hover Summary */}
              <Box
                className="summary"
                sx={{
                  position: 'absolute',
                  bottom: '-100%',
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  padding: '20px',
                  textAlign: 'center',
                  transition: 'bottom 0.3s ease-in-out',
                }}
              >
                {member.summary}
              </Box>
            </Box>

            {/* Name and Title */}
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#101010' }}>
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                {member.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Button to Navigate to Team Page */}
      <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: '#FF6600',
            '&:hover': {
              backgroundColor: '#FF6600',
            },
          }}
          onClick={handleTeamPage}
        >
          View Full Team
        </Button>
      </Box>
    </Box>
  );
};

export default TeamSection;
