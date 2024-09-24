import { Box, Typography } from '@mui/material/node'
import React from 'react'

const EventsSections = () => {
  return (
    <Box sx={{backgroundColor: '#f9f9f9', padding:{xs:'20px 0', md: '50px 0'}}}>
        
      <Box sx={{padding:{xs:'0 10px', md: '0 50px '}}}>
        <Typography variant="h4" sx={{ marginBottom: '20px', color: '#101010', fontWeight:'700' }}>
        Our Latest Events
      </Typography>
      </Box>

        <Box className='box1'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: {xs: '20px', md: '50px'},
        
        flexDirection: { xs: 'column', md: 'row' }, // Stack on smaller screens, side by side on larger
      }}
    >
      {/* Left Image */}
      <Box
        component="img"
        src="/images/about.png" // Replace with your image path
        alt="About Us"
        sx={{
          width: { xs: '100%', md: '40%' }, // Full width on small screens, 45% on medium and up
          borderRadius: '10px',
          marginBottom: { xs: '20px', md: '0' }, // Add space below image on small screens
        }}
      />

      {/* Right Content with Drop Shadow */}
      <Box
        sx={{
          width: { xs: '100%', md: '58%' }, // Full width on small screens, 45% on medium and up
          padding: '20px' ,
          // backgroundColor: { xs: 'transparent', md: '#fff' }, // Set background to white
          // boxShadow: { xs: 'none', md: '5px solid #FF6600' } ,
          // borderLeft: { xs: 'none', md: '5px solid #FF6600' }, // No border on small screens
          // borderTop: { xs: '5px solid #FF6600', md: 'none' }, // Border on top for small screens
          color: '#101010', // Text color set to #101010
          textAlign: 'left',
        }}
      >
<Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '16px', md: '20px' }, fontWeight:'600' }}>
          End Of Year Graduation
          </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', color:'#ff6600'}}>
        30 November 
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Inside our classrooms, you’ll see children actively exploring, building, and learning through hands-on activities. From constructing towers of blocks to experimenting with early science projects, each moment reflects the excitement and curiosity that our programs inspire. Our ICT and coding sessions are particularly popular, where young minds dive into the world of technology, learning basic coding skills that foster problem-solving and critical thinking.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Outside, the energy is just as infectious, with children enjoying outdoor play and sports. Whether it’s running across the field, playing group games, or participating in nature walks, these moments of physical activity help our students develop essential motor skills and a sense of teamwork.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        The creative side of our students shines through in their art and craft projects, where their imaginations take flight in drawings, paintings, and other hands-on activities. Our gallery also features photos from our educational trips and special events, capturing the excitement of our students as they learn through exploration, adventure, and new experiences.
        </Typography>
      
      </Box>
    </Box>
        <Box className='box2'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: {xs: '20px', md: '0 50px'},
        
        flexDirection: { xs: 'column', md: 'row' }, // Stack on smaller screens, side by side on larger
      }}
    >
      {/* Left Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '58%' }, // Full width on small screens, 45% on medium and up
          padding: '20px' ,
          // backgroundColor: { xs: 'transparent', md: '#fff' }, // Set background to white
          // boxShadow: { xs: 'none', md: '5px solid #FF6600' } ,
          // borderLeft: { xs: 'none', md: '5px solid #FF6600' }, // No border on small screens
          // borderTop: { xs: '5px solid #FF6600', md: 'none' }, // Border on top for small screens
          color: '#101010', // Text color set to #101010
          textAlign: 'left',
        }}
      >
<Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '16px', md: '20px' }, fontWeight:'600' }}>
          End Of Year Graduation
          </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', color:'#ff6600'}}>
        30 November 
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Inside our classrooms, you’ll see children actively exploring, building, and learning through hands-on activities. From constructing towers of blocks to experimenting with early science projects, each moment reflects the excitement and curiosity that our programs inspire. Our ICT and coding sessions are particularly popular, where young minds dive into the world of technology, learning basic coding skills that foster problem-solving and critical thinking.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Outside, the energy is just as infectious, with children enjoying outdoor play and sports. Whether it’s running across the field, playing group games, or participating in nature walks, these moments of physical activity help our students develop essential motor skills and a sense of teamwork.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        The creative side of our students shines through in their art and craft projects, where their imaginations take flight in drawings, paintings, and other hands-on activities. Our gallery also features photos from our educational trips and special events, capturing the excitement of our students as they learn through exploration, adventure, and new experiences.
        </Typography>
      
      </Box>

      {/* Right Content with Drop Shadow */}
      
      <Box
        component="img"
        src="/images/about.png" // Replace with your image path
        alt="About Us"
        sx={{
          width: { xs: '100%', md: '40%' }, // Full width on small screens, 45% on medium and up
          borderRadius: '10px',
          marginBottom: { xs: '20px', md: '0' }, // Add space below image on small screens
        }}
      />
    </Box>
        <Box className='Info'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: {xs: '20px', md: '50px'},
        
        flexDirection: { xs: 'column', md: 'row' }, // Stack on smaller screens, side by side on larger
      }}
    >
      {/* Left Image */}
      <Box
        component="img"
        src="/images/about.png" // Replace with your image path
        alt="About Us"
        sx={{
          width: { xs: '100%', md: '40%' }, // Full width on small screens, 45% on medium and up
          borderRadius: '10px',
          marginBottom: { xs: '20px', md: '0' }, // Add space below image on small screens
        }}
      />

      {/* Right Content with Drop Shadow */}
      <Box
        sx={{
          width: { xs: '100%', md: '58%' }, // Full width on small screens, 45% on medium and up
          padding: '20px' ,
          // backgroundColor: { xs: 'transparent', md: '#fff' }, // Set background to white
          // boxShadow: { xs: 'none', md: '5px solid #FF6600' } ,
          // borderLeft: { xs: 'none', md: '5px solid #FF6600' }, // No border on small screens
          // borderTop: { xs: '5px solid #FF6600', md: 'none' }, // Border on top for small screens
          color: '#101010', // Text color set to #101010
          textAlign: 'left',
        }}
      >
<Typography variant="body1" sx={{ marginBottom: '20px', fontSize: { xs: '16px', md: '20px' }, fontWeight:'600' }}>
          End Of Year Graduation
          </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', color:'#ff6600'}}>
        30 November 
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Inside our classrooms, you’ll see children actively exploring, building, and learning through hands-on activities. From constructing towers of blocks to experimenting with early science projects, each moment reflects the excitement and curiosity that our programs inspire. Our ICT and coding sessions are particularly popular, where young minds dive into the world of technology, learning basic coding skills that foster problem-solving and critical thinking.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Outside, the energy is just as infectious, with children enjoying outdoor play and sports. Whether it’s running across the field, playing group games, or participating in nature walks, these moments of physical activity help our students develop essential motor skills and a sense of teamwork.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        The creative side of our students shines through in their art and craft projects, where their imaginations take flight in drawings, paintings, and other hands-on activities. Our gallery also features photos from our educational trips and special events, capturing the excitement of our students as they learn through exploration, adventure, and new experiences.
        </Typography>
      
      </Box>
    </Box>
    </Box>
    
  )
}

export default EventsSections
