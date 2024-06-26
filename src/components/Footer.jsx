// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        mt:'auto',
        my:0.5,
        position: 'absolute',
        bottom:0,
        backgroundColor: (theme) => theme.palette.grey[200],
        textAlign: 'center'
      }}
    >
      <SocialLinks />
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
        {'© '}
        {new Date().getFullYear()}.
        All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
