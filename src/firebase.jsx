// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEmeWDC_ZFHbsbQP_WT0My8XX0lW6gwzM",
  authDomain: "peaceful-oath-333815.firebaseapp.com",
  projectId: "peaceful-oath-333815",
  storageBucket: "peaceful-oath-333815.appspot.com",
  messagingSenderId: "947037137579",
  appId: "1:947037137579:web:e99156a25cb3ff2d9aa5ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()