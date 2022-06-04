import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDiw2GZRc3Y2WMxrwHosGns2kiSKDmCp2E',
  authDomain: 'house-marketplace-app-f96c0.firebaseapp.com',
  projectId: 'house-marketplace-app-f96c0',
  storageBucket: 'house-marketplace-app-f96c0.appspot.com',
  messagingSenderId: '826026447556',
  appId: '1:826026447556:web:622c826003ee7a3f6aef91'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
