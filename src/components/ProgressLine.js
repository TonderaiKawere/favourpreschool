import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';

const ProgressLine = ({ progress }) => {
  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Progress
      </Typography>
      
    </Box>
  );
};

export default ProgressLine;
