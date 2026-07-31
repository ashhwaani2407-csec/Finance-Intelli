/**
 * Authentication System
 * Handles user signup, login, and session management using localStorage
 */

const Auth = {
    // Initialize authentication system
    init() {
        this.checkAuthStatus();
        this.setupAuthListeners();
    },

    // Check if user is logged in
    checkAuthStatus() {
        const user = this.getCurrentUser();
        if (user) {
            this.updateUIForLoggedIn(user);
        } else {
            this.updateUIForLoggedOut();
        }
    },

    // Get current logged-in user
    getCurrentUser() {
        const userId = localStorage.getItem('currentUser');
        if (!userId) return null;
        
        const users = this.getUsers();
        return users.find(u => u.id === userId) || null;
    },

    // Get all registered users
    getUsers() {
        const usersJson = localStorage.getItem('users');
        return usersJson ? JSON.parse(usersJson) : [];
    },

    // Save users to localStorage
    saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    },

    // Sign up new user
    signup(email, password, name) {
        const users = this.getUsers();
        
        // Check if user already exists
        if (users.find(u => u.email === email)) {
            return { success: false, message: 'User with this email already exists' };
        }

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            email: email,
            password: password, // In production, this should be hashed
            name: name,
            createdAt: new Date().toISOString(),
            portfolio: {
                holdings: [],
                transactions: [],
                totalInvestment: 0,
                currentValue: 0
            }
        };

        users.push(newUser);
        this.saveUsers(users);

        // Auto login after signup
        this.login(email, password);

        return { success: true, message: 'Account created successfully!' };
    },

    // Login user
    login(email, password) {
        const users = this.getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            return { success: false, message: 'Invalid email or password' };
        }

        // Set current user
        localStorage.setItem('currentUser', user.id);
        localStorage.setItem('isLoggedIn', 'true');

        this.updateUIForLoggedIn(user);
        return { success: true, message: 'Login successful!', user: user };
    },

    // Logout user
    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedIn');
        this.updateUIForLoggedOut();
        window.location.href = 'index.html';
    },

    // Update UI when user is logged in
    updateUIForLoggedIn(user) {
        const loginButtons = document.querySelectorAll('.login-btn, .nav-links a[href="login.html"]');
        loginButtons.forEach(btn => {
            if (btn.classList.contains('login-btn')) {
                btn.textContent = user.name || 'My Account';
                btn.href = 'portfolio.html';
            } else {
                btn.style.display = 'none';
            }
        });

        // Add logout button if not exists
        const navLinks = document.querySelector('.nav-links');
        if (navLinks && !document.querySelector('.logout-btn')) {
            const logoutBtn = document.createElement('a');
            logoutBtn.href = '#';
            logoutBtn.className = 'logout-btn';
            logoutBtn.textContent = 'Logout';
            logoutBtn.onclick = (e) => {
                e.preventDefault();
                this.logout();
            };
            navLinks.appendChild(logoutBtn);
        }
    },

    // Update UI when user is logged out
    updateUIForLoggedOut() {
        const loginButtons = document.querySelectorAll('.login-btn');
        loginButtons.forEach(btn => {
            btn.textContent = 'Login/SignUp';
            btn.href = 'login.html';
        });

        const logoutBtn = document.querySelector('.logout-btn');
        if (logoutBtn) {
            logoutBtn.remove();
        }
    },

    // Setup event listeners
    setupAuthListeners() {
        // Check auth status on page load
        document.addEventListener('DOMContentLoaded', () => {
            this.checkAuthStatus();
        });
    },

    // Get user portfolio
    getUserPortfolio() {
        const user = this.getCurrentUser();
        return user ? user.portfolio : null;
    },

    // Update user portfolio
    updateUserPortfolio(portfolio) {
        const user = this.getCurrentUser();
        if (!user) return false;

        const users = this.getUsers();
        const userIndex = users.findIndex(u => u.id === user.id);
        
        if (userIndex !== -1) {
            users[userIndex].portfolio = portfolio;
            this.saveUsers(users);
            localStorage.setItem('currentUser', user.id);
            return true;
        }
        return false;
    }
};

// Initialize auth system
if (typeof window !== 'undefined') {
    Auth.init();
}
