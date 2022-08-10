const newCommentHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
   const body = document.querySelector('#body').value.trim();
  const post_id = document.getElementById('post-id').value
  
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({  body, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    
  };

  document.querySelector('.add-comment-form').addEventListener('submit', newCommentHandler)