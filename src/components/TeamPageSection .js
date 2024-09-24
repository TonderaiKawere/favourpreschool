import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';

const teamMembers = [
  {
    name: 'Mrs L Nyambuya',
    title: 'Lead Teacher',
    image: '/images/nyambuya.png',
    description: 'Mrs. L. Nyambuya is a highly experienced educator with over 5 years of expertise in early childhood development. Known for her warm and approachable personality, she creates engaging, age-appropriate learning programs that promote intellectual, emotional, and social growth in young learners. Mrs. Nyambuya’s innovative, play-based teaching methods foster curiosity and joy in learning, while her commitment to nurturing each child’s unique talents helps build their confidence and potential. Beloved by students and parents alike, she also works closely with families to extend learning beyond the classroom, making her a respected leader in early childhood education. Her unwavering dedication ensures that each child receives the attention and care they need to thrive.',
  },
  {
    name: 'Mrs F Mlambo',
    title: 'ECD Teacher',
    image: '/images/mlambo.png',
    description: 'Mrs. F. Mlambo is dedicated to fostering a supportive and engaging learning environment with over 3 years of experience in early childhood education. Her innovative approach ensures that each child receives the personalized attention and encouragement they need to succeed. Known for her creativity and enthusiasm, Mrs. Mlambo brings energy and excitement to every lesson, sparking a love for learning in her students. Her commitment to providing a safe, nurturing space is reflected in the positive impact she has on their development, making her a trusted and valued educator among parents and children alike. She consistently strives to inspire confidence and curiosity, helping each child reach their full potential.',
  },
  {
    name: 'Miss S Sikhosana',
    title: 'Day Care Coordinator',
    image: '/images/sikhosana.png',
    description: 'Miss S. Sikhosana is committed to ensuring a safe and nurturing space for every child. As the Day Care Coordinator, she oversees daily operations with a strong focus on creating a supportive environment where children can thrive. Known for her exceptional organizational skills and caring nature, Miss Sikhosana is an invaluable asset to the team, ensuring that each day runs smoothly and every child’s needs are met. She is dedicated to building strong, trusting relationships with families and providing exceptional care, making her a vital contributor to the overall success of the center. Her passion for child development is evident in her consistent efforts to create a warm and engaging atmosphere.',
  },
  {
    name: 'Mrs S Sibanda',
    title: 'ICT Teacher',
    image: '/images/sibanda.png',
    description: 'Mrs. S. Sibanda specializes in creative activities that inspire and engage young minds. As the ICT Teacher, she introduces children to the world of technology in a fun and interactive way, fostering a deep interest in learning. Her unique ability to blend educational content with hands-on experiences helps students develop critical thinking and digital literacy skills. Passionate about preparing children for the future, Mrs. Sibanda is dedicated to equipping them with essential knowledge and abilities to thrive in an increasingly digital world. Her patience and enthusiasm make her a beloved teacher, ensuring that each student feels confident and supported on their learning journey.',
  },
];

const TeamPageSection = () => {
  return (
    <Box sx={{ padding: { xs: '20px', md: '50px' }, backgroundColor: '#f9f9f9' }}>
      {/* Heading and Paragraph */}
      <Box sx={{ marginBottom: '40px', textAlign: 'left' }}>
        <Typography variant="h4" sx={{ color: '#FF6600', marginBottom: '10px' }}>
          Meet the Amazing Team
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          Join us at Favour and discover how playful days can become the first chapter of extraordinary lives. Our commitment to laughter, wonder and exploration will help your child reach new heights and soar towards a bright future.
        </Typography>
      </Box>

      {/* Team Cards */}
      {teamMembers.map((member, index) => (
        <Card
          key={index}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
            alignItems: 'center',
            gap:'5%',
            width: '100%',
            marginBottom: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            borderRadius: '8px',
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          {/* Image Section */}
          <CardMedia
            component="img"
            image={member.image}
            alt={member.name}
            sx={{
            //     borderRight: index % 0 !== 2 ? '5px solid #FF6600' : 'none',
            // borderLeft: index % 2 === 0 ? '5px solid #FF6600' : 'none',
            border: '5px solid #FF6600',
              width: { xs: '100%', md: '30%' },
              height: { xs: '350px', md: 'auto' },
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          {/* Content Section */}
          <CardContent
            sx={{
              flex: 1,
              padding: '20px',
              textAlign: { xs: 'center', md: index % 2 === 0 ? 'left' : 'right' },
              
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#101010' }}>
              {member.name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#FF6600', marginBottom: '10px' }}>
              {member.title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>
              {member.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TeamPageSection;
