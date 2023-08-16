// Get the comment form
const commentForm = document.querySelector('form[action^="/post/"]');

// Add an event listener to the form submit
commentForm.addEventListener('submit', (event) => {
  // Get the comment value
  const comment = document.getElementById('comment').value.trim();

  // Check if the comment is not empty
  if (!comment) {
    alert('Comment cannot be empty!');
    event.preventDefault();
  }
});
