/*----------Account_functionality---------------*/
const login = document.getElementById("log");  //signupbutton
const signup = document.getElementById("sign");  //loginbutton
const sign_container = document.getElementById("signbox"); //signupcontainer
const log_container = document.getElementById("loginbox"); //logincontainer

login.addEventListener("click",()=>{
  console.log("signup button clicked");
  sign_container.classList.toggle("hidden");
  log_container.classList.toggle("hidden");
})

signup.addEventListener("click",()=>{
  console.log("Login button clicked");
  log_container.classList.toggle("hidden");
  sign_container.classList.toggle("hidden");
})

//--------------NavBar_Functionality---------------//