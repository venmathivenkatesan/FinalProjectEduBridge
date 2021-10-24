/*function login() {
  let username = document.getElementById(username).value;
  let password = document.getElementById(password).value;
}
*/

function checkAlpha() {
  var usrName = document.getElementById("usrFname").value;
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
