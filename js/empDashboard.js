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
    let currentUser = localStorage.getItem("current_user");
    console.log
    let taskString = localStorage.getItem(currentUser.substring(0,currentUser.indexOf("@"))); // CHANGE TO BE DYNAMIC
    // parse tasks to get json response
    let tasks = JSON.parse(taskString);

    // get the div where the tasks will be shown
    let tasksHTML = document.getElementById("tasks");

    // array for the colors of importance:
    let importanceColors = {1:"red", 2:"yellow", 3:"green"};

    console.log(tasks);
    // remove all innerhtml to avoid misuse
    tasksHTML.innerHTML = "";

    tasks.forEach((task,index) => {
        // detect overflow and add see more tasks button
        // need to compare #tasks height(which has a predetermined)
        // height of 0, to #todo-tasks wrapper
        let tasksHeight = tasksHTML.clientHeight;
        let todoTasksHeight = document.getElementById("todo-tasks").clientHeight;
        console.log("tasksHeight: " + tasksHeight + ", todoTasksHeight: " + todoTasksHeight);
        // make sure the task is not yet completed too
        if (tasksHeight+40 < todoTasksHeight*0.8 && task.active == true) {
            console.log(index);
            tasksHTML.innerHTML += `
            <div class="task" id="task${index}" onclick="taskClick(event)">
                <div class="todo-task-importance">
                    <div class="todo-task-importance-inner" id="importance1" style="${importanceColors[task.importance]}"></div>
                </div>
                <div class="todo-task-title">${task.title}</div>
                <div class="todo-task-date">${task.due}</div>
            </div>
            ` 
        } else {
            //else create see more tasks
            console.log("else activated");
            document.getElementById("see-more-tasks").innerHTML = "See More Tasks";
        }
        
    })
}


function taskClick(event) {
    let task = event.target.parentElement;
    console.log(task);
    // Displaying info to the right of the task list
    let detailedTask = document.getElementById("detailed-task");
    // clear the placeholder text:
  let temp = document.getElementById("detailed-task-placeholder");
  console.log(temp);
    document.getElementById("detailed-task-placeholder").style.display = "none";

    // make the detailed info visible:
    document.getElementById("detailed-task-inner").display = "block";

    // get all the elements to change
    /*let title = document.getElementById("detailed-task-title");
    let description = document.getElementById("detailed-task-description");
    let due = document.getElementById("detailed-task-due");
    let status = document.getElementById("detailed-task-status");
    let assigner = document.getElementById("detailed-task-aligner");
    let completed = document.getElementById("detailed-task-complete");
*/
    // get individual task details:
    let taskIndex = parseInt(task.id.substring(4))
    // * get the tasks from local storage
    let currentUser = localStorage.getItem("current_user");
    let tasks = JSON.parse(localStorage.getItem(currentUser.substring(0,currentUser.indexOf("@"))));
    let wantedTask = tasks[taskIndex];
    console.log(wantedTask);

    document.getElementById("detailed-task-inner").innerHTML = `
    <div id="detailed-task-inner">
        <div id="detailed-task-title">${wantedTask.title}</div>
        <div id="detailed-task-description">${wantedTask.description}</div>
        <div id="detailed-task-due">Due : <span>${wantedTask.due}</span></div>
        <div id="detailed-task-status">Status : <span>${wantedTask.active}</span></div>
        <div id="detailed-task-assigner">Assigner : <span>${wantedTask.assigner}</span></div>
        <div class="detailed-task-complete" id="detailed-task-complete${taskIndex}" onclick="taskCompleted(event)">Completed?</div>
    </div>
    `

    /*title.innerHTML = wantedTask.title;
    description.innerHTML = wantedTask.description;
    due.innerHTML = wantedTask.due;
    status.innerHTML = wantedTask.active;
    assigner.innerHTML = wantedTask.assigner;*/
}

function taskCompleted(event) {
    console.log(event.target);
    // make button green
    event.target.style.background = "green";
    // we want to set the task as completed so:
    let taskIndex = event.target.id.match(/(\d+)/)[0];
    let currentUser = localStorage.getItem("current_user");
    let tasks = JSON.parse(localStorage.getItem(currentUser.substring(0,currentUser.indexOf("@"))));
    console.log(taskIndex);
    // change the task active at the taskIndex:
    tasks[taskIndex].active = false;
    // set to local storage
    localStorage.setItem(currentUser.substring(0,currentUser.indexOf("@")), JSON.stringify(tasks));
    // window reload
    location.reload();
  
}