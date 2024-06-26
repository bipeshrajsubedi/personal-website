import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Dummy data fetching function (replace with your actual data fetching logic)
const fetchProjects = async () => {
  return [
    { title: 'Project A', description: 'Description of project A', year: '2021', link: '#' },
    { title: 'Project B', description: 'Description of project B', year: '2020', link: '#' }
  ];
};

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProjects();
      setProjects(result);
    };
    fetchData();
  }, []);

  return (
    <Box>
      <NavBar />
      <Container sx={{ py: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom marginTop={2}marginBottom={2}>
          List of Projects
        </Typography>
        <Box>
          {projects.map((project, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body1">{project.description}</Typography>
              <Typography variant="body2" color="textSecondary">{project.year}</Typography>
              {project.link && (
                <Typography variant="body2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Read more</a>
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

export default Projects;
