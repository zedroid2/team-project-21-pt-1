function toggleSubtopics(topicId) {
    const subtopics = document.getElementById(topicId);
    if (subtopics.style.display === "none") {
        subtopics.style.display = "block";
    } else {
        subtopics.style.display = "none";
    }
}

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
