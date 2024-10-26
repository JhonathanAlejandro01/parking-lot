import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ParkingLot } from '@/components/ParkingLot';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <ParkingLot/>
      </Box>
    </Container>
  );
}
