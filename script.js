const signupBtn = document.getElementById('show-signup');
const loginBtn = document.getElementById('show-login');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

signupBtn.addEventListener('click', () => {
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});

loginBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});