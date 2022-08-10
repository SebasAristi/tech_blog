const post_id =  document.querySelector('#post-id').value;


const editPostFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
  
  
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    
  };

  const deletePostHandler = async (event) => {
    event.preventDefault();
   
  
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    
  };
  

  document.querySelector('.edit-post-form').addEventListener('submit', editPostFormHandler)
  document.querySelector('#delete').addEventListener('click', deletePostHandler)