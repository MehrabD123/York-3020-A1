function GradeConvert(){
  var LetterGrade;

  Grade = document.getElementById("Grade").value;

  if (!Grade) {
    LetterGrade = "Please Enter A Valid Number";
  }


  else if(Grade < 40){
    LetterGrade = "F";
  }else if (Grade < 50) {
    LetterGrade = "E";
  }else if(Grade < 55){
    LetterGrade = "D";
  }else if (Grade < 60) {
    LetterGrade = "D+";
  }else if (Grade < 65) {
    LetterGrade = "C";
  }else if (Grade < 70) {
    LetterGrade = "C+";
  }else if (Grade < 75) {
    LetterGrade = "B";
  }else if (Grade < 80) {
    LetterGrade = "B+";
  }else if (Grade < 90){
    LetterGrade = "A";
  }else if (Grade < 101){
    LetterGrade = "A+";
  }else{
    LetterGrade = "Please Enter A Valid Number";
  }
  document.getElementById("demo").innerHTML = LetterGrade;
}
