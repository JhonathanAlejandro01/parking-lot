import React from 'react'
import { Badge } from '@mui/material'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

type CarProps ={
    numberCar: number;
  }

export const Car = ({ numberCar }: CarProps) => {
  return (
    <Badge 
        badgeContent={numberCar} 
        color="secondary"
        >
        <DirectionsCarFilledIcon
            color="action"
            fontSize="large"
        />
    </Badge>
  )
}
