// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy0cahnKdc3lRTB3_5ZLwxtfWWTv5uejY",
    authDomain: "e-learner-assign.firebaseapp.com",
    projectId: "e-learner-assign",
    storageBucket: "e-learner-assign.appspot.com",
    messagingSenderId: "465420908631",
    appId: "1:465420908631:web:23ab9caee3619b1519cb12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;