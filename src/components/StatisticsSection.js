import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

const statistics = [
  { number: 40, title: 'STUDENTS' },
  { number: 5, title: 'TEACHERS' },
  { number: 3, title: 'YEARS' },
];

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        padding: { xs: '20px', md: '50px' },
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      {statistics.map((stat, index) => (
        <Box
          key={index}
          sx={{
            flex: '1 1 30%',
            transition: 'transform 0.3s ease-in-out',
            transform: isVisible ? 'scale(1)' : 'scale(0.8)',
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? 'fadeIn 1s ease-in-out forwards' : 'none',
            '@keyframes countUp': {
              '0%': { transform: 'translateY(100%)' },
              '100%': { transform: 'translateY(0)' },
            },
            '@keyframes fadeIn': {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#101010',
              marginBottom: '10px',
              display: 'inline-block',
              animation: isVisible ? 'countUp 2s ease-in-out forwards' : 'none',
            }}
          >
            {isVisible ? stat.number : '0'}
          </Typography>
          <Typography variant="h6" sx={{ color: '#666' }}>
            {stat.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default StatisticsSection;
