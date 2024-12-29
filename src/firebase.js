// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsrYF54HpMJlNcmcQOJ04zK8KRPsqP1A4",
    authDomain: "aum-yoga-41f01.firebaseapp.com",
    projectId: "aum-yoga-41f01",
    storageBucket: "aum-yoga-41f01.firebasestorage.app",
    messagingSenderId: "366963187962",
    appId: "1:366963187962:web:05474de2f8654d70ed2943",
    measurementId: "G-RPBKM2TES3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




export default app;
