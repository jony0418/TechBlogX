// Get the login form
const loginForm = document.querySelector('form[action="/login"]');

// Add an event listener to the form submit
loginForm.addEventListener('submit', (event) => {
  // Get the username and password values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Check if the username and password are not empty
  if (!username || !password) {
    alert('Username and password are required!');
    event.preventDefault();
  }
});
