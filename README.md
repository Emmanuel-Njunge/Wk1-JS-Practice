# Week 1 JavaScript Challenges

This repository contains JavaScript solutions for the Week 1 toy problems. Each challenge focuses on practicing fundamental programming concepts and solving real-world scenarios using JavaScript.

---

## **Challenges**

### **Challenge 1: Student Grade Generator (Toy Problem)**
- **Description**: Write a function that prompts the user to input student marks. The input should be between 0 and 100. The program should output the corresponding grade based on the following criteria:
  - `A`: Marks greater than 79.
  - `B`: Marks between 60 and 79.
  - `C`: Marks between 50 and 59.
  - `D`: Marks between 40 and 49.
  - `E`: Marks less than 40.
- **Purpose**: To practice working with conditionals and user input validation.
- **Usage**:
  - Input the marks via prompt or command-line input.
  - The program will output the correct grade.

---

### **Challenge 2: Speed Detector (Toy Problem)**
- **Description**: Write a program that takes the speed of a car as input and evaluates it based on the following rules:
  - If the speed is less than or equal to 70 km/h, it should print: `Ok`.
  - For every 5 km/h above the speed limit (70), the program should issue 1 demerit point and print the total demerit points.
  - If the driver accumulates more than 12 points, the program should print: `License suspended`.
- **Purpose**: To practice logical operations and control flow.
- **Usage**:
  - Input the car's speed.
  - The program will print either `Ok`, the demerit points, or `License suspended`.

---

### **Challenge 3: Net Salary Calculator (Toy Problem)**
- **Description**: Write a program that calculates an individual’s net salary by accepting inputs for basic salary and benefits. The program should compute the following deductions and outputs:
  - **PAYE (Pay As You Earn)**: Tax based on the Kenyan tax bands.
  - **NHIF Deductions**: Deduction based on the gross salary (or SHIF at 2.75% of gross salary for recent calculations).
  - **NSSF Deductions**: Deduction calculated as 6% of gross salary, capped at KSh 1,080.
  - **Gross Salary**: Sum of the basic salary and benefits.
  - **Net Salary**: Gross Salary minus all deductions.
- **Purpose**: To practice modular code, arithmetic operations, and handling real-world salary calculations.
- **Usage**:
  - Input the basic salary and benefits.
  - The program will output the gross salary, deductions, and net salary.

---

## **How to Run the Code**
1. Clone the repository:
   ```bash
   git clone <repository-link>
   cd <repository-name>
