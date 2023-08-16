// Add an event listener to all delete links
document.querySelectorAll('a[href^="/post/delete/"]').forEach((deleteLink) => {
    deleteLink.addEventListener('click', (event) => {
      // Prompt the user to confirm the deletion
      const confirmDelete = confirm('Are you sure you want to delete this post?');
      if (!confirmDelete) {
        // Prevent the deletion if the user cancels
        event.preventDefault();
      }
    });
  });
  