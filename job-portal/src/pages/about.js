import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import CustomCard from '../components/cards/cards';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'CEO',
    bio: 'Jane has over 10 years of experience in leading teams to success.',
  },
  {
    name: 'John Smith',
    role: 'CTO',
    bio: 'John is a tech visionary with a passion for developing innovative solutions.',
  },
];

const AboutPage = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography paragraph>
        Our job portal connects talented individuals with their dream jobs and helps companies find the stars of tomorrow. We believe in creating opportunities and fostering growth. Our mission is to empower job seekers and employers through innovative technology and a supportive community.
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Meet the Team
      </Typography>
      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CustomCard title={member.name}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutPage;
