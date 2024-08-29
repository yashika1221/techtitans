// Modal functionality
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.dataset.modal;
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Show time slots after selecting department
function showTimeSlots() {
    document.getElementById('opd-time-slots').style.display = 'block';
}

// Login form logic
function openLoginForm(action) {
    document.getElementById('login-modal').style.display = 'block';
    document.getElementById('login-form').dataset.action = action;
}

function loginUser() {
    const username = document.getElementById('username').value;
    if (username) {
        // Set username in session (simulate login)
        sessionStorage.setItem('username', username);
        // Display username in top-right corner
        document.getElementById('logged-in-user').style.display = 'block';
        document.getElementById('username-display').textContent = username;
        document.getElementById('user-info').style.display = 'none';
        
        // Close login modal
        document.getElementById('login-modal').style.display = 'none';

        // Redirect based on action
        const action = document.getElementById('login-form').dataset.action;
        if (action === 'bed') {
            alert('Booking bed request sent to the hospital.');
        } else if (action === 'opd') {
            alert('OPD appointment request sent to the hospital.');
        } else if (action === 'ambulance') {
            alert('Emergency ambulance request sent to the hospital.');
        }
    } else {
        alert('Please enter a username.');
    }
}
