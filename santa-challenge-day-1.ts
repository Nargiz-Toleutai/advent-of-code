import * as fs from "fs";

// Read input from 'input.txt'
const input = fs.readFileSync("input.txt", "utf8");

// Grab input data from txt file and convert into an array of numbers
const fuel: number[] = input.split(",").map(Number);

// calculates the fuel required for a module
const calculateFuel = (mass: number): number => Math.floor(mass / 3) - 2;

// sums of the fuel requirements for all of the modules on spacecraft
const sumOfFuelReq = (arr: number[]): number =>
  arr.reduce((acc, num) => acc + calculateFuel(num), 0);

// calculates the fuel requirements for each module separately
const massOfFuel = (mass: number): number => {
  let total = 0;
  let currentValue = calculateFuel(mass);

  while (currentValue > 0) {
    total += currentValue;
    currentValue = calculateFuel(currentValue);
  }

  return total;
};

// calculates the sum of the total fuel requirements
const totalSumOfMass = (mass: number[]): number =>
  mass.reduce((acc, num) => acc + massOfFuel(num), 0);
