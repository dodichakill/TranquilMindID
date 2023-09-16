// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCOjMw9H6NUWKrvvLZ6B2kRFmivtQ3upts",
  authDomain: "tranquilmindid.firebaseapp.com",
  databaseURL:
    "https://tranquilmindid-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tranquilmindid",
  storageBucket: "tranquilmindid.appspot.com",
  messagingSenderId: "185312979519",
  appId: "1:185312979519:web:85f7b2ea8cded7e3b9668a",
  measurementId: "G-SEFXEQCGPR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
