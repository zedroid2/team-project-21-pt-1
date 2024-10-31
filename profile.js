function loadUserProfile() {
    // Get the current logged-in user's email
    const currentUserEmail = localStorage.getItem("current_user");
    
    if (!currentUserEmail) {
        alert("No user logged in");
        return;
    }

    // Parse user information from localStorage
    const userInfo = JSON.parse(localStorage.getItem(currentUserEmail));
    
    if (userInfo) {
        document.getElementById("userName").textContent = currentUserEmail.split('@')[0];
        document.getElementById("userEmail").textContent = currentUserEmail;
        document.getElementById("userDepartment").textContent = "Product Development"; // Example data
        document.getElementById("userRole").textContent = "Product Manager"; // Example data
        document.getElementById("userPassword").textContent = userInfo[0] ? "***********" : "Not Set";
    } else {
        alert("User data not found.");
    }
}

function changePassword() {
    alert("Password change functionality not yet implemented.");
}

function openForum() {
    window.location.href = 'forum.html';
}