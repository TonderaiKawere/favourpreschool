import React, { useRef } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Facebook } from '@mui/icons-material';

const testimonials = [
  {
    name: 'John Dube',
    title: 'Happy Parent',
    image: '/images/nyambuya.png',
    summary: 'Favour Preschool has been a wonderful place for my child to learn and grow.',
  },
  {
    name: 'Sarah Nyathi',
    title: 'Satisfied Parent',
    image: '/images/mlambo.png',
    summary: 'I am so happy with the nurturing environment provided at Favour Preschool.',
  },
  {
    name: 'Lisa Sibanda',
    title: 'Grateful Parent',
    image: '/images/sikhosana.png',
    summary: 'The teachers really care about the well-being and development of each child.',
  },
  {
    name: 'Michael Ncube',
    title: 'Proud Parent',
    image: '/images/nyambuya.png',
    summary: 'My child has blossomed under the care of the dedicated staff at Favour.',
  },
  {
    name: 'Tinashe Moyo',
    title: 'Thankful Parent',
    image: '/images/mlambo.png',
    summary: 'The best early childhood education my child could have received.',
  },
  {
    name: 'Sandra Mpofu',
    title: 'Supportive Parent',
    image: '/images/sikhosana.png',
    summary: 'A fantastic learning experience that my child looks forward to every day.',
  },
  {
    name: 'Blessing Chipo',
    title: 'Delighted Parent',
    image: '/images/nyambuya.png',
    summary: 'The environment at Favour is both caring and stimulating for young minds.',
  },
];

const TestimonialsSection = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <Box sx={{ padding: { xs: '20px', md: '50px' }, backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      {/* Section Heading */}
      <Typography variant="h4" sx={{ color: '#101010', marginBottom: '20px', fontWeight: '700' }}>
        Testimonials
      </Typography>

      {/* Section Subtext */}
      <Typography variant="body1" sx={{ marginBottom: '40px', color: '#666' }}>
        At Favour, we're passionate about creating a nurturing and joyful learning environment for every child.
      </Typography>

      {/* Testimonial Carousel */}
      <Swiper
        ref={swiperRef}
        slidesPerView={1} // Default to 1 slide per view
        spaceBetween={30} // Add space between slides
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          600: { // For small screens
            slidesPerView: 1,
          },
          960: { // For medium screens and up
            slidesPerView: 4,
            spaceBetween: 30, // Increase space between slides for larger screens
          }
        }}
        modules={[Autoplay, Pagination]}
        className="testimonialsSwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                width: '100%', // Full width of the slide
                maxWidth: { xs: 300, md: 300 }, // Set a max width for the card
                height: 400, // Fixed height for uniformity
                boxShadow: 'none',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Image Section */}
              <Box
                sx={{
                  position: 'relative',
                  height: '250px', // Fixed height for the image section
                  overflow: 'hidden',
                  '&:hover .icon': { opacity: 1 }, // Show Facebook icon on hover
                }}
              >
                <CardMedia
                  component="img"
                  image={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    transition: 'all 0.3s ease-in-out',
                  }}
                />
                {/* Facebook Icon */}
                <IconButton
                  className="icon"
                  sx={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                >
                  <Facebook />
                </IconButton>
              </Box>

              {/* Summary, Name, and Title */}
              <CardContent sx={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="body2" sx={{ marginBottom: '10px', color: '#666' }}>
                  {testimonial.summary}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#101010', display: 'inline' }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body1" sx={{ display: 'inline', marginLeft: '10px', color: '#666' }}>
                  {testimonial.title}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TestimonialsSection;
