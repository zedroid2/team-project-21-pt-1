const emails = {
    "abhay@make-it-all.co.uk":"#Abhay123",
    "charlie@make-it-all.co.uk":"#Charlie123",
    "christo@make-it-all.co.uk":"#Christo123"
};
localStorage.setItem("abhay@make-it-all.co.uk", JSON.stringify(["#Abhay123", "Employee"]));
localStorage.setItem("charlie@make-it-all.co.uk", JSON.stringify(["#Charlie123", "Employee"]))
localStorage.setItem("christo@make-it-all.co.uk", JSON.stringify(["#Christo123", "Employee"]));

//to do tasks: Title, importance, description, 
let tasks1 = [
{
    title: "Task 1",
    importance: 1,
    description: "A detailed description of task 1 and its various requirements",
    due: "22/10/24",
    active: true,
    assigner: "Charlie Wyke"
},
{
    title: "Task 2",
    importance: 1,
    description: "A detailed description of task 2 and its various requirements",
    due: "26/10/24",
    active: true,
    assigner: "Charlie Wyke"
},
{
    title: "Task 3",
    importance: 2,
    description: "A detailed description of task 3 and its various requirements",
    due: "29/10/24",
    active: true,
    assigner: "Charlie Wyke"
},
{
    title: "Task 4",
    importance: 2,
    description: "A detailed description of task 4 and its various requirements",
    due: "02/11/24",
    active: true,
    assigner: "Charlie Wyke"
},
{
    title: "Task 5",
    importance: 3,
    description: "A detailed description of task 5 and its various requirements",
    due: "17/12/24",
    active: true,
    assigner: "Charlie Wyke"
},
{
    title: "Task 6",
    importance: 3,
    description: "A detailed description of task 6 and its various requirements",
    due: "26/10/24",
    active: true,
    assigner: "Charlie Wyke"
},
{
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
    title: "Task 9",
    importance: 1,
    description: "A detailed description of task 9 and its various requirements",
    due: "26/10/24",
    active: true,
    assigner: "Charlie Wyke"
},
{
    title: "Task 10",
    importance: 2,
    description: "A detailed description of task 10 and its various requirements",
    due: "29/10/24",
    active: true,
    assigner: "Charlie Wyke"
},
{
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
    title: "Task 13",
    importance: 3,
    description: "A detailed description of task 13 and its various requirements",
    due: "26/10/24",
    active: true,
    assigner: "Charlie Wyke"
},
{
    title: "Task 14",
    importance: 3,
    description: "A detailed description of task 14 and its various requirements",
    due: "26/10/24",
    active: true,
    assigner: "Charlie Wyke"
}
]
// assign tasks to local storage
localStorage.setItem("abhay", JSON.stringify(tasks1));


function submitEmail() {
// get email entered
let email = document.getElementById("email").value;

if (localStorage.getItem(email) != null) {
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