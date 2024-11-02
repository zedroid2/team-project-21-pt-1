let currentDate = new Date();

function loadCalendar() {
    const monthYear = document.getElementById("monthYear");
    const daysContainer = document.getElementById("days");

    // Get current month and year
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Set the month and year in header
    monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

    // Clear previous days
    daysContainer.innerHTML = "";

    // Get first day of the month and adjust for Monday start
    let firstDay = new Date(year, month, 1).getDay();
    firstDay = (firstDay === 0) ? 6 : firstDay - 1; // Shift to make Monday index 0

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty divs for alignment based on the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("day", "empty");
        daysContainer.appendChild(emptyDiv);
    }

    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;
        dayDiv.dataset.day = day; // Assign day number for task marking

        // Highlight current day
        if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            dayDiv.classList.add("current");
        }

        daysContainer.appendChild(dayDiv);
    }

    // Call function to mark user tasks
    markUserTasksOnCalendar(month, year);
}

function markUserTasksOnCalendar(month, year) {
    const currentUser = localStorage.getItem("current_user").split('@')[0]; // Extract username from email
    const projects = JSON.parse(localStorage.getItem("projects")); // Retrieve all projects

    if (projects && currentUser) {
        projects.forEach(project => {
            project.tasks.forEach(task => {
                // Check if task is assigned to the current user and is active
                if (task.assignee === currentUser && task.active) {
                    const [dayStr, monthStr, yearStr] = task.due.split("/");
                    const taskDay = parseInt(dayStr, 10);
                    const taskMonth = parseInt(monthStr, 10) - 1; // Zero-based month
                    const taskYear = parseInt("20" + yearStr, 10); // Convert to yyyy

                    // Check if the task's due date is in the current displayed month and year
                    if (taskMonth === month && taskYear === year) {
                        const dayElement = document.querySelector(`.day[data-day="${taskDay}"]`);
                        if (dayElement) {
                            const dot = document.createElement("div");
                            dot.classList.add("task-dot");
                            dayElement.appendChild(dot);
                        }
                    }
                }
            });
        });
    }
}

// Functions for navigating months
function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    loadCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    loadCalendar();
}

// Initial calendar load
document.addEventListener("DOMContentLoaded", function () {
    loadCalendar();
});

// Functions for sidebar
function openProfile() {
    window.location.href = 'profile.html';
}
  
function openTraining() {
    window.location.href = 'training.html';
}
  
function openForum() {
    window.location.href = 'forum.html';
}

function openCalendar() {
    window.location.href = 'calendar.html';
}
