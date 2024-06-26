import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import SocialLinks from '../components/SocialLinks';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send form data to your server or an email)
    console.log(form);
    alert('Form submitted');
  };

  return (
    <div>
      <NavBar />
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom align='center'>
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500, mx: 'auto' }}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              type="email"
            />
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
        <Typography variant="h7" component="p" gutterBottom align='center' margin={4}>
          Follow Me
          </Typography>
          <SocialLinks/>
      </Box>
    </div>
  );
}

export default Contact;
