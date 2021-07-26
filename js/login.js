const reset = document.getElementById("reset");
function myFunction() {
  let username = document.regForm.username.value;
  let password = document.regForm.password.value;
  var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;
  if (username.includes("@") == false || username.length < 3) {
    document.getElementById("error-username").style.visibility = "visible";
    document.getElementById("error-username").innerHTML =
      "Username should contain @ & atleast of length 3";
  } else {
    document.getElementById("error-username").style.visibility = "hidden";
  }
  if (password.length < 4) {
    document.getElementById("error-password").style.visibility = "visible";
    document.getElementById("error-password").innerHTML =
      "Password should be of length greater than 3";
    return false;
  } else {
    document.getElementById("error-password").style.visibility = "hidden";
  }
  if (password.search(/[A-Z]/) < 0 || password.search(/[!@#$%^&]/) < 0) {
    document.getElementById("error-password").style.visibility = "visible";
    document.getElementById("error-password").innerHTML =
      "Password should conatin atleast 1 special character & 1 Uppercase character";
    return false;
  } else {
    document.getElementById("error-password").style.visibility = "hidden";
  }
  return true;
  // document.getElementById("try").innerHTML = username + password;
}

reset.addEventListener("click", () => {
  console.log("in");
  document.getElementById("error-username").style.visibility = "hidden";
  document.getElementById("error-password").style.visibility = "hidden";
});
