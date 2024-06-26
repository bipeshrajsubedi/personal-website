import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Dummy data fetching function (replace with your actual data fetching logic)
const fetchPublications = async () => {
  return [
    { title: 'Publication A', journal: 'Journal A', year: '2021', link: '#' },
    { title: 'Publication B', journal: 'Journal B', year: '2020', link: '#' }
  ];
};

function Publications() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchPublications();
      setPublications(result);
    };
    fetchData();
  }, []);

  return (
    <Box>
      <NavBar />
      <Container sx={{ py: 3 }}>
        <Typography variant="h5" component="h1" marginBottom={2}>
          List of Publications
        </Typography>
        <Box>
          {publications.map((publication, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6">{publication.title}</Typography>
              <Typography variant="subtitle1">{publication.journal}</Typography>
              <Typography variant="body2" color="textSecondary">{publication.year}</Typography>
              {publication.link && (
                <Typography variant="body2">
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">Read more</a>
                </Typography>
              )}
            </Paper>
          ))}
        </Box>
      </Container>
      <Footer/>
    </Box>
  );
}

export default Publications;
