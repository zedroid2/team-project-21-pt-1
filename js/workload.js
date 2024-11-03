let charts = [];

function workloadFunctions() {
  createCanvases();
}

function createCanvases() {
  // get main container
  const container = document.getElementById("workloads");
  
  //get current user as name:
  const email = localStorage.getItem("current_user");
  const user = email.substring(0, email.indexOf("@"));
  let projects = []
  let projectsTemp = 
  JSON.parse(localStorage.getItem("projects")).forEach((project, index) => {
    console.log(project);
     if (project.manager == user || project.leader == "user") {
       project.pindex = index;
       projects.push(project);
     }
  })
  
  container.innerHTML = "";
  projects.forEach((project) => {
    container.innerHTML += `
    <div id="pie-chart-${project.pindex}-container" class="chart-wrapper">
      <div class="canvas-wrapper">
      <canvas id="pie-chart-${project.pindex}"></canvas>
      </div>
      <div class="analysis" id="analysis${project.pindex}">
        <h1>Analysis</h1>
        <form>
          <select name="task${project.pindex}" id="task${project.pindex}"></select>
          <select name="newEmployee${project.pindex}" id="newEmployee${project.pindex}"></select>
          <button type="button" onclick="reassignTask(event)" data-pindex="${project.pindex}">Reassign task</button>
        </form>
      </div>
    </div>
    `
    console.log("pre chart load");
    setTimeout(() => {createChart(project)}, 20);  
    console.log("created chart" + project.pindex);
    createForm(project)
  })
}

function createForm(project) {
  // creating task dropdown:
  const tasks = document.getElementById("task"+project.pindex);
  project.tasks.forEach((task, tindex)=> {
    tasks.innerHTML += `<option value="${tindex}">${task.title} - ${task.assignee}</option>`
  });
  
  //creating employee dropdown:
  const employees = document.getElementById("newEmployee"+project.pindex);
  getEmployeesPerProject(project.pindex).forEach((employee) => {
    console.log(employee);
    employees.innerHTML += `<option value="${employee}">${employee}</option>"`
  })
}

function reassignTask(event) {
  event.preventDefault();
  const form = event.target;
  let pindex = form.dataset.pindex;
  console.log(pindex);
  // get projects to reassign task:
  let projects = JSON.parse(localStorage.getItem("projects"));
  // get task index
  let tindex = document.getElementById("task" + pindex).value;
  // get new assignee
  let assignee = document.getElementById("newEmployee" + pindex).value;
  
  projects[pindex].tasks[tindex].assignee = assignee;
  console.log(projects[pindex].tasks);
  
  localStorage.setItem("projects", JSON.stringify(projects));
  
  //refresh the canvases
  createCanvases();
}

function createChart(project) {
  console.log(project);
  let employees = getEmployeesPerProject(project.pindex);
  // get the number of tasks per employee
  let taskNo = []
  employees.forEach((employee) => {
    taskNo.push(project.tasks.filter((task) => {return task.assignee == employee;}).length)
  })
  console.log(document.getElementById("pie-chart-"+project.pindex));
  console.log("taskno: " + taskNo);
  console.log(project.pindex);
  charts.push(new Chart("pie-chart-" + project.pindex, {
    type: "pie",
    data: {
      labels: employees,
      datasets: [{
        backgroundColor: [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
],
        data: taskNo
      }]
    },
    options: {
      title: {
        display: true,
        text: project.name
      }, 
      responsive: true
    }
  }))
  return
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
