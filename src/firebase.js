// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGpCv0MGEBvXz7i2MO2E6vtwheybwx-8g",
  authDomain: "chat-70d66.firebaseapp.com",
  projectId: "chat-70d66",
  storageBucket: "chat-70d66.appspot.com",
  messagingSenderId: "374722382502",
  appId: "1:374722382502:web:2186e57c82e9d3f6be0267",
  measurementId: "G-V9L2V18Y2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);