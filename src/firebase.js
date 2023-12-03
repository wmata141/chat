// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: YOUR_STORAGE_BUCKET,
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
//   appId: YOUR_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyBDZWxalmaQZp9LXZSs0Vw3MdWsJmQxCqU",
  authDomain: "chat-797b1.firebaseapp.com",
  projectId: "chat-797b1",
  storageBucket: "chat-797b1.appspot.com",
  messagingSenderId: "961933405943",
  appId: "1:961933405943:web:011d9ca2d24a85f0a9adf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)