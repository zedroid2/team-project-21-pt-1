const emails = {
        "abhay@make-it-all.co.uk":"#Abhay123",
        "charlie@make-it-all.co.uk":"#Charlie123",
        "christo@make-it-all.co.uk":"#Christo123"
    };

function submitEmail() {
    // get email entered
    let email = document.getElementById("email").value;

    if (email in emails) {
        // make the password visible
        document.getElementById("password-container").style.display = "block";
    }
}

function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (emails[email] === password) {
        localStorage.setItem("current_user", email);
        console.log(localStorage.getItem("current_user"))
        window.location.replace("empDashboard.html");
    } else {
        console.log("incorrect login");
    }
}