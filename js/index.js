const emails = {
    "abhay@make-it-all.co.uk":"#Abhay123",
    "charlie@make-it-all.co.uk":"#Charlie123",
    "christo@make-it-all.co.uk":"#Christo123",
    "bob@make-it-all.co.uk":""
};
localStorage.setItem("abhay@make-it-all.co.uk", JSON.stringify(["#Abhay123", "Employee"]));
localStorage.setItem("charlie@make-it-all.co.uk", JSON.stringify(["#Charlie123", "Employee"]));
localStorage.setItem("christo@make-it-all.co.uk", JSON.stringify(["#Christo123", "Employee"]));
localStorage.setItem("dragos@make-it-all.co.uk", JSON.stringify(["#Dragos123", "Employee"]));
localStorage.setItem("jevan@make-it-all.co.uk", JSON.stringify(["#Jevan123", "Employee"]));
localStorage.setItem("nishad@make-it-all.co.uk", JSON.stringify(["#Nishad123", "Employee"]));
localStorage.setItem("kieran@make-it-all.co.uk", JSON.stringify(["#Kieran123", "Employee"]));
localStorage.setItem("bob@make-it-all.co.uk", JSON.stringify(["", "Employee"]));


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

let tasks2 = [
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

let tasks3 = [
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

let tasks4 = [
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

let tasks5 = [
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

let tasks6 = [
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

let tasks7 = [
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
localStorage.setItem("charlie", JSON.stringify(tasks2));
localStorage.setItem("christo", JSON.stringify(tasks3));
localStorage.setItem("dragos", JSON.stringify(tasks4));
localStorage.setItem("jevan", JSON.stringify(tasks5));
localStorage.setItem("kieran", JSON.stringify(tasks6));
localStorage.setItem("nishad", JSON.stringify(tasks7));


function submitEmail() {
    // get email entered
    let email = document.getElementById("email").value;

    if (localStorage.getItem(email) != null) {
        document.getElementById("email").readOnly = true;
      
        // make the password box visible
        document.getElementById("password-container").style.display = "block";
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



function togglePassword() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function login(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (emails[email] === password) {
      localStorage.setItem("current_user", email);
      window.location.replace("empDashboard.html");
  } else {
      // Incorrect password catch
      let passwordField = document.getElementById("password");
      passwordField.value = ""; // Clear the input
      passwordField.placeholder = "Wrong Password";
      passwordField.style.borderColor = "red";
      passwordField.classList.add("error"); // Add error class to apply red color
    
  }
}
