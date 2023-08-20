// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdf0lZ4UI5Ohp1YrqifBu97u1z42UANBY",
  authDomain: "coder-app-41d21.firebaseapp.com",
  projectId: "coder-app-41d21",
  storageBucket: "coder-app-41d21.appspot.com",
  messagingSenderId: "876365299841",
  appId: "1:876365299841:web:df9b75c37bd472be054d80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)