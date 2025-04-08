const customerBtn = document.getElementById('customerBtn');
const workerBtn = document.getElementById('workerBtn');
const customerForm = document.getElementById('customerForm');
const workerForm = document.getElementById('workerForm');

const custError = document.getElementById('cust-error');
const workerError = document.getElementById('worker-error');

// Switch to customer form
customerBtn.addEventListener('click', () => {
  customerForm.style.display = 'flex';
  workerForm.style.display = 'none';
  customerBtn.classList.add('active');
  workerBtn.classList.remove('active');
});

// Switch to worker form
workerBtn.addEventListener('click', () => {
  workerForm.style.display = 'flex';
  customerForm.style.display = 'none';
  workerBtn.classList.add('active');
  customerBtn.classList.remove('active');
});

// Handle customer form submission
customerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const password = document.getElementById('cust-password').value;
  const confirmPassword = document.getElementById('cust-confirm-password').value;

  if (password !== confirmPassword) {
    custError.textContent = "Passwords do not match!";
    custError.style.display = 'block';
    return;
  }

  custError.style.display = 'none';
  window.location.href = '../main.html';
});

// Handle worker form submission
workerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const password = document.getElementById('worker-password').value;
  const confirmPassword = document.getElementById('worker-confirm-password').value;

  if (password !== confirmPassword) {
    workerError.textContent = "Passwords do not match!";
    workerError.style.display = 'block';
    return;
  }

  workerError.style.display = 'none';
  window.location.href = '../main.html';
});
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
  
    // Swap icon (optional)
    if (isHidden) {
      icon.src = "../assets/icons/hidden.png"; // your 'hide' icon
    } else {
      icon.src = "../assets/icons/eye.png"; // your 'show' icon
    }
  }
  
