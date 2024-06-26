import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Drawer, IconButton, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Bipesh R. Subedi
      </Typography>
      <List>
        {['Home', 'About', 'Projects', 'Publications', 'Contact', 'Cerebro'].map((text) => (
          <ListItemButton key={text} component={Link} to={`/${text.toLowerCase()}`} sx={{ py: 1 }}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bipesh R. Subedi
            </Typography>
          </>
        ) : (
          <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bipesh R. Subedi
            </Typography>
            <Button color="inherit" component={Link} to="/home">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            <Button color="inherit" component={Link} to="/publications">Publications</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/cerebro">Cerebro</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
