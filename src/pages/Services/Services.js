// src/pages/About/Services.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PackagesSection from '../../components/PackagesSection';
import CardsSection from '../../components/CardsSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import VideoSection from '../../components/VideoSection';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const Services = () => {
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
          Our Services
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
        alt="Our Services"
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
        At Favour School, we are dedicated to providing a holistic range of services that cater to the unique needs of each child, from infants to preschoolers. Our Early Childhood Development (ECD) programs, designed for children aged 3 to 5 years in ECD A and ECD B, focus on fostering early literacy, numeracy, and social-emotional skills through engaging, play-based learning experiences. We also integrate ICT programming into our curriculum, with twice-weekly coding sessions that introduce young learners to the basics of technology, encouraging problem-solving and creativity from an early age.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Our childcare services, offered for infants and toddlers aged 3 months to 3 years, provide a nurturing environment where every child receives personalized care. We ensure that each child’s routine aligns with their home schedule, making the transition between home and school smooth and stress-free.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        To ensure our teachers stay up to date with the latest educational practices, we regularly offer professional development through workshops and training programs. In addition to academics, we believe in the importance of physical development, which is why we organize weekly sports activities that promote teamwork, coordination, and fitness. Our educational trips take students beyond the classroom, offering them real-world learning experiences. Lastly, we take pride in assisting our ECD B graduates in securing placements at top primary schools for their Grade 1 transition, ensuring they continue their educational journey with confidence.
        </Typography>
      </Box>
    </Box>
    <PackagesSection/>
    <Box className='ServicesSectionPage'
        sx={{
          // padding: '20px',
         backgroundColor:{ xs: 'none', md: 'f9f9f9' },
         padding: {xs: '20px', md: '50px'},
        }}
      >
        
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
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '16px', md: '20px' }, fontWeight:'600' }}>
          Activities, Trips & Graduation
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '14px', md: '16px' } }}>
          At Favour School, we are committed to providing a rich and diverse learning experience that goes beyond the traditional classroom setting. 
          Our weekly sports sessions are designed to enhance physical development, teamwork, and coordination through a variety of engaging games and 
          activities. Creative arts sessions further encourage self-expression and fine motor skills, as students explore drawing, painting, and crafting
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '14px', md: '16px' } }}>
          Educational trips are a cornerstone of our program, offering students hands-on learning opportunities that connect academic concepts to real-world 
          experiences. These outings are carefully planned to align with our curriculum and broaden students' horizons through interactive exploration and 
          field-based learning.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '14px', md: '16px' } }}>
          As our students approach the end of their ECD B program, we offer tailored support to ensure a smooth transition to primary school. This includes 
          assistance with application processes and securing placements at reputable institutions. To celebrate their accomplishments, we organize a memorable 
          graduation ceremony that honors their growth and achievements, marking this significant milestone in their educational journey.
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
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '14px', md: '20px' }, fontWeight:'600' }}>
          ICT Curriculum
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '14px', md: '16px' } }}>
          Our ICT curriculum is crafted to spark an early passion for technology and coding in young learners. 
          Through engaging, practical coding sessions held twice a week, children interact with age-appropriate 
          programming tools and platforms that introduce them to fundamental coding concepts. These lessons are 
          designed to be both educational and entertaining, allowing children to learn basic programming, problem-solving, 
          and logical thinking skills in a playful environment.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '14px', md: '16px' } }}>
          We incorporate a variety of interactive activities and coding games to make learning fun and accessible, ensuring 
          that children develop a solid understanding of technology and its applications. This approach not only fosters early 
          digital literacy but also nurtures creativity and critical thinking. Our goal is to prepare students for a future where 
          technological proficiency is essential, equipping them with the skills and confidence to navigate and innovate in an 
          increasingly digital world.
          </Typography>
        </Box>
        </Box>
      </Box>
      <VideoSection/>
    <ContactSection/>
      <InformationSection/>
      <Footer/>
    </Box>
  );
};

export default Services;
