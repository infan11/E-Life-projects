// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgD5lCQueBOvvJm4O8rljB2fp448dkxik",
  authDomain: "smile-shop-cd73f.firebaseapp.com",
  projectId: "smile-shop-cd73f",
  storageBucket: "smile-shop-cd73f.appspot.com",
  messagingSenderId: "256063162285",
  appId: "1:256063162285:web:c54b452097eea2db854324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;