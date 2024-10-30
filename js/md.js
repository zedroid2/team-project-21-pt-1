function onloadFunctions() {
    getProjects();
  }
  
  function getProjects() {
    // get projects from local storage
    //* get current user 
    let userEmail = localStorage.getItem("current_user");
    let user = userEmail.substring(0,userEmail.indexOf("@"));
    console.log("user:" + user)
    let projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);
    
    // get the html elements:
    let projectsHTML = document.getElementById("projects");
    
    // check each project, if the user is a manager or team leader,
    // add the project to the list
    projects.forEach((project)=> {
      console.log(project);
        if (project.leader == user || project.manager == user) {
          projectsHTML.innerHTML += `
          <li id="${project.name}" onclick="getTasks(event)">${project.name}</li>`;
        }
    })
  }
  
  function getTasks(event) {
    
    let element = event.target;
    let projectName = element.id;
    
    //get project exactly
    let projectsLocal = JSON.parse(localStorage.getItem("projects"));
    let pindex = projectsLocal.findIndex(project => project.name == projectName)
    let project = projectsLocal[pindex];
    
    // SET A CURRENT GLOBAL PROJECT (ease of use for creating tasks) nothing is secure at the moment
    // as not needed to be secure
    localStorage.setItem("pindex", `${pindex}`);
    console.log(project);
    
    //get the tasks for the project
    let tasks = project.tasks;
    console.log(tasks);
    
    // get the tasks element
    let tasksHTML = document.getElementById("tasks");
    //* clear the inner HTML for the new tasks to be shown
    tasksHTML.innerHTML = "";
    
    tasks.forEach((task, tindex) => {
      console.log(task);
      tasksHTML.innerHTML += `<li id="${tindex}" data-pindex=${pindex} data-tindex=${tindex} onclick="getTask(event)">${task.title}
        <ul>
          <li>${task.assignee}</li>
          <li>${task.due}</li>
        </ul>
      </li>
      `;
    })
    
  }
  
  function getTask(event) {
    // get target element and project index, task index
    let element = event.target;
    let pindex = element.dataset.pindex;
    let tindex = element.dataset.tindex;
    
    // get the task information:
    let task = JSON.parse(localStorage.getItem("projects"))[pindex].tasks[tindex];
    
    // get html tag to add data to
    let taskInfo = document.getElementById("task-info");
    //* clear taskinfo
    taskInfo.innerHTML = "";
    
    // new task info
    
    taskInfo.innerHTML = `
    <li>Title:${task.title}</li>
    <li>Assignee:${task.assignee}</li>
    <li>Description:${task.description}</li>
    <li>Due:${task.due}</li>
    <li>Importance:${task.importance}</li>
    <li>Assigner:${task.assigner}</li>
    <li>Active:${task.active}</li>
    `
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