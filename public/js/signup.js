// Get the signup form
const signupForm = document.querySelector('form[action="/signup"]');

// Add an event listener to the form submit
signupForm.addEventListener('submit', (event) => {
  // Get the username and password values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Check if the username and password are not empty
  if (!username || !password) {
    alert('Username and password are required!');
    event.preventDefault();
  }
});
