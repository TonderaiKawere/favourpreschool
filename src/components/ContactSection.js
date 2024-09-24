import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ContactSection = () => {
  return (
    <Box sx={{ display: {xs:'grid', md:'flex'}, justifyContent: 'space-between', padding: {xs:'20px', md:'20px 50px'}, backgroundColor: '#f9f9f9' }}>
      {/* Left Side - Contact Form */}
      <Box sx={{ width: { xs: '100%', md: '45%' } }}>
        <Typography variant="h4" sx={{ marginBottom: '20px', color: '#101010', fontWeight:'700' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', color: '#666' }}>
          Send us a message and we will get back to you as soon as we can.
        </Typography>

        {/* Form */}
        <form action="https://formsubmit.co/favourpreschoolanddaycare@gmail.com" method="POST">
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            required
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            fullWidth
            required
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label="Type your message"
            name="message"
            multiline
            rows={4}
            fullWidth
            required
            sx={{ marginBottom: '20px' }}
          />

          {/* Hidden field to block spam */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Send Button */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#FF6600',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#FF6600',
                border: '1px solid #FF6600',
              },
            }}
          >
            SEND
          </Button>
        </form>
      </Box>

      {/* Right Side - Live Map */}
      <Box sx={{ width: { xs: '100%', md: '50%' }, marginTop: { xs: '40px', md: '0' } }}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151!2d144.9537363!3d-37.8162799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43fdb5b8db%3A0x70418b1cdb3986a7!2sFavour%20Preschool!5e0!3m2!1sen!2sza!4v1637664608745!5m2!1sen!2sza"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactSection;
