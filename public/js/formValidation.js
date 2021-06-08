let email = document.getElementById("Email");
let error = document.getElementById("error");
let fullname = document.getElementById("fullname");
let fullnameerror = document.getElementById("name-error");
let loginemail = document.getElementById("loginemail");
let erroremail = document.getElementById("emailerror");
let password = document.getElementById("password");
let passerror = document.getElementById("passerror");
let confirmpwd = document.getElementById("confirmpwd");
let conpwderror = document.getElementById("confirm-pwd-error");
let pwd = document.getElementById("pwd");
let pwderror = document.getElementById("pwderror");
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3})?$/g;
    if(regexp.test(email.value)){
        error.innerHTML ="";
        error.style.color ="green";
        email.style.border="1px solid green";
        error.style.fontWeight ="thin";
        return true;
    }
    else if(email.value==""){
        error.innerHTML ="Please give your Email";
        error.style.color ="red";
        error.style.fontWeight ="thin";
        email.style.border ="1px solid red";
        return false;
    }
    else{
        error.innerHTML = "invalid Email";
        error.style.color ="red";
        error.style.fontWeight ="thin";
        email.style.border ="1px solid red";
        return false;
    }
}
function validateName(){
    var regexpname = /^([a-zA-Z ])?$/;
    if(regexpname.test(fullname.value)){
        fullname.style.border="1px solid green";
        fullnameerror.innerHTML="";
        return true;
    }
    else if(fullname.value==""){
        fullname.style.border="1px solid red";
        fullnameerror.innerHTML="Pls give your name";
        fullnameerror.style.color="red";
        fullnameerror.style.fontWeight="thin";
        return false;
    }
}

function validateemail(){
    let regexpemail =  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3})?$/g;
    if(regexpemail.test(loginemail.value)){
        erroremail.innerHTML ="";
        loginemail.style.border="1px solid green";
        return true;
    }
    else if(loginemail.value==""){
        erroremail.innerHTML ="Please give your Email";
        erroremail.style.color ="red";
        loginemail.style.border ="1px solid red";
        return false;
    }
    else{
        erroremail.innerHTML ="Invalid Email";
        erroremail.style.color ="red";
        loginemail.style.border ="1px solid red";
        return false;
    }
}
function validatepassword(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{3,}).*", "g");
    if(password.value== ""){
        passerror.innerHTML ="Type password";
        password.style.border="1px solid red";
        passerror.style.color="red";   
    }
   else if(false == enoughRegex.test(password.value)){
     passerror.innerHTML="Too Short";
     passerror.style.color="black";
     password.style.border="2px solid black";
   }
   else if(strongRegex.test(password.value)){
       passerror.innerHTML="Strong";
       passerror.style.color="green";
       password.style.border="2px solid green"
       return true;
   }
   else if(mediumRegex.test(password.value)){
       passerror.innerHTML="Medium";
       passerror.style.color="orange";
       password.style.border="2px solid orange";
       return false;
   }
   else{
       passerror.innerHTML="Poor";
       passerror.style.color="red";
       password.style.border="2px solid red";
       return false;
   }
   
    
}
function validateconfirmpwd(){
    if(password.value==confirmpwd.value){
        return true;
    }
    else if(confirmpwd.value==""){
        conpwderror.innerHTML="Please confirm your Password ";
        confirmpwd.style.border="1px solid red";
        conpwderror.style.color="red";
    }
    else{
        conpwderror.innerHTML="Password doesn't match";
        conpwderror.style.color="red";
        confirmpwd.style.border="2px solid red";
        return false;
    }
}
function validatepass(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$", "g");
    if(strongRegex.test(pwd.value)){
        return true;
    }
     if(pwd.value==""){
        pwderror.innerHTML="Type Password";
        pwd.style.border="1px solid red";
        pwderror.style.color="red";
        return false;
    }
    else{
        pwderror.innerHTML="Invalid Password";
        pwderror.style.color="red";
        pwd.style.border="1px solid red";
        return false;
    }
}
