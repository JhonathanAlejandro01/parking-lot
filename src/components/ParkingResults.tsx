import { CarType } from "@/lib/types";
import { Box, Divider } from "@mui/material";

export const ParkingResults = ({ datasets  }:{datasets:CarType[][]}) => {
    return (
        <Box>
        {datasets.map((cars, datasetIndex) => (
            <ul key={datasetIndex}>
            {cars.map((car, index) => (
                <li key={index}>
                {car.parkedPosition
                    ? `Original position ${car.originalPosition} parked in ${car.parkedPosition}`
                    : `Original position ${car.originalPosition} did not park`}
                </li>
            ))}
            {/* Añadir un espacio entre conjuntos de datos */}
            {datasetIndex < datasets.length - 1 && <Divider style={{ margin: '16px 0' }} />}
            </ul>
        ))}
    </Box>
    );
  };