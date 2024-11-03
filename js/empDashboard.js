function loadFunctions() {
    setNameAndDate();
    getTasks();
    setManagerButton();
    setProfilePic();
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

function setProfilePic(){
  let currentUserEmail = localStorage.getItem("current_user");
  let currentUser = currentUserEmail.substring(0,currentUserEmail.indexOf("@"));
  
  let profilePicture = document.getElementById("profilePicture");
  profilePicture.src = `https://cdn.glitch.global/17b550eb-1a40-477b-b507-ee91e573d4c9/${currentUser}ProfilePic.jpg`;
  
}

function getTasks() {
    // get tasks as json string from local storage
    let currentUserEmail = localStorage.getItem("current_user");
    let currentUser = currentUserEmail.substring(0,currentUserEmail.indexOf("@"));
    console.log(currentUser);
  
    let projects = JSON.parse(localStorage.getItem("projects"));

    // get the div where the tasks will be shown
    let tasksHTML = document.getElementById("tasks");

    // array for the colors of importance:
    let importanceColors = {1:"red", 2:"yellow", 3:"green"};

    console.log(projects);
    // Reset the tasks HTML to include the headers
    tasksHTML.innerHTML = `
        <div class="task-headers">
            <div class="task-header">Title</div>
            <div class="task-header">Project</div>
            <div class="task-header">Assigned By</div>
            <div class="task-header">Due By</div>
        </div>
    `;
  
    let taskCount = 0;

    projects.forEach((project,pindex) => {
        project.tasks.forEach((task,tindex) => {
            // make sure the task is not yet completed too, and belongs to the current user
            if (task.signoff == false && task.assignee == currentUser) {
                console.log(tindex);
                // if completed but waiting manager signoff 
                console.log("active:" + task.active);
                let colorChange = ((task.active == true) ? "" : 'style="background-color:pink"')
                console.log(task.title + colorChange)
                tasksHTML.innerHTML += `
                <div ${colorChange} class="task" id="task${tindex}" data-project-index=${pindex} data-task-index=${tindex} onclick="taskClick(event)">
                      <div class="todo-task-title">${task.title}</div>
                        <div class="todo-task-project">${project.name}</div>
                        <div class="todo-task-assigner">${task.assigner}</div>
                        <div class="todo-task-date">${task.due}</div>
                </div>
                `;
                taskCount++;
            }
        })    
    })
  
   // If no tasks are assigned to the user, display a message
    if (taskCount === 0) {
        tasksHTML.innerHTML += `
            <div class="no-tasks">No tasks assigned to you.</div>
        `;
    }

    console.log("Total tasks displayed:", taskCount);
}



function taskClick(event) {
    let task = event.currentTarget;
    let detailedTask = document.getElementById("detailed-task");
    let detailedTaskInner = document.getElementById("detailed-task-inner");
    let placeholder = document.getElementById("detailed-task-placeholder");

    // Show the overlay
    detailedTask.classList.add("show");

    // Hide the placeholder and show task details
    placeholder.style.display = "none";
    detailedTaskInner.style.display = "block";

    let pindex = task.dataset.projectIndex;  // Get the project index
    let tindex = task.dataset.taskIndex;      // Get the task index
    let projects = JSON.parse(localStorage.getItem("projects"));
    let wantedTask = projects[pindex].tasks[tindex]; // Retrieve the correct task

    // Check if there is an unmet dependency
    let dependencyMessage = "";
    if (wantedTask.dependency !== null && wantedTask.dependency !== undefined) {
        let dependencyIndex = wantedTask.dependency;
        let dependencyTask = projects[pindex].tasks[dependencyIndex];
        
        // Check if the dependency is not complete
        if (dependencyTask && (dependencyTask.active !== false || dependencyTask.signoff !== true)) {
            dependencyMessage = `<div class="dependency-warning">${dependencyTask.assignee} needs to complete ${dependencyTask.title} before you can mark it as complete</div>`;
        }
    }

    // Populate the task details
    detailedTaskInner.innerHTML = `
        <button class="close-btn" id="closeBtn">&times;</button>
        <h2 id="detailed-task-title">${wantedTask.title}</h2>
        <div id="detailed-task-project">Project: <span>${projects[pindex].name}</span></div>
        <div id="detailed-task-assigner">Assigned by: <span>${wantedTask.assigner}</span></div>
        <div id="detailed-task-description">Description: <span>${wantedTask.description || "No description provided."}</span></div>
        <div id="detailed-task-importance">Importance: <span>${wantedTask.importance}</span></div>
        <div id="detailed-task-due">Due By: <span>${wantedTask.due}</span></div>
        ${dependencyMessage || `<div data-pindex="${pindex}" data-tindex="${tindex}" class="detailed-task-complete" 
             id="detailed-task-complete${tindex}" onclick="taskCompleted(event)">Mark as Done</div>`}
    `;

    // Add event listener to the close button
    document.getElementById('closeBtn').addEventListener('click', function() {
        detailedTask.classList.remove("show");
        placeholder.style.display = "block"; // Optionally show placeholder again
        detailedTaskInner.style.display = "none"; // Hide the task details
    });
}

function taskCompleted(event) {
    console.log(event.target);
    // make button green
    event.target.style.background = "green";
    // we want to set the task as completed so:
    let taskIndex = event.target.id.match(/(\d+)/)[0];
    let pindex = Number(event.target.dataset.pindex);
    let projects = JSON.parse(localStorage.getItem("projects"))
    console.log(taskIndex);
    // change the task active at the taskIndex:
    projects[pindex].tasks[taskIndex].active = false;
    // set to local storage
    localStorage.setItem("projects", JSON.stringify(projects));
    // window reload
    getTasks();
  
}

function setManagerButton() {
  // get current user details:
    let user = localStorage.getItem("current_user");
    let access = JSON.parse(localStorage.getItem(user));
    if (!(access[1] == "Manager" || access[1] == "Leader")) {
        console.log(access[1]);
        // get manager button element
        document.getElementById("manager-button").style.display = "none";
    }
}

function hideTaskDetail() {
    let detailedTask = document.getElementById("detailed-task");
    let detailedTaskInner = document.getElementById("detailed-task-inner");
    let placeholder = document.getElementById("detailed-task-placeholder");

    // Hide the overlay
    detailedTask.classList.remove("show");

    // Show the placeholder and hide task details
    placeholder.style.display = "block";
    detailedTaskInner.style.display = "none";
}

function toggleDropdown() {
  const dropdown = document.getElementById('project-dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  
  // Populate dropdown with project data from localStorage
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  dropdown.innerHTML = ""; // Clear existing content

  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = "project";
    projectDiv.textContent = project.name;
    projectDiv.onclick = () => displayProjectDetails(project, projectDiv);
    dropdown.appendChild(projectDiv);
  });
}

function displayProjectDetails(project, projectElement) {
    // Populate the popup with project details
    document.getElementById('popup-project-title').textContent = project.name;
    document.getElementById('popup-manager').textContent = project.manager;
    document.getElementById('popup-leader').textContent = project.leader;

    // Set unique employees
    const uniqueEmployees = new Set(project.tasks.map(task => task.assignee));
    document.getElementById('popup-employees').textContent = Array.from(uniqueEmployees).join(', ');

    // Get the project element's position
    const rect = projectElement.getBoundingClientRect();
    const popup = document.getElementById('project-popup');
    
    // Calculate position for popup to the right of the clicked project element
    const navbarWidth = 200;
    popup.style.left = `${rect.right + 20}px`;
    popup.style.top = `${rect.top + window.scrollY}px`;

    togglePopup(true);
}

function togglePopup(show) {
    const overlay = document.getElementById('project-popup-overlay');
    overlay.style.display = show ? 'flex' : 'none';
}




// Toggle visibility of the project history dropdown
function toggleProjectHistoryDropdown() {
    let dropdown = document.getElementById("project-history-dropdown");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}

// Populate the project history dropdown with projects that have completed and signed-off tasks
function populateProjectHistoryDropdown() {
    let currentUserEmail = localStorage.getItem("current_user");
    let currentUser = currentUserEmail.substring(0, currentUserEmail.indexOf("@"));
    let projects = JSON.parse(localStorage.getItem("projects"));
    
    let dropdown = document.getElementById("project-history-dropdown");
    dropdown.innerHTML = ""; // Clear any existing entries

    let hasHistory = false;

    projects.forEach((project, pindex) => {
        // Check if the project contains any tasks that meet the criteria
        let hasCompletedTasks = project.tasks.some(task => 
            task.active === false && 
            task.signoff === true && 
            task.assignee === currentUser
        );

        if (hasCompletedTasks) {
            hasHistory = true;

            // Add project to dropdown
            let projectItem = document.createElement("div");
            projectItem.className = "dropdown-item project"; // Added project class
            projectItem.innerText = project.name || `Project ${pindex + 1}`;
            projectItem.onclick = () => showCompletedTasks(pindex);
            dropdown.appendChild(projectItem);
        }
    });

    // If no history is found, show "No history" message
    if (!hasHistory) {
        let noHistoryItem = document.createElement("div");
        noHistoryItem.className = "dropdown-item";
        noHistoryItem.innerText = "No history";
        dropdown.appendChild(noHistoryItem);
    }
}

// Display completed tasks for the selected project
function showCompletedTasks(projectIndex) {
    let currentUserEmail = localStorage.getItem("current_user");
    let currentUser = currentUserEmail.substring(0, currentUserEmail.indexOf("@"));
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    let project = projects[projectIndex];
    
    let tasksHTML = document.getElementById("tasks");
    
    // Array for the colors of importance:
    let importanceColors = {1: "red", 2: "yellow", 3: "green"};

    // Reset the tasks HTML to include the headers
    tasksHTML.innerHTML = `
        <div class="task-headers">
            <div class="task-header">Title</div>
            <div class="task-header">Project</div>
            <div class="task-header">Assigned By</div>
            <div class="task-header">Due By</div>
        </div>
    `;

    let taskCount = 0;

    // Filter and display completed and signed-off tasks for the current user
    project.tasks.forEach((task, tindex) => {
        if (task.active === false && task.signoff === true && task.assignee === currentUser) {
            tasksHTML.innerHTML += `
                <div class="task" id="task${tindex}" 
                     data-project-index="${projectIndex}" 
                     data-task-index="${tindex}" 
                     style="background-color:pink" 
                     onclick="taskClick(event)">
                    <div class="todo-task-title">${task.title}</div>
                    <div class="todo-task-project">${project.name}</div>
                    <div class="todo-task-assigner">${task.assigner}</div>
                    <div class="todo-task-date">${task.due}</div>
                </div>
            `;
            taskCount++;
        }
    });

    // If no completed tasks are found, display a message
    if (taskCount === 0) {
        tasksHTML.innerHTML += `
            <div class="no-tasks">No completed tasks assigned to you.</div>
        `;
    }
    navigateToProjectHistory();
}

// Call this function when the page loads to populate the project history dropdown
populateProjectHistoryDropdown();

function navigateToTasks() {
    const header = document.getElementById("todo-header");
    const tasksScreen = document.getElementById("tasks");
    
    // Change the header to "Your To-Do List" when navigating to tasks
    header.querySelector('h1').innerText = "Your To-Do List";
    tasksScreen.scrollIntoView({ behavior: "smooth" });
}

function navigateToProjectHistory() {
    const header = document.getElementById("todo-header");
    
    // Change the header to "Project History" when navigating to project history
    header.querySelector('h1').innerText = "Project History";
    const projectHistoryScreen = document.getElementById("project-history-dropdown"); // Change this to the correct ID for the project history section
    projectHistoryScreen.scrollIntoView({ behavior: "smooth" });
}
