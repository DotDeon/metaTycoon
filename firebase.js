// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAV4n_jo8QEJkfPx7b8FglhU3edbAynLno',
  authDomain: 'metatycoon-bac58.firebaseapp.com',
  projectId: 'metatycoon-bac58',
  storageBucket: 'metatycoon-bac58.appspot.com',
  messagingSenderId: '28022106326',
  appId: '1:28022106326:web:189a9a7215159a179f0177',
  measurementId: 'G-N5HTLNPYEK',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
