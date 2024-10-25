import React from 'react'
import { Car } from './Car'
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';

export const ParkingLot = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        sx={{
          '--Grid-borderWidth': '3px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        {[...Array(40)].map((_, index) => (
          <Grid
            key={index}
            minHeight={80}
            size={{
              xs: 1.2,
            //   sm: 6,
            //   md: 4,
              lg: 1.2,
            }}
          >
            <Car numberCar={index}/>
        </Grid>
        ))}
      </Grid>
    </Box>
  )
}
