import { auth } from './firebase.js';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Auth state listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById('authButtons').innerHTML = `
      <button id="logoutBtn">Logout</button>
      <img src="${user.photoURL}" class="profile-pic">
    `;
  } else {
    document.getElementById('authButtons').innerHTML = `
      <button id="loginBtn">Login</button>
      <button id="registerBtn">Register</button>
    `;
  }
});

// Login function
document.addEventListener('click', (e) => {
  if (e.target.id === 'loginBtn') {
    document.getElementById('loginModal').style.display = 'block';
  }
});
