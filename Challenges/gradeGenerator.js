function generateGrade(marks) {
    // Check if the input marks are valid
    if (marks < 0 || marks > 100) {
      console.log("Please enter marks between 0 and 100."); // Marks must be within the correct range
      return; // Stop the function if marks are invalid
    }
  
   
    if (marks > 79) {
      console.log("Grade: A"); // A for marks above 79
    } else if (marks >= 60) {
      console.log("Grade: B"); // B for marks between 60 and 79
    } else if (marks >= 50) {
      console.log("Grade: C"); // C for marks between 50 and 59
    } else if (marks >= 40) {
      console.log("Grade: D"); // D for marks between 40 and 49
    } else {
      console.log("Grade: E"); // E for marks less than 40
    }
  }
  generateGrade(85); // Example:  prints "Grade: A"
 