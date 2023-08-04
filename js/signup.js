
var userName = document.getElementById("userName");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("userPassword");
var signUpButton = document.getElementById("signUp");
var userData = [];
var nameList = [];
var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var regexname = /^[A-Za-z]{3,10}$/
// check localstorage
if (localStorage.getItem("userlist") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userlist"));
}
function setToLocalStorage() {
  window.localStorage.setItem("userlist", JSON.stringify(userData));
}
// Function sign Up
function signUp(){
  var user = {
    userName: userName.value,
    userEmail: userEmail.value,
    userPassword: userPassword.value,
  };
// check sign up is true or false
  if (SignUpValid()) {
    userData.push(user);
    setToLocalStorage();
    clearcode();
    document.getElementById("success").innerText = "Success";
    document.getElementById("success").classList.replace("red", "green");
  }
}
//  Function clear code
function clearcode() {
  userName.value = "";
  email.value = "";
  userPassword.value = "";
}
// click in button sign Up
signUpButton.addEventListener('click' , function(){
  signUp();
})
// Function input is Emplyo  
function isInputEmpty() {
  if (
    userName.value == "" || userEmail.value == "" || userPassword.value == "")
    {
    document.getElementById("success").innerHTML = "All inputs are required";
    document.getElementById("success").classList.replace("green", "red");
    return true;
  }
}
// Function is Email is already Exists

function isEmailRepeated() {
  for (var i = 0; i < userData.length; i++) {
    if (userData[i].userEmail.includes(userEmail.value)) {
      document.getElementById("success").innerHTML = "Email already exists";
      document.getElementById("success").classList.replace("green", "red");
      return false;
    }
  }
}
// Function is All Input Valid

function isallinputValid() {
  if (regexEmail.test(userEmail.value) == false || regexname.test(userName.value) == false) {
    document.getElementById("success").innerHTML = "invalid Email";
    document.getElementById("success").classList.replace("green", "red");
    return true;
  }
}
// Function Sign Up is Valid
function SignUpValid() {
  if (isInputEmpty() !== true) {
    if (isallinputValid() !== true) {
      if (isEmailRepeated() !== true) {
        return true;
      }
    }
  }
}
