// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKxWtqJJVZFoiS-lPqwBbI0qa2Yzkogew",
  authDomain: "mars-programming-skill-tree.firebaseapp.com",
  databaseURL: "https://mars-programming-skill-tree-default-rtdb.firebaseio.com",
  projectId: "mars-programming-skill-tree",
  storageBucket: "mars-programming-skill-tree.appspot.com",
  messagingSenderId: "416879190456",
  appId: "1:416879190456:web:04c7f4a4e44ca463086f4d",
  measurementId: "G-FGJ4L37YZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


