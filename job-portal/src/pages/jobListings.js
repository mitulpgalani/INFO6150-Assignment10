import React, {useEffect, useState} from 'react';
import { Box, Grid, Typography, Button, CardContent, CardActions } from '@mui/material';
import CustomCard from '../components/cards/cards';
import axios from 'axios';

const JobListingsPage = () => {

  const [jobDetails, setJobDetails] = useState([]);
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/get/jobs');
        setJobDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      }
    };

    fetchJobDetails();
  }, []);


  return (
    <Box sx={{ flexGrow: 1, m: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Job Listings
      </Typography>
      <Grid container spacing={4}>
        {jobDetails.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}> 
            <CustomCard elevation={3}> 
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {job.jobTitle}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  {job.companyName}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {job.description}  
                </Typography>
                <Typography variant="body2" color="primary" gutterBottom>
                  Salary: ${job.salary}  
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" href={job.applyLink} target="_blank">
                  Apply Now
                </Button>
              </CardActions>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JobListingsPage;
