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
  apiKey: 'AIzaSyCIv-EtqIIJ26xwwZUjyeGRiXlrPMN3vuE',
  authDomain: 'metatycoon-8c460.firebaseapp.com',
  projectId: 'metatycoon-8c460',
  storageBucket: 'metatycoon-8c460.appspot.com',
  messagingSenderId: '588262579918',
  appId: '1:588262579918:web:f15b82a2e07f811c2e7a9f',
  measurementId: 'G-5GYKVMVN51',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
