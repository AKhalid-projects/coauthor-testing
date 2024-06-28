// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "coauthor-a2cfb.firebaseapp.com",
  projectId: "coauthor-a2cfb",
  storageBucket: "coauthor-a2cfb.appspot.com",
  messagingSenderId: "892905354852",
  appId: "1:892905354852:web:f51177e97fb7f677151171",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
