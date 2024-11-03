function onloadFunctions() {
    getProjects();
    prepareForms();
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
    //* re-add the placeholder text
    document.getElementById("detailed-task-placeholder").style.opacity = "1";
    //* remove previous task's details
    document.getElementById("task-info").innerHTML = "";
    console.log("clicked project");
    
    tasks.forEach((task, tindex) => {
      // style for if awaiting approval
      let colorChange = ""
      if (task.active == false && task.signoff == false) {
        colorChange = 'style="background-color:pink"';
      } else if (task.active == false && task.signoff == true) {
        colorChange = 'style="background-color:green"'
      }
      console.log(task);
      console.log(colorChange);
      //if (task.signoff == false) {
        tasksHTML.innerHTML += `<li ${colorChange} id="${tindex}" data-pindex=${pindex} data-tindex=${tindex} onclick="getTask(event)">${task.title}
        <ul>
          <li>${task.assignee}</li>
          <li>${task.due}</li>
        </ul>
        </li>
        `;
      //}
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
    //* hide placeholder text for detailed task
    document.getElementById("detailed-task-placeholder").style.opacity = "0";
    console.log("clicked task");
    
    // new task info
    taskInfo.innerHTML = "";
    
    taskInfo.innerHTML = `
    <li>Title:${task.title}</li>
    <li>Assignee:${task.assignee}</li>
    <li>Description:${task.description}</li>
    <li>Due:${task.due}</li>
    <li>Importance:${task.importance}</li>
    <li>Assigner:${task.assigner}</li>
    <li>Active:${task.active}</li>
    `
    
    // check if user has marked as complete
    if (task.active == false) {
      taskInfo.innerHTML += `<button data-pindex="${pindex}" data-tindex="${tindex}" type="button" onclick="confirmCompletion(event)">Confirm completion</button>`;
    }
  }

function confirmCompletion(event) {
  const button = event.target
  const pindex = button.dataset.pindex;
  const tindex = button.dataset.tindex;
  
  let projects = JSON.parse(localStorage.getItem("projects"));
  projects[pindex].tasks[tindex].signoff = true;
  console.log(projects[pindex].tasks[tindex]);
  
  localStorage.setItem("projects", JSON.stringify(projects));
  location.reload();
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

function getEmployees(job="", pindex=-1) {
  if (pindex != -1) {
    return getEmployeesPerProject(pindex);
  }
  
  //get all email:password for users
  const emailPass = JSON.parse(localStorage.getItem("ALLUSERS"));
  console.log(emailPass);
  
  // create return list
  let userList = [];
  Object.keys(emailPass).forEach((userEmail) => {
    if (JSON.parse(localStorage.getItem(userEmail))[1].includes(job) ) {
      userList.push(userEmail.substring(0,userEmail.indexOf("@")));
    } 
  })
  return userList;
}

function getEmployeesPerProject(pindex) {
  const projects = JSON.parse(localStorage.getItem("projects"))[pindex];
  let userList = [];
  // get the project we want
  projects.tasks.forEach((task) => {
    if (!(userList.includes(task.assignee))) {
      userList.push(task.assignee);
    }
  })
  return userList;
}


function prepareForms() {
  prepareProjectForm();
  //prepareTaskForm();
}

function prepareProjectForm() {
  // get Team leaders as dropdown
  const leaderSelect = document.getElementById("leader-name");
  // clear
  leaderSelect.innerHTML = "";
  let allLeaders = getEmployees("Leader");
  allLeaders.forEach((leader)=> {
    leaderSelect.innerHTML += `
    <option value="${leader}">${leader}</option>
    `
  })
}

function prepareTaskForm(pindex) {
  // prepare the functions
}

function viewWorkload(pindex) {
  
}
