import {
  calculateFuel,
  sumOfFuelReq,
  massOfFuel,
  totalSumOfMass,
  fuel,
} from "./challenge";

describe("Fuel Calculation Functions", () => {
  test("calculateFuel returns the fuel for given mass", () => {
    expect(calculateFuel(12)).toBe(2);
    expect(calculateFuel(14)).toBe(2);
    expect(calculateFuel(1969)).toBe(654);
    expect(calculateFuel(100756)).toBe(33583);
  });

  test("sumOfFuelReq returns the sum of fuel requirements", () => {
    const result = sumOfFuelReq(fuel);
    expect(result).toBe(3317970);
  });

  test("massOfFuel returns the  mass for each module separately", () => {
    expect(massOfFuel(14)).toBe(2);
    expect(massOfFuel(1969)).toBe(966);
    expect(massOfFuel(100756)).toBe(50346);
  });

  test("totalSumOfMass returns the sum of the total fuel requirements", () => {
    const result = totalSumOfMass(fuel);
    expect(result).toBe(4974073);
  });
});
