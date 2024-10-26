import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import { parkingLogic } from '@/utils/parkingLogic';
import { CarType } from '@/lib/types';
import { Car } from './Car';
import { ParkingResults } from './ParkingResults';
import InputField from './InputField';

const sampleInput = `
2

6
19
17
13
1
99
1
3
20
16

7
20
99
4
15
`;

export const ParkingLot = () => {
  const cars:CarType[][] = parkingLogic(sampleInput);
  
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        columns={10}
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
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Car numberCar={index}/>
        </Grid>
        ))}
      </Grid>
      <ParkingResults datasets={cars} />
      <InputField/>
    </Box>
  )
}
