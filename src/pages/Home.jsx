import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const photo_url = '/logo512.png';

function Home() {
  return (
    <div>
      <NavBar />
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} md={3}>
            <Avatar
              alt="Profile Photo"
              src={photo_url}
              sx={{ width: 150, height: 150, margin: '0 auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h5" component="h1" gutterBottom>
              Greetings!!
            </Typography>
            <Typography variant="body1">
              Hello! I'm Bipesh R. Subedi, a passionate developer with a keen interest in creating innovative solutions. With a background in computer science and a love for coding, I have worked on various projects ranging from web development to machine learning. In this website, you can explore my projects, publications, and get in touch with me. Thank you for visiting!
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </div>
  );
}

export default Home;
