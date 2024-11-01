const emails = {
    "abhay@make-it-all.co.uk":"#Abhay123",
    "charlie@make-it-all.co.uk":"#Charlie123",
    "christo@make-it-all.co.uk":"#Christo123",
    "dragos@make-it-all.co.uk":"#Dragos123",
    "jevan@make-it-all.co.uk":"#Jevan123",
    "kieran@make-it-all.co.uk":"#Kieran123",
    "nishad@make-it-all.co.uk":"#Nishad123",
    "bob@make-it-all.co.uk":""
};
localStorage.setItem("abhay@make-it-all.co.uk", JSON.stringify(["#Abhay123", "Employee"]));
localStorage.setItem("charlie@make-it-all.co.uk", JSON.stringify(["#Charlie123", "Leader"]))
localStorage.setItem("christo@make-it-all.co.uk", JSON.stringify(["#Christo123", "Employee"]));
localStorage.setItem("dragos@make-it-all.co.uk", JSON.stringify(["#Dragos123", "Manager"]));
localStorage.setItem("jevan@make-it-all.co.uk", JSON.stringify(["#Jevan123", "Employee"]))
localStorage.setItem("kieran@make-it-all.co.uk", JSON.stringify(["#Kieran123", "Manager"]));
localStorage.setItem("nishad@make-it-all.co.uk", JSON.stringify(["#Nishad123", "Employee"]));
localStorage.setItem("bob@make-it-all.co.uk", JSON.stringify(["", "Employee"]));

//to do tasks: Title, importance, description, 
let tasks1 = [
{
assignee: "christo",
title: "Task A",
importance: 1,
description: "A detailed description of task 1 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 2",
importance: 1,
description: "A detailed description of task 2 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 3",
importance: 2,
description: "A detailed description of task 3 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "nishad",
title: "Task 4",
importance: 2,
description: "A detailed description of task 4 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 5",
importance: 3,
description: "A detailed description of task 5 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 6",
importance: 3,
description: "A detailed description of task 6 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 7",
importance: 3,
description: "A detailed description of task 7 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 8",
importance: 1,
description: "A detailed description of task 8 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 9",
importance: 1,
description: "A detailed description of task 9 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 10",
importance: 2,
description: "A detailed description of task 10 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 11",
importance: 2,
description: "A detailed description of task 11 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 12",
importance: 3,
description: "A detailed description of task 12 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 13",
importance: 3,
description: "A detailed description of task 13 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 14",
importance: 3,
description: "A detailed description of task 14 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
}
]

let tasks2 = [
{
assignee: "christo",
title: "Task B",
importance: 1,
description: "A detailed description of task 1 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 2",
importance: 1,
description: "A detailed description of task 2 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 3",
importance: 2,
description: "A detailed description of task 3 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "nishad",
title: "Task 4",
importance: 2,
description: "A detailed description of task 4 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 5",
importance: 3,
description: "A detailed description of task 5 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 6",
importance: 3,
description: "A detailed description of task 6 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 7",
importance: 3,
description: "A detailed description of task 7 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 8",
importance: 1,
description: "A detailed description of task 8 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 9",
importance: 1,
description: "A detailed description of task 9 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 10",
importance: 2,
description: "A detailed description of task 10 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 11",
importance: 2,
description: "A detailed description of task 11 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 12",
importance: 3,
description: "A detailed description of task 12 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 13",
importance: 3,
description: "A detailed description of task 13 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 14",
importance: 3,
description: "A detailed description of task 14 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
}
]

let tasks3 = [
{
assignee: "christo",
title: "Task C",
importance: 1,
description: "A detailed description of task 1 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 2",
importance: 1,
description: "A detailed description of task 2 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 3",
importance: 2,
description: "A detailed description of task 3 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "nishad",
title: "Task 4",
importance: 2,
description: "A detailed description of task 4 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 5",
importance: 3,
description: "A detailed description of task 5 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 6",
importance: 3,
description: "A detailed description of task 6 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 7",
importance: 3,
description: "A detailed description of task 7 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 8",
importance: 1,
description: "A detailed description of task 8 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 9",
importance: 1,
description: "A detailed description of task 9 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 10",
importance: 2,
description: "A detailed description of task 10 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 11",
importance: 2,
description: "A detailed description of task 11 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 12",
importance: 3,
description: "A detailed description of task 12 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 13",
importance: 3,
description: "A detailed description of task 13 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 14",
importance: 3,
description: "A detailed description of task 14 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
}
]

let tasks4 = [
{
assignee: "christo",
title: "Task D",
importance: 1,
description: "A detailed description of task 1 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 2",
importance: 1,
description: "A detailed description of task 2 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 3",
importance: 2,
description: "A detailed description of task 3 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "nishad",
title: "Task 4",
importance: 2,
description: "A detailed description of task 4 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 5",
importance: 3,
description: "A detailed description of task 5 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 6",
importance: 3,
description: "A detailed description of task 6 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 7",
importance: 3,
description: "A detailed description of task 7 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 8",
importance: 1,
description: "A detailed description of task 8 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 9",
importance: 1,
description: "A detailed description of task 9 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 10",
importance: 2,
description: "A detailed description of task 10 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 11",
importance: 2,
description: "A detailed description of task 11 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 12",
importance: 3,
description: "A detailed description of task 12 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 13",
importance: 3,
description: "A detailed description of task 13 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 14",
importance: 3,
description: "A detailed description of task 14 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
}
]

let tasks5 = [
{
assignee: "christo",
title: "Task E",
importance: 1,
description: "A detailed description of task 1 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 2",
importance: 1,
description: "A detailed description of task 2 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 3",
importance: 2,
description: "A detailed description of task 3 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "nishad",
title: "Task 4",
importance: 2,
description: "A detailed description of task 4 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 5",
importance: 3,
description: "A detailed description of task 5 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 6",
importance: 3,
description: "A detailed description of task 6 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 7",
importance: 3,
description: "A detailed description of task 7 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 8",
importance: 1,
description: "A detailed description of task 8 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 9",
importance: 1,
description: "A detailed description of task 9 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 10",
importance: 2,
description: "A detailed description of task 10 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 11",
importance: 2,
description: "A detailed description of task 11 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 12",
importance: 3,
description: "A detailed description of task 12 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 13",
importance: 3,
description: "A detailed description of task 13 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 14",
importance: 3,
description: "A detailed description of task 14 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
}
]

let tasks6 = [
{
assignee: "christo",
title: "Task F",
importance: 1,
description: "A detailed description of task 1 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 2",
importance: 1,
description: "A detailed description of task 2 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 3",
importance: 2,
description: "A detailed description of task 3 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "nishad",
title: "Task 4",
importance: 2,
description: "A detailed description of task 4 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 5",
importance: 3,
description: "A detailed description of task 5 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 6",
importance: 3,
description: "A detailed description of task 6 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 7",
importance: 3,
description: "A detailed description of task 7 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 8",
importance: 1,
description: "A detailed description of task 8 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 9",
importance: 1,
description: "A detailed description of task 9 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 10",
importance: 2,
description: "A detailed description of task 10 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 11",
importance: 2,
description: "A detailed description of task 11 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 12",
importance: 3,
description: "A detailed description of task 12 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 13",
importance: 3,
description: "A detailed description of task 13 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 14",
importance: 3,
description: "A detailed description of task 14 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
}
]

let tasks7 = [
{
assignee: "christo",
title: "Task G",
importance: 1,
description: "A detailed description of task 1 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 2",
importance: 1,
description: "A detailed description of task 2 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 3",
importance: 2,
description: "A detailed description of task 3 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "nishad",
title: "Task 4",
importance: 2,
description: "A detailed description of task 4 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 5",
importance: 3,
description: "A detailed description of task 5 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 6",
importance: 3,
description: "A detailed description of task 6 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 7",
importance: 3,
description: "A detailed description of task 7 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 8",
importance: 1,
description: "A detailed description of task 8 and its various requirements",
due: "22/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 9",
importance: 1,
description: "A detailed description of task 9 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 10",
importance: 2,
description: "A detailed description of task 10 and its various requirements",
due: "29/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "jevan",
title: "Task 11",
importance: 2,
description: "A detailed description of task 11 and its various requirements",
due: "02/11/24",
active: true,
assigner: "Charlie Wyke"
},
{
title: "Task 12",
importance: 3,
description: "A detailed description of task 12 and its various requirements",
due: "17/12/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "abhay",
title: "Task 13",
importance: 3,
description: "A detailed description of task 13 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
},
{
assignee: "christo",
title: "Task 14",
importance: 3,
description: "A detailed description of task 14 and its various requirements",
due: "26/10/24",
active: true,
assigner: "Charlie Wyke"
}
]


// projects setup
let projects = [
    {
    name: "project1",
    manager: "dragos",
    leader: "charlie",
    tasks: tasks1
    },
    {
    name: "project2",
    manager: "kieran",
    leader: "charlie",
    tasks: tasks2
    },
    {
    name: "project3",
    manager: "dragos",
    leader: "charlie",
    tasks: tasks3
    },
    {
    name: "project4",
    manager: "kieran",
    leader: "charlie",
    tasks: tasks4
    },
    {
    name: "project5",
    manager: "dragos",
    leader: "charlie",
    tasks: tasks5
    },
    {
    name: "project6",
    manager: "kieran",
    leader: "charlie",
    tasks: tasks6
    }
]


// assign projects to local storage

localStorage.setItem("projects", JSON.stringify(projects));

// assign tasks to local storage
/*localStorage.setItem("abhay", JSON.stringify(tasks1));
localStorage.setItem("charlie", JSON.stringify(tasks2));
localStorage.setItem("christo", JSON.stringify(tasks3));
localStorage.setItem("dragos", JSON.stringify(tasks4));
localStorage.setItem("jevan", JSON.stringify(tasks5));
localStorage.setItem("kieran", JSON.stringify(tasks6));
localStorage.setItem("nishad", JSON.stringify(tasks7));*/


function submitEmail() {
    // get email entered
    let email = document.getElementById("email").value;

    if (localStorage.getItem(email) != null) {
        document.getElementById("email").readOnly = true;

        // Check if the user has a password
        const userData = JSON.parse(localStorage.getItem(email));
        if (userData[0]) { // Check if the first element (password) is not empty
            // Make the password box visible for login
            document.getElementById("password-container").style.display = "block";
        } else {
            // Show onboarding fields for new password
            document.getElementById("onboarding-container").style.display = "block";
        }
        
        document.getElementById("email-submit").style.display = "none";

        // resets email container
        document.getElementById("email").style.borderColor = "";
        document.getElementById("email-error").innerText = "";
    } else {
        // Invalid email catch
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email-error").innerText = "Please provide a valid email.";
    }
}

function createPassword() {
    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const passwordMatchError = document.getElementById("password-match-error");

    // Password validation criteria
    const passwordCriteria = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // Clear previous error messages
    passwordMatchError.innerText = '';

    // Validate passwords
    if (newPassword !== confirmPassword) {
        passwordMatchError.innerText = "Passwords do not match.";
        document.getElementById("new-password").value = '';
        document.getElementById("confirm-password").value = '';
    } else if (!passwordCriteria.test(newPassword)) {
        passwordMatchError.innerText = "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.";
        document.getElementById("new-password").value = '';
        document.getElementById("confirm-password").value = '';
    } else {
        // Save the new password to localStorage
        localStorage.setItem(email, JSON.stringify([newPassword, "Employee"]));
        
        // Optionally, set the current user and redirect to the dashboard
        localStorage.setItem("current_user", email);
        window.location.replace("empDashboard.html");
    }
}

function togglePassword() {
    const passwordField = document.getElementById("password");
    const togglePwdButton = document.getElementById("togglePwd");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePwdButton.textContent = "🙈"; // Change icon if desired
    } else {
        passwordField.type = "password";
        togglePwdButton.textContent = "👁️";
    }
}

function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const passwordField = document.getElementById("password");

    if (emails[email] === password) {
        localStorage.setItem("current_user", email);
        window.location.replace("empDashboard.html");
    } else {
        // Incorrect password handling
        passwordField.value = ""; // Clear the input
        passwordField.placeholder = "Wrong Password";
        passwordField.classList.add("error"); // Apply the error class
        
        // Change the border color to red
        passwordField.style.border = "1px solid red"; // Set the border color to red
    }
}

// Reset the border color when the user starts typing
document.getElementById("password").addEventListener("input", function() {
    this.style.border = "1px solid #cccccc"; // Reset to default border color
});
