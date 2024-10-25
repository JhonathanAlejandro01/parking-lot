import { CarType } from "@/lib/types";

export const parkingLogic = (input: string): CarType[][] =>{
    const lines = input.trim().split('\n');
    let index = 0;
    const numDatasets = parseInt(lines[index++]);
    index++;
  
    const resultDatasets: CarType[][] = [];
  
    for (let dataset = 0; dataset < numDatasets; dataset++) {
      const waitingCars: CarType[] = [];
      
      while (index < lines.length && lines[index].trim() !== '99') {
        const pos = parseInt(lines[index++]);
        waitingCars.push({ originalPosition: pos, currentPosition: pos });
      }
      index++;
  
      const vacantPositions: number[] = [];
      while (index < lines.length && lines[index].trim() !== '') {
        const pos = parseInt(lines[index++]);
        vacantPositions.push(pos);
      }
      index++;
  
      for (const vacantPosition of vacantPositions) {
        let carAtVacantPos = waitingCars.find(
          (car) => car.currentPosition === vacantPosition && car.parkedPosition === undefined
        );
  
        if (carAtVacantPos) {
          carAtVacantPos.parkedPosition = vacantPosition;
          continue;
        } else {
          let minN = Infinity;
          let selectedCar: CarType | undefined;
  
          for (const car of waitingCars) {
            if (car.parkedPosition !== undefined) continue; 
            const N = (vacantPosition - car.currentPosition + 20) % 20;
            if (N < minN) {
              minN = N;
              selectedCar = car;
            }
          }
  
          if (selectedCar && minN !== Infinity) {
            selectedCar.parkedPosition = vacantPosition;
            for (const car of waitingCars) {
              if (car.parkedPosition === undefined && car !== selectedCar) {
                car.currentPosition = ((car.currentPosition + minN) % 20) || 20;
              }
            }
          }
        }
      }
      resultDatasets.push(waitingCars);
    }
  
    return resultDatasets;
};