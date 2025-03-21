function netSalaryCalculator(basicSalary, benefits) {
    // Calculate Gross Salary
    let grossSalary = basicSalary + benefits;

    //  Calculate deductions
    let paye = 0.3 * grossSalary;  
    let nhif = 0.015 * grossSalary;
    let nssf = 0.06 * grossSalary;

    // Net Salary Calculation
    let netSalary = grossSalary - (paye + nhif + nssf);

    // Output results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE: ${paye}`);
    console.log(`NHIF: ${nhif}`);
    console.log(`NSSF: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Example Test
netSalaryCalculator(50000, 10000);
