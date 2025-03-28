class AuthSystem {
    constructor(role) {
        this.role = role;
        this.users = [
            { 
                email: "student@bsu.edu",
                password: "student123",
                role: "student",
                name: "John Doe",
                matricNumber: "BSU/2021/001",
                balance: 15000
            },
            {
                id: "VENDOR-001",
                password: "vendor123",
                role: "vendor",
                businessName: "Campus Kitchen",
                category: "Food & Beverage",
                rating: 4.5
            },
            {
                id: "ADMIN-001",
                password: "admin123",
                role: "admin",
                name: "System Administrator",
                permissions: ["users", "content", "analytics"]
            }
        ];
    }

    // Oladoyin Daniel Codes @08125268335

    login(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        const credentials = {
            identifier: formData.get('identifier'),
            password: formData.get('password')
        };

        const user = this.users.find(u => {
            let identifierMatch = false;
            
            if(this.role === 'student') {
                identifierMatch = u.email === credentials.identifier;
            } else {
                identifierMatch = u.id === credentials.identifier;
            }
            
            return identifierMatch && 
                   u.password === credentials.password && 
                   u.role === this.role;
        });

        if(user) {
            localStorage.setItem('bsuAuth', JSON.stringify({
                role: user.role,
                userData: user,
                expires: Date.now() + 3600000 // 1 hour
            }));
            
            // Path for redirection
            window.location.href = `dashboard.html`;
        } else {
            this.showError("Invalid credentials. Please try again.");
        }
    }

    checkAuth() {
        const session = JSON.parse(localStorage.getItem('bsuAuth'));
        
        if(!session || session.role !== this.role || session.expires < Date.now()) {
            localStorage.removeItem('bsuAuth');
            // Path for redirection
            window.location.href = `login.html`;
            return false;
        }
        return true;
    }

    logout() {
        localStorage.removeItem('bsuAuth');
        window.location.href = `login.html`;
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'auth-error';
        errorDiv.textContent = message;
        const container = document.querySelector('.auth-container') || document.body;
        container.prepend(errorDiv);
        
        setTimeout(() => errorDiv.remove(), 5000);
    }
}

const studentAuth = new AuthSystem('student');
const vendorAuth = new AuthSystem('vendor');
const adminAuth = new AuthSystem('admin');