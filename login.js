function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
        document.getElementById("result").innerHTML = "Please fill in all fields";
        return false;
    }
    else if (username == "Chudiponggol" && password == "Chudiponggol041503") {
        window.location.href = "verified.html";
        return true;
    }
    else {
        document.getElementById("result").innerHTML = "Incorrect username or password";
        return false;
    }
}
