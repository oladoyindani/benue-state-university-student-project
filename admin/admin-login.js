// admin-login.js
const adminAuth = new AuthSystem('admin');

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('adminLogin');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      adminAuth.login(event);
    });
  }
});