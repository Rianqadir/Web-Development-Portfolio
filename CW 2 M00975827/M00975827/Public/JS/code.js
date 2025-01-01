document.addEventListener('DOMContentLoaded', function() {
  const registerLink = document.getElementById('registerLink');
  const loginLink = document.querySelector('a[href="#login"]');
  const uploadPostBtn = document.getElementById('uploadPostBtn');
  const loginForm = document.getElementById('login');
  const registerForm = document.getElementById('register');
  const feeds = document.getElementById('feeds');

  registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
  });

  loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
  });

  uploadPostBtn.addEventListener('click', function() {
    toggleForm('upload');
  });

  function toggleForm(formId) {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      if (form.id === formId + 'Form') {
        form.parentNode.classList.remove('hidden');
      } else {
        form.parentNode.classList.add('hidden');
      }
    });
  }

  const registerFormElement = document.getElementById('registerForm');
  const loginFormElement = document.getElementById('loginForm');
  const uploadFormElement = document.getElementById('uploadForm');

  registerFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateRegisterForm()) {
      console.log('Registration successful');
      feeds.classList.add('logged-in'); // Update logged-in status
      loginForm.classList.remove('hidden'); // Show login form after registration
      registerForm.classList.add('hidden'); // Hide register form after registration
      // Further actions can be performed here, such as submitting the form data via AJAX
    }
  });

  loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateLoginForm()) {
      console.log('Login successful');
      feeds.classList.add('logged-in'); // Update logged-in status
      // Further actions can be performed here, such as submitting the form data via AJAX
    }
  });

  uploadFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateUploadForm()) {
      console.log('Post uploaded successfully');
      // Further actions can be performed here, such as submitting the form data via AJAX
    }
  });

  function validateRegisterForm() {
    // Validation logic for registration form
    return true; // Placeholder return, replace with actual validation
  }

  function validateLoginForm() {
    // Validation logic for login form
    return true; // Placeholder return, replace with actual validation
  }

  function validateUploadForm() {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    if (title.trim() === '') {
      alert('Please enter a title for your post');
      return false;
    }

    if (content.trim() === '') {
      alert('Please enter content for your post');
      return false;
    }

    return true;
  }
});


uploadPostBtn.addEventListener('click', function() {
  toggleForm('upload');
});
function toggleForm(formId) {
  const form = document.getElementById(formId);
  form.classList.toggle('hidden');
}


    