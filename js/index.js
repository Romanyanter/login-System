var userName = document.getElementById("name");
var userEmail = document.querySelector("#email");
var userPassword = document.querySelector('#userPassword');
var loginMessage = document.querySelector('#loginMessage');
var loginPage = document.querySelector('#loginPage');
var loginButton = document.querySelector('#loginBtn');
var userData = JSON.parse(localStorage.getItem("userlist"));

function inputemploy(){
  if(userEmail.value == "" || userPassword.value == ""){
    loginMessage.innerHTML = "All inputs are requred";
    loginMessage.classList.replace('d-none' , 'd-block');
    return true;

  }else{
    loginMessage.classList.replace('d-block' , 'd-none');
    return false;
  }
}
// Function clear code
function clearcode(){
  userEmail.value = "";
  userPassword.value = "";
}
function inputisValid(){
  if(userData == null){
    loginMessage.classList.replace('d-none' , 'd-block');
    loginMessage.innerHTML = "Incorrect Email or Password";
  }
  if(userData !==null){
    for(var i = 0 ; i<userData.length ; i++ )
    {
      if(userData[i].userEmail.includes(userEmail.value)==true &&
      userData[i].userPassword.includes(userPassword.value)==true)
      {
        loginMessage.classList.remove('d-block' , 'd-none');
        loginPage.setAttribute("href" , "./Welcome.html");
        var index = userData.findIndex(Object =>{
          return Object.userEmail === userEmail.value;
        });
        var welcomeuser = userData[index].userName
        window.localStorage.setItem("uName" , JSON.stringify(welcomeuser));
        clearcode(); 
      }
      else if(userData[i].userEmail.includes(userEmail.value)==false || userData[i].userPassword.includes(userPassword.value)==false){
        loginMessage.classList.replace('d-none' , 'd-block');
        loginMessage.innerHTML = "success";
        loginMessage.classList.replace("red" , "green")

  
      }
    }
  
  }
}
function validlogin(){
  if(inputemploy()== false){
    inputisValid();
  }
}
loginButton.addEventListener('click', function(){
  validlogin();
})

