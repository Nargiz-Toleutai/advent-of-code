import * as fs from "fs";

// Read input from 'input.txt'
const input = fs.readFileSync("input.txt", "utf8");

// Grab input data from txt file and convert into an array of numbers
export const fuel: number[] = input.split(",").map(Number);

// calculates the fuel required for a module
export const calculateFuel = (mass: number): number => Math.floor(mass / 3) - 2;

// sums of the fuel requirements for all of the modules on spacecraft
export const sumOfFuelReq = (arr: number[]): number =>
  arr.reduce((acc, num) => acc + calculateFuel(num), 0);

// calculates the fuel requirements for each module separately
export const massOfFuel = (mass: number): number => {
  let total = 0;
  let currentValue = calculateFuel(mass);

  while (currentValue > 0) {
    total += currentValue;
    currentValue = calculateFuel(currentValue);
  }

  return total;
};

// calculates the sum of the total fuel requirements
export const totalSumOfMass = (mass: number[]): number =>
  mass.reduce((acc, num) => acc + massOfFuel(num), 0);

// Example usage
console.log("Sum of Fuel Requirements:", sumOfFuelReq(fuel));
console.log("Total Sum of Mass:", totalSumOfMass(fuel));
