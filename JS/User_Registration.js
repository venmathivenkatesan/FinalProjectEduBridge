"use strict";

function checkAlpha() {
  var usrName = document.getElementById("usrName").value;
  var min = 5;
  var max = 15;
  var letters = /^[A-Za-z]+$/;
  if (usrName == "") {
    alert("Name Should not blank");
  } else if (usrName.length < min || usrName.length >= max) {
    alert("Name should be in between " + min + " to " + max);
  } else if (!letters.test(usrName)) {
    alert("Only Lettrs Accepted");
  }
}

function verifyPassword() {
  var pw = document.getElementById("pswd").value;
  //check empty password field
  if (pw == "") {
    // document.getElementById("message").innerHTML =
    alert("**Fill the password please!");
    // return false;
  }

  //minimum password length validation
  else if (pswd.length < 8) {
    //document.getElementById("message").innerHTML =
    alert("**Password length must be atleast 8 characters");
    //return false;
  }

  //maximum length of password validation
  else if (pswd.length > 15) {
    //document.getElementById("message").innerHTML =
    alert("**Password length must not exceed 15 characters");
    //return false;
  } else {
    alert("Password is correct");
  }
}

function checkEmail() {
  var usrEmail = document.getElementById("usrEmail").value;
  var regularExp = /^\S+@\S+\.\S+$/;
  if (usrEmail == "") {
    alert("Email should not be blank");
  } else if (regularExp.test(usrEmail) === false) {
    alert("Enter Valid email");
  }
}
