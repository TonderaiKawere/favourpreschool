import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, TextField, Modal } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'; // Correct import for Swiper
import { Pagination, Autoplay } from 'swiper/modules'; // Import required Swiper modules
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const PackagesSection = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleOpen = (pkg) => {
    setSelectedPackage(pkg);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Logic to send an email using a backend service
    const response = await fetch('/api/send-quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, package: selectedPackage }),
    });

    if (response.ok) {
      alert('Your quote request has been sent!');
      setEmail('');
      setOpen(false);
    } else {
      alert('Failed to send the request. Please try again.');
    }
  };

  const packages = [
    {
      title: 'Toddlers Package',
      content: 'Our infant care program provides a warm and secure environment focused on sensory stimulation, early bonding, and developmental milestones. We prioritize personalized care plans to ensure each infant’s routine is adapted to their unique needs, including feeding, diapering, and naptime.',
    },
    {
      title: 'ECD A Package',
      content: ' This program supports toddlers through structured activities that enhance motor skills, language development, and social interactions. Activities include playtime, storytelling, and early educational games, fostering a love for learning and helping toddlers build foundational skills.',
    },
    {
      title: 'ECD B Package',
      content: 'Our preschool programs are designed to prepare children for formal schooling. ECD A focuses on basic literacy and numeracy through playful learning, while ECD B emphasizes school readiness with advanced literacy, STEM concepts, and creative arts. Both programs include ICT programming to introduce young children to technology.',
    },
  ];

  return (
    <Box sx={{ padding: '20px', justifyContent: 'center', alignItems: 'center' }}>
      {/* Grid layout for medium and large screens */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: '20px',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {packages.map((pkg, index) => (
          <Card
            key={index}
            sx={{
              flex: 1,
              maxWidth: '30%',
              boxShadow: 3,
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#101010', marginBottom: '10px' }}>
                {pkg.title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                {pkg.content}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '10px' }}
                onClick={() => handleOpen(pkg.title)}
              >
                Get a Quote
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Carousel for small screens */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
        >
          {packages.map((pkg, index) => (
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
                    {pkg.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {pkg.content}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: '10px' }}
                    onClick={() => handleOpen(pkg.title)}
                  >
                    Get a Quote
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Modal for email input */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: '20px', textAlign: 'center' }}>
            Get a Quote for {selectedPackage}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Email"
              fullWidth
              required
              value={email}
              onChange={handleEmailChange}
              sx={{ marginBottom: '20px' }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Send Request
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default PackagesSection;
