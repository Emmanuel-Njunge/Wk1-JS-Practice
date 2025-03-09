function generateGrade(marks) {
    // Check if marks are greater than 79, assign grade "A"
    if (marks > 79) return "A"; 
    
    // Check if marks are between 60 and 79 , assign grade "B"
    else if (marks >= 60) return "B"; 
    
    // Check if marks are between 50 and 59 , assign grade "C"
    else if (marks >= 49) return "C"; 
    
    // Check if marks are between 40 and 49 , assign grade "D