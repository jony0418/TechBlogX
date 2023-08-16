// Get the login form
const loginForm = document.querySelector('form[action="/login"]');

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    // rest of your code
  });
} else {
  console.error('Login form not found');
}
