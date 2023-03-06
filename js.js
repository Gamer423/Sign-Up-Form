function validate_password() {

let pass = document.getElementById("password").value;
let passc = document.getElementById("passwordc").value;

if (pass != passc) {
    alert("Passwords dont match");
}

}