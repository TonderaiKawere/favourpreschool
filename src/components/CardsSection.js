import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';

const CardsSection = () => {
  const cards = [
    {
      title: 'Mission Statement',
      content:
        'At Favour School, our mission is to nurture the curiosity, creativity, and confidence of every child by providing a safe, stimulating, and enriching environment. We are committed to fostering holistic development through play-based learning, STEM education, and ICT programming, empowering young learners to achieve their full potential and prepare for the next steps in their academic journey. By focusing on emotional, social, cognitive, and physical growth, we ensure every child receives the personalized care and support they deserve to flourish.',
    },
    {
      title: 'Vision Statement',
      content:
        'Our vision is to become a leading institution in early childhood education, expanding to offer Grade 1 to 7, where every child is equipped with the foundational skills, knowledge, and values they need to thrive in the 21st century. We aim to inspire a lifelong love of learning and to nurture the leaders, thinkers, and innovators of tomorrow. Our vision includes the adoption of cutting-edge educational technologies, inclusive teaching strategies, and a commitment to sustainable practices, ensuring that our students are well-prepared for the challenges of the future.',
    },
    {
      title: 'Values',
      content: (
        <>
          <strong>Excellence:</strong> Striving for the highest standards in education and child development.
          <br />
          <strong>Innovation:</strong> Embracing new ideas and technologies to create an engaging learning experience.
          <br />
          <strong>Inclusivity:</strong> Providing a nurturing, diverse, and supportive environment for all children.
          <br />
          <strong>Collaboration:</strong> Encouraging strong partnerships between teachers, students, and parents.
          <br />
          <strong>Integrity:</strong> Upholding the highest ethical standards in everything we do.
          <br />
          <strong>Curiosity:</strong> Cultivating a love for learning and exploration in every child.
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      
       <Box sx={{ display: { xs: 'block', md: 'none' }}}>
       {/* Carousel for small screens */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        style={{ display: { xs: 'block', md: 'none' } }} // Hide carousel on md and larger screens
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                boxShadow: 3,
                padding: '20px',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#101010', marginBottom: '10px' }}>
                  {card.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
       </Box>
      {/* Grid layout for medium and large screens */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' }, // Hide grid on small screens, show on md and larger
          gap: '20px',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{
              flex: 1,
              maxWidth: '30%', // 3 cards in a row for medium screens
              boxShadow: 3,
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#101010', marginBottom: '10px' }}>
                {card.title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                {card.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CardsSection;
