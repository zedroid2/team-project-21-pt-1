function onloadFunctions() {
    getProjects(); // Load projects when the page is loaded
}

function getProjects() {
    // Get projects from local storage
    let userEmail = localStorage.getItem("current_user");
    let user = userEmail.substring(0, userEmail.indexOf("@"));
    console.log("user:", user);
    let projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);

    // Get the HTML elements
    let projectsHTML = document.getElementById("projects");

    // Clear previous project list
    projectsHTML.innerHTML = ""; 

    // Check each project, if the user is a manager or team leader,
    // add the project to the list
    projects.forEach((project) => {
        console.log(project);
        if (project.leader == user || project.manager == user) {
            projectsHTML.innerHTML += `
                <li class="cursor-pointer" id="${project.name}" onclick="getTasks(event)">${project.name}</li>`;
        }
    });
}

function getTasks(event) {
    let element = event.target;
    let projectName = element.id;

    // Get project details
    let projectsLocal = JSON.parse(localStorage.getItem("projects"));
    let pindex = projectsLocal.findIndex(project => project.name == projectName);
    
    // Check if project exists
    if (pindex === -1) {
        console.error("Project not found");
        return;
    }

    // Set a current global project index for creating tasks
    localStorage.setItem("pindex", `${pindex}`);

    // Get the tasks for the project
    let project = projectsLocal[pindex];
    let tasks = project.tasks;

    // Get the tasks HTML element and clear it for new tasks
    let tasksHTML = document.getElementById("tasks");
    tasksHTML.innerHTML = ""; // Clear previous tasks

    // Clear task info and hide the placeholder
    let taskInfo = document.getElementById("task-info");
    taskInfo.innerHTML = ""; // Clear task info
    document.getElementById("detailed-task-placeholder").style.display = 'none'; // Hide placeholder

    // Check if tasks exist for the selected project
    if (tasks.length === 0) {
        tasksHTML.innerHTML = "<li>No tasks available for this project.</li>"; // Handle case where there are no tasks
        return;
    }

    // Iterate through tasks and render each one
    tasks.forEach((task, tindex) => {
        tasksHTML.innerHTML += `
            <li class="cursor-pointer" data-pindex="${pindex}" data-tindex="${tindex}" onclick="getTask(event)">
                ${task.title}
                <ul>
                    <li>Assigned To: ${task.assignee}</li>
                    <li>Importance: ${task.importance}</li>
                    <li>Due: ${task.due}</li>
                </ul>
            </li>`;
    });
}

function getTask(event) {
    let element = event.target.closest('li'); // Use closest to ensure we get the correct element if a nested element is clicked
    let pindex = element.dataset.pindex; // Use dataset to retrieve indices correctly
    let tindex = element.dataset.tindex;

    // Get the task information
    let projects = JSON.parse(localStorage.getItem("projects"));
    
    if (pindex >= projects.length || tindex >= projects[pindex].tasks.length) {
        console.error("Invalid project or task index");
        return;
    }

    let task = projects[pindex].tasks[tindex];

    // Get the HTML tag to add data to
    let taskInfo = document.getElementById("task-info");

    // Clear task info and hide the placeholder
    taskInfo.innerHTML = "";
    document.getElementById("detailed-task-placeholder").style.display = 'none';

    // New task info with updated layout including Importance
    taskInfo.innerHTML = `
        <div class="task-details">
            <h2 class="task-title">${task.title}</h2>
            <h3 class="task-assignee">Assigned To: ${task.assignee}</h3>
            <p class="task-description">${task.description}</p>
            <p class="task-importance">Importance: ${task.importance}</p>
            <p class="task-due">Due: ${task.due}</p>
        </div>
    `;
}

function createProject() {
    // Get project name and leader name
    let pname = document.getElementById("project-name").value;
    let leaderName = document.getElementById("leader-name").value;

    // Get current user as manager
    let currentUserEmail = localStorage.getItem("current_user");
    let user = currentUserEmail.substring(0, currentUserEmail.indexOf("@"));

    // Get projects to append to
    let projects = JSON.parse(localStorage.getItem("projects"));
    let newProject = {
        name: pname,
        manager: user,
        leader: leaderName,
        tasks: []
    }

    projects.push(newProject);
    localStorage.setItem("projects", JSON.stringify(projects));
    location.reload();
}

function createTaskForProject() {
    // Get project index
    let pindex = Number(localStorage.getItem("pindex"));

    // Get current user
    let userEmail = localStorage.getItem("current_user");
    let user = userEmail.substring(0, userEmail.indexOf("@"));

    // Get all the details
    let title = document.getElementById("title").value;
    let assignee = document.getElementById("assignee").value;
    let importance = Number(document.getElementById("importance").value);
    let description = document.getElementById("description").value;
    let due = document.getElementById("date").value;

    // Get tasks
    let projects = JSON.parse(localStorage.getItem("projects"));
    let newTask = {
        title: title,
        assignee: assignee,
        importance: importance,
        due: due,
        description: description,
        assigner: user,
        active: true
    }
    projects[pindex].tasks.push(newTask);
    localStorage.setItem("projects", JSON.stringify(projects));
    location.reload();
}
