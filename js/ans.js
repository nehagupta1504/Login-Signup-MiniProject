window.onload = function getValue() {
  correctAnswers = localStorage.getItem("count");
  wrongAnswers = 5 - correctAnswers;
  document.getElementById("ans").innerHTML =
    "Correct Answers:" + correctAnswers;
  document.getElementById("wrong").innerHTML = "Wrong Answers:" + wrongAnswers;
};
