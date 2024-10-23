function loadFunctions() {
    setNameAndDate();
    getTasks();
}

function setNameAndDate() {
    let name = document.getElementById("welcome-name");
    let date = document.getElementById("date");
    // get the current user from local storage
    let email = "";
    let temp = localStorage.getItem("current_user");
    // if statement only useful for local running, as local 
    // storage doesn't work - can adapt to make sure that
    // a user is logged in, otherwise redirect to index page
    if (temp == null) {
        console.log("hello");
        email = "abhay@make-it-all.co.uk"
    } else {
        email = temp;
    }
    name.innerHTML = email.substring(0,email.indexOf("@"));
    date.innerHTML = new Date().toLocaleDateString("en-GB");
}

function getTasks() {
    // get tasks as json string from local storage
    let taskString = localStorage.getItem("user"); // CHANGE TO BE DYNAMIC
    // parse tasks to get json response
    let tasks = JSON.parse(taskString);

    // get the div where the tasks will be shown
    tasks = document.getElementById("tasks");

    // array for the colors of importance:
    let importanceColors = {1:"red", 2:"yellow", 3:"green"};

    tasks.forEach((task,index) => {
        tasks.innerHTMl += `
        <div class="todo-task-importance">
            <div class="todo-task-importance-inner" id="importance1" style="${importanceColors[task.importance]}"></div>
        </div>
        <div class="todo-task-title">${task.title}</div>
        <div class="todo-task-date">${task.due}</div>
        `
    })
}