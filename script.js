let confirmPassword = document.querySelector("#confirmPass");
let password = document.querySelector("#enterPass");


confirmPassword.addEventListener("input",()=>{
    if(password.value != confirmPassword.value){
        confirmPassword.style.cssText = "border: solid red";
        password.style.cssText = "border: solid red";
    }
    else{
        confirmPassword.style.cssText = "border: solid green";
        password.style.cssText = "border: solid green";
    }
})
password.addEventListener("input",()=>{
    if(password.value != confirmPassword.value){
        confirmPassword.style.cssText = "border: solid red";
        password.style.cssText = "border: solid red";
    }
    else{
        confirmPassword.style.cssText = "border: solid green";
        password.style.cssText = "border: solid green";
    }
})






