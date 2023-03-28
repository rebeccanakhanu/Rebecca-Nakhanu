function generateStudentGrade(){
    const Marks=prompt("Input student marks (0-100):");
    if (Marks < 0 || Marks > 100) {
        return "Invalid marks input";
      }
      if (Marks >= 80) {
        grade = "A";
      } else if (Marks >= 60) {
        grade = "B";
      } else if (Marks >= 50) {
        grade = "C";
      } else if (Marks >= 40) {
        grade = "D";
      } else {
        grade = "E";
      }
      return grade;
    }




