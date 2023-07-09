import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { app } from "./db.js";

export const auth = getAuth(app);
const signUpEmail = "anstill79@hotmail.com";
const signUpPassword = "qazwsx123";

export const userSignUp = async () => {
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Your account has been created!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage)
    })
}

const userSignIn = async () => {
  signInWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("You have signed in successfully!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage)
    })
}

const checkAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('user logged in. check auth code ran.')
    }
    else {
      console.log('user logged out. check auth code ran.')
    }
  })
}

const userSignOut = async () => {
  await signOut(auth);
}

checkAuthState();