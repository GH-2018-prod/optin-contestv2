// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDVAYxj2skwkCvvTmNYwQfFAJpKLEGlHWA",
    authDomain: "test-app3-f9874.firebaseapp.com",
    databaseURL: "https://test-app3-f9874.firebaseio.com",
    projectId: "test-app3-f9874",
    storageBucket: "test-app3-f9874.appspot.com",
    messagingSenderId: "327126614176",
    appId: "1:327126614176:web:f1c8b4d38c3d479fb7c9c5",
  };
  const firebaseDB = initializeApp(firebaseConfig);
  export default firebaseDB;