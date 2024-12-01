import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, CardActionArea } from '@mui/material';
import axios from 'axios';
import CustomCard from '../components/cards/cards'; // Update the import path as needed

const CompanyShowcasePage = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/company/getAllCompanies');
        setCompanies(response.data);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3, maxWidth: '100%' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Company Showcase Gallery
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={company.id}>
            <CustomCard sx={{ maxWidth: 345, m: 'auto' }}>
              <CardActionArea>
                <Box sx={{ 
                    backgroundImage: `url(http://localhost:8000/${company.imagePath})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '10px',
                    boxSizing: 'border-box',
                  }}>
                  <Typography variant="h6" component="h3" sx={{ color: '#fff', textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                    {company.name}
                  </Typography>
                </Box>
              </CardActionArea>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanyShowcasePage;