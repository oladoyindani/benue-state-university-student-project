document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (!adminAuth.checkAuth()) return;
    const adminAuth = new AuthSystem('admin');
});


// Oladoyin Daniel Codes @08125268335

class AdminDashboard {
    constructor() {
        adminAuth.checkAuth();
        this.initUserTable();
        this.initSystemMetrics();
    }

    initUserTable() {
        const userData = [
            { id: 1, email: "student@bsu.edu", role: "student", lastLogin: "2023-08-15 09:32" },
            { id: 2, email: "vendor@bsu.edu", role: "vendor", lastLogin: "2023-08-14 16:45" },
            { id: 3, email: "admin@bsu.edu", role: "admin", lastLogin: "2023-08-15 10:15" }
        ];

        const tbody = document.getElementById('userTableBody');
        tbody.innerHTML = userData.map(user => `
            <tr>
                <td>${user.id}</td>
                <td>${user.email}</td>
                <td><span class="role-tag">${user.role}</span></td>
                <td>${user.lastLogin}</td>
                <td>
                    <button class="btn-reset">Reset Password</button>
                    <button class="btn-suspend">Suspend</button>
                </td>
            </tr>
        `).join('');
    }

    initSystemMetrics() {
        // Initialize charts or live metrics here
    }
}

if(window.location.pathname.includes('dashboard.html')) {
    new AdminDashboard();
}

function logout() {
    adminAuth.logout();
}

// Oladoyin Daniel Codes @08125268335