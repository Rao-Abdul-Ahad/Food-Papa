import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; // Correct import

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

let getbtn = document.getElementById('btn2');

getbtn.addEventListener('click', function() {
  const email = document.getElementById('semail').value;
  const password = document.getElementById('spass').value;

  // Simple validation check
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Sign in with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      alert('Sign In Successful');
      window.location.href = "adminpanel.html";
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Sign In Unsuccessful: ${errorMessage}`);
    });

});
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    location.href = "adminpanel.html";
  } else {
    console.log('User is signed out');
    
  }
});
async  function  log() {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout",
    
  })
 
  .then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Logged Out!",
        text: "Your are successfully logged out.",
        icon: "success"
      }); 
       location.href = "index.html";
    }
  });
}
  window.log = log;