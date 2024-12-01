import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CustomCard from '../components/cards/cards'; 
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const HomePage = () => {
  const highlights = [
    {
      title: 'Jobs Available',
      description: 'Over 10,000 active listings from tech to marketing.',
      Icon: WorkIcon,
    },
    {
      title: 'Trusted by Companies',
      description: 'More than 1,000 companies find their talent with us.',
      Icon: BusinessIcon,
    },
    {
      title: 'Successful Placements',
      description: 'Helping over 5,000 job seekers land their dream jobs.',
      Icon: ThumbUpIcon,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Empower Your Career
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Connect with opportunities and advance your professional journey.
      </Typography>
      <Grid container spacing={3}>
        {highlights.map((highlight, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CustomCard title={highlight.title}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <highlight.Icon sx={{ marginRight: 1 }} />
                <Typography variant="body1">
                  {highlight.description}
                </Typography>
              </Box>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
