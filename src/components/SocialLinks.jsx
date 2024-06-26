import { Box, IconButton } from '@mui/material';
import { Instagram, LinkedIn, GitHub, School } from '@mui/icons-material';

function SocialLinks(){
return (
    <Box sx={{ mt: 2, textAlign: 'center' }}>
<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
  <IconButton color="primary" component="a" href="https://instagram.com/yourprofile" target="_blank">
    <Instagram />
  </IconButton>
  <IconButton color="primary" component="a" href="https://linkedin.com/in/yourprofile" target="_blank">
    <LinkedIn />
  </IconButton>
  <IconButton color="primary" component="a" href="https://github.com/yourprofile" target="_blank">
    <GitHub />
  </IconButton>
  <IconButton color="primary" component="a" href="https://scholar.google.com/citations?user=yourprofile" target="_blank">
    <School />
  </IconButton>
</Box>
</Box>
);

}

export default SocialLinks;
