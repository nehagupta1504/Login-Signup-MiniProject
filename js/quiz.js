var questions = document.getElementsByClassName("questions");
var submit = document.getElementById("submit");
let count = 0;

submit.addEventListener("click", () => {
  count = 0;
  for (let i = 1; i <= questions.length; i++) {
    // console.log(document.getElementById("ques" + i));
    let options = document.getElementsByName("q" + i);
    for (let j = 0; j < options.length; j++) {
      console.log(options[j].checked);
      if (
        (options[j].checked == true) &
        (options[j].getAttribute("data") == "true")
      ) {
        count++;
      }
    }
    localStorage.setItem("count", count);
    window.location.href = "../ans.html";
    // console.log(count);
    // document.getElementById("ans").style.display = "block";
    // console.log(document.getElementById("ans").style.display);
    // document.getElementById("ans").innerHTML = "Correct Answers : " + count;
    // document.getElementById("wrong").style.display = "block";
    // console.log(document.getElementById("ans").style.display);
    // document.getElementById("wrong").innerHTML =
    //   "Wrong Answers : " + (5 - count);
  }
});
