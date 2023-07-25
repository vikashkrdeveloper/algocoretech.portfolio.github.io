let valid = 0;
let validwrite = document.getElementById('message-box');
cross.addEventListener('click', () => {
    alertbox.style.display = "none";

})
let username = document.getElementById('name');
let email = document.getElementById('email');
let mobileno = document.getElementById('phone');
let message = document.getElementById('textarea-box');
function validate() {


    if (username.value == "") {
        valid = 0;
        if (valid == 0) {
            let alertbox = document.getElementById('alertbox');
            alertbox.style.backgroundColor = "red";
            validwrite.innerHTML = "ERROR! Your name is empty";
            alertbox.style.display = "block";
        }
    }
    else if (email.value == "") {
        valid = 0;
        if (valid == 0) {
            let alertbox = document.getElementById('alertbox');
            alertbox.style.backgroundColor = "red";
            validwrite.innerHTML = "ERROR! Your email is empty";
            alertbox.style.display = "block";
        }
    }
    else if (mobileno.value == "") {
        valid = 0;
        if (valid == 0) {
            let alertbox = document.getElementById('alertbox');
            alertbox.style.backgroundColor = "red";
            validwrite.innerHTML = "ERROR! Your mobile number is empty";
            alertbox.style.display = "block";
        }
    }
    else if (mobileno.value.length < 10) {
        valid = 0;
        if (valid == 0) {
            let alertbox = document.getElementById('alertbox');
            alertbox.style.backgroundColor = "red";
            validwrite.innerHTML = "ERROR! Pleased enter valid mobile number";
            alertbox.style.display = "block";
        }
    }

    else {
        valid = 1;
    }


    if (valid == 1) {
        let alertbox = document.getElementById('alertbox');
        alertbox.style.backgroundColor = "green";
        validwrite.innerHTML = "SECCESS! Your message request send";
        alertbox.style.display = "block";
    }
    if (valid == 1) {
        return true;
    }
    else {
        return false;
    }
}