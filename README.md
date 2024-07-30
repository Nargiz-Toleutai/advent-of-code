## [Advent of code](https://adventofcode.com)

### Problem Solution for the First Challenge

The task was to calculate the total fuel required for Santa's spacecraft, considering both the mass of the spacecraft's modules and the additional fuel needed for the fuel itself. The solution was split into two main parts:

1. **Initial Fuel Calculation:**

   - For each module, the fuel required was calculated using the formula: `(mass / 3) - 2`, where the result was rounded down to the nearest whole number.
   - The total fuel requirement was then the sum of the fuel needed for all the modules.

2. **Fuel itself requires fuel just like a module:**
   - After calculating the initial fuel for each module, additional calculations were performed to account for the fuel needed to carry the fuel itself. This process involved repeatedly calculating the fuel for the fuel added, using the same formula, until the required additional fuel was zero or negative.

By iterating through these steps, the solution accounted for the recursive nature of the problem, ensuring that all necessary fuel amounts were calculated correctly. This approach led to determining both the initial and total fuel requirements, including all recursive fuel needs.
