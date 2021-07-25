const signUpBtn = document.getElementById("signup");

function signUp() {
  console.log("enter");
  let name = document.signUpForm.name.value;
  let email = document.signUpForm.email.value;
  let contact = document.signUpForm.contact.value;
  let password = document.signUpForm.password.value;
  if (name.length < 2) {
    let nameSpan = document.getElementById("error-name");
    nameSpan.style.visibility = "visible";
    nameSpan.textContent = "Name should be atleast of 2 characters";
    return false;
  } else {
    let nameSpan = document.getElementById("error-name");
    nameSpan.style.visibility = "hidden";
  }
  if (email.includes("@") == false || email.length < 10) {
    let emailSpan = document.getElementById("error-email");
    emailSpan.style.visibility = "visible";
    emailSpan.textContent = "Enter a valid email";
    return false;
  } else {
    let emailSpan = document.getElementById("error-email");
    emailSpan.style.visibility = "hidden";
  }
  var phoneno = /^\d{10}$/;
  if (contact.length < 10 || contact.length > 13 || !contact.match(phoneno)) {
    let mobSpan = document.getElementById("error-contact");
    mobSpan.style.visibility = "visible";
    mobSpan.textContent = "Enter a valid contact number";
    return false;
  } else {
    let mobSpan = document.getElementById("error-contact");
    mobSpan.style.visibility = "hidden";
  }

  if (password.search(/[A-Z]/) < 0 || password.search(/[!@#$%^&]/) < 0) {
    let passSpan = document.getElementById("error-password");
    passSpan.style.visibility = "visible";
    passSpan.textContent =
      "Password should conatin atleast 1 special character & 1 Uppercase character";
    return false;
  } else {
    let passSpan = document.getElementById("error-password");
    passSpan.style.visibility = "visible";
  }
  if (password.length < 4) {
    let passSpan = document.getElementById("error-password");
    passSpan.style.visibility = "visible";
    passSpan.textContent = "Password should be atleast of 4 characters";
    return false;
  } else {
    let passSpan = document.getElementById("error-password");
    passSpan.style.visibility = "visible";
  }
  return true;
}
