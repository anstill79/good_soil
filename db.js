
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8m7IO2boP7cTa3Job_Xg1NYVpt2en7Dg",
  authDomain: "goodsoil-47505.firebaseapp.com",
  projectId: "goodsoil-47505",
  storageBucket: "goodsoil-47505.appspot.com",
  messagingSenderId: "265165883569",
  appId: "1:265165883569:web:f324819d4eea6526dc7a90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"

export const db = getFirestore(app);