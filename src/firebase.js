// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1__14KE5PBsZmTEkkmjdJO1Z0JIIqpzI",
  authDomain: "chat-telegram-51173.firebaseapp.com",
  projectId: "chat-telegram-51173",
  storageBucket: "chat-telegram-51173.appspot.com",
  messagingSenderId: "780987406553",
  appId: "1:780987406553:web:a416238a970c8390b586c8",
  measurementId: "G-8RVBV188VG"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()