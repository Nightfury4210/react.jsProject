// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAncSWizr8gzizsmtgwWlR7Dyhe-Afvgz8",
  authDomain: "nawaid-ali.firebaseapp.com",
  projectId: "nawaid-ali",
  storageBucket: "nawaid-ali.firebasestorage.app",
  messagingSenderId: "682068012358",
  appId: "1:682068012358:web:cfc81fdeb97c5be3f60947",
  measurementId: "G-Q2VRDBHQ56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
