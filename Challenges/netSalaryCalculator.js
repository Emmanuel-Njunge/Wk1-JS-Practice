function generateGrade(marks) {
    // If marks are greater than 79, return grade "A"
    if (marks > 79) return "A"; 
    
    // If marks are between 60 and 79, return grade "B"
    else if (marks >= 60) return "B"; 
    
    // If marks are between 50 and 59, return grade "C"
    else if (marks >= 50) return "C"; 
    
    // If marks are between 40 and 49, return grade "D"
    else if (marks >= 40) return "D"; 
    
    // If marks are less than 40, return grade "E"
    else return "E"; 
}

// Test the function
console.log(generateGrade(76)); // Output: "B"
