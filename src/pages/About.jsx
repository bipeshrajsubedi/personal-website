import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Dummy data fetching function (replace with your actual data fetching logic)
const fetchEducationAndExperience = async () => {
  return {
    education: [
      { institution: 'University A', degree: 'B.Sc. in Computer Science', year: '2015-2019' },
      { institution: 'University B', degree: 'M.Sc. in Data Science', year: '2019-2021' }
    ],
    experience: [
      { company: 'Company X', role: 'Software Engineer', year: '2021-Present' },
      { company: 'Company Y', role: 'Intern', year: '2020-2021' }
    ]
  };
};

function About() {
  const [data, setData] = useState({ education: [], experience: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchEducationAndExperience();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <Box>
      <NavBar />
      <Container sx={{ py: 3 }}>
        <Box>
          <Typography variant="h5" component="h2" gutterBottom marginBottom={3}>
            Education
          </Typography>
          {data.education.map((edu, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6">{edu.institution}</Typography>
              <Typography variant="subtitle1">{edu.degree}</Typography>
              <Typography variant="body2" color="textSecondary">{edu.year}</Typography>
            </Paper>
          ))}
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Experience
          </Typography>
          {data.experience.map((exp, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6">{exp.company}</Typography>
              <Typography variant="subtitle1">{exp.role}</Typography>
              <Typography variant="body2" color="textSecondary">{exp.year}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>
      <Footer/>
    </Box>
  );
}

export default About;
