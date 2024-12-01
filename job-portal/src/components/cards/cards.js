import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CustomCard = ({ title, children }) => (
  <Card style={{ maxWidth: 400, margin: 'auto', marginTop: '20vh' }}>
    <CardContent>
      {title && (
        <Typography variant="h5" component="h2" style={{ marginBottom: 20 }}>
          {title}
        </Typography>
      )}
      {children}
    </CardContent>
  </Card>
);

export default CustomCard;