import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

export const StudentsGrid = ({ children }) => (
  <Box mt={4} mb={4}>
    <Grid container spacing={4}>
      {React.Children.map(children, child => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={uuidv4()}>
          {child}
        </Grid>
      ))}
    </Grid>
  </Box>
);
