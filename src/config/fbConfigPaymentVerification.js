import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7AC-6_1kQSd1c2b1SGYZS-0SIdreTSzc",
  authDomain: "payment-verification-fa8c3.firebaseapp.com",
  projectId: "payment-verification-fa8c3",
  storageBucket: "payment-verification-fa8c3.appspot.com",
  messagingSenderId: "770734018444",
  appId: "1:770734018444:web:7a718e16e38ecee82e90a9",
  measurementId: "G-1R79M41KB5",
};
// Initialize Firebase
export const pv = firebase.initializeApp(
  firebaseConfig,
  "Payment Verification"
);
