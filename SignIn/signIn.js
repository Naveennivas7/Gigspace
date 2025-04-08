// Toggle password visibility
  function togglePassword(icon) {
    const input = icon.closest(".password-wrapper").querySelector("input");
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
  
    // Optional: toggle the icon image
    icon.querySelector("img").src = isHidden ? "../assets/icons/hidden.png" : "../assets/icons/eye.png";
  }
  
  // Dummy sign-in logic (you'll replace with real backend/API)
  document.getElementById('signinForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('signin-error');
  
    // Dummy check - replace with actual validation
    if (email === "" || password === "") {
      error.textContent = "Please fill in all fields.";
      error.style.display = "block";
      return;
    }
  
    // Redirect to main page
    error.style.display = "none";
    window.location.href = "../main.html";
  });
  