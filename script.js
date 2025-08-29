function calculateCGPA() {
  const grades = document.querySelectorAll('.grade');
  const credits = document.querySelectorAll('.credit');

  let totalGradePoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    const grade = parseFloat(grades[i].value);
    const credit = parseFloat(credits[i].value);

    if (isNaN(grade) || isNaN(credit)) {
      alert("Please enter valid numbers in all fields.");
      return;
    }

    totalGradePoints += grade * credit;
    totalCredits += credit;
  }

  if (totalCredits === 0) {
    alert("Total credits cannot be zero.");
    return;
  }

  const cgpa = (totalGradePoints / totalCredits).toFixed(2);
  document.getElementById('result').innerText = `Your CGPA is: ${cgpa}`;
}
