// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy_hJqKRPEANvkVfr-jZxUeZucWk_aBFE",
  authDomain: "instagram-login-550c8.firebaseapp.com",
  projectId: "instagram-login-550c8",
  storageBucket: "instagram-login-550c8.appspot.com",
  messagingSenderId: "70308517287",
  appId: "1:70308517287:web:710fa5216761df4dcfd282",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
