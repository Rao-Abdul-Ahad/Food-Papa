import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpMFsbbB-P-PXWAGaChiHIXoDh8LiRC9w",
  authDomain: "sign-in-and-sign-up-335b4.firebaseapp.com",
  projectId: "sign-in-and-sign-up-335b4",
  storageBucket: "sign-in-and-sign-up-335b4.firebasestorage.app",
  messagingSenderId: "832961840852",
  appId: "1:832961840852:web:6d963abfb8f9de9fef5d41",
  measurementId: "G-XVVF0TPN0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

let getbtn = document.getElementById('btn');

getbtn.addEventListener('click', function () {
  const email = document.getElementById('semail').value;
  const password = document.getElementById('spass').value;

  if (!email || !password) {
    alert('Please fill in both email and password');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Don't manually redirect here — let onAuthStateChanged handle it.
      alert('Sign up successful. Redirecting...');
      location.href = 'index2.html';
    })
    .catch((error) => {
      alert(`Sign up unsuccessful: ${error.message}`);
    });
});

// Auth state observer (runs fast after sign-up or reload)
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Authenticated — redirect
    window.location.href = 'adminpanel.html';
  }
});
