// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWHCk3YcC3ntvSGASNfwZmKYF0X-j54Rk",
  authDomain: "adotajamarica-6003a.firebaseapp.com",
  projectId: "adotajamarica-6003a",
  storageBucket: "adotajamarica-6003a.appspot.com",
  messagingSenderId: "223931220045",
  appId: "1:223931220045:web:a560dd644ac99c14755c04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider };
