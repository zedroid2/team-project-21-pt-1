function onloadFunctions() {
  getProjects();
}

function getProjects() {
  // Get projects from local storage
  let userEmail = localStorage.getItem("current_user");
  let user = userEmail.substring(0, userEmail.indexOf("@"));
  console.log("user:" + user);
  let projects = JSON.parse(localStorage.getItem("projects"));
  console.log(projects);
  
  // Get the HTML elements
  let projectsHTML = document.getElementById("projects");
  
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
  let project = projectsLocal[pindex];
  
  // Set a current global project index for creating tasks
  localStorage.setItem("pindex", `${pindex}`);
  
  // Get the tasks for the project
  let tasks = project.tasks;
  
  // Get the tasks HTML element and clear it for new tasks
  let tasksHTML = document.getElementById("tasks");
  tasksHTML.innerHTML = "";

  // Iterate through tasks and render each one with importance
  tasks.forEach((task, tindex) => {
    tasksHTML.innerHTML += `
      <li class="cursor-pointer" id="${tindex}" data-pindex=${pindex} data-tindex=${tindex} onclick="getTask(event)">
        ${task.title}
        <ul>
          <li>Assigned To: ${task.assignee}</li>
          <li>Importance: ${task.importance}</li> <!-- Added Importance here -->
          <li>Due: ${task.due}</li>
        </ul>
      </li>`;
  });
}

function getTask(event) {
  let element = event.target;
  let pindex = element.dataset.pindex;
  let tindex = element.dataset.tindex;
  
  // Get the task information
  let task = JSON.parse(localStorage.getItem("projects"))[pindex].tasks[tindex];
  
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
      <p class="task-importance">Importance: ${task.importance}</p> <!-- Added Importance here -->
      <p class="task-due">Due: ${task.due}</p>

    </div>
  `;
}



function createProject() {
  //get project name and leader name
  let pname = document.getElementById("project-name").value;
  let leaderName = document.getElementById("leader-name").value;
  
  // get current user as manager
  let currentUserEmail = localStorage.getItem("current_user");
  let user = currentUserEmail.substring(0, currentUserEmail.indexOf("@"));
  
  // get projects to append to
  let projects = JSON.parse(localStorage.getItem("projects"));
  let newProject = {
    name: pname,
    manager: user,
    leader: leaderName,
    tasks:[]
  }
  
  projects.push(newProject);
  localStorage.setItem("projects", JSON.stringify(projects));
  location.reload();
}

function createTaskForProject(){
  // get project index
  let pindex = Number(localStorage.getItem("pindex"));
  
  //get current user
  let userEmail = localStorage.getItem("current_user");
  let user = userEmail.substring(0,userEmail.indexOf("@"));
  
  // get all the details
  let title = document.getElementById("title").value;
  let assignee = document.getElementById("assignee").value;
  let importance = Number(document.getElementById("importance").value);
  let description = document.getElementById("description").value;
  let due = document.getElementById("date").value;
  
  // get tasks
  let projects = JSON.parse(localStorage.getItem("projects"))
  let newTask = {
    title:title,
    assignee:assignee,
    importance:importance,
    due:due,
    description:description,
    assigner: user,
    active:true
  }
  projects[pindex].tasks.push(newTask);
  localStorage.setItem("projects", JSON.stringify(projects));
  location.reload();
  
}
