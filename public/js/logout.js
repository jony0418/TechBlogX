// Add an event listener to the logout link
document.querySelector('a[href="/logout"]').addEventListener('click', (event) => {
    // Prompt the user to confirm the logout
    const confirmLogout = confirm('Are you sure you want to log out?');
    if (!confirmLogout) {
      // Prevent the logout if the user cancels
      event.preventDefault();
    }
  });
  