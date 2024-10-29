const emails = {
    "abhay@make-it-all.co.uk":"#Abhay123",
    "charlie@make-it-all.co.uk":"#Charlie123",
    "christo@make-it-all.co.uk":"#Christo123",
    "dragos@make-it-all.co.uk":"#Dragos123",
    "jevan@make-it-all.co.uk":"#Jevan123",
    "kieran@make-it-all.co.uk":"#Kieran123",
    "nishad@make-it-all.co.uk":"#Nishad123"
};
localStorage.setItem("abhay@make-it-all.co.uk", JSON.stringify(["#Abhay123", "Employee"]));
localStorage.setItem("charlie@make-it-all.co.uk", JSON.stringify(["#Charlie123", "Leader"]))
localStorage.setItem("christo@make-it-all.co.uk", JSON.stringify(["#Christo123", "Employee"]));
localStorage.setItem("dragos@make-it-all.co.uk", JSON.stringify(["#Dragos123", "Manager"]));
localStorage.setItem("jevan@make-it-all.co.uk", JSON.stringify(["#Jevan123", "Employee"]))
localStorage.setItem("kieran@make-it-all.co.uk", JSON.stringify(["#Kieran123", "Manager"]));
localStorage.setItem("nishad@make-it-all.co.uk", JSON.stringify(["#Nishad123", "Employee"]));

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
        // make the password visible
        document.getElementById("password-container").style.display = "block";
    }
}

function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(emails[email]);
    console.log(emails);
    console.log(password);
    if (emails[email] === password) {
        localStorage.setItem("current_user", email);
        console.log(localStorage.getItem("current_user"))
        window.location.href = ("/empDashboard.html");
    } else {
        console.log("incorrect login");
    }
}