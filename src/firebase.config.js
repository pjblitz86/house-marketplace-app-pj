import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'house-marketplace-pj.firebaseapp.com',
  projectId: 'house-marketplace-pj',
  storageBucket: 'house-marketplace-pj.appspot.com',
  messagingSenderId: '575583155572',
  appId: '1:575583155572:web:d625313559207bf00ae821'
};

initializeApp(firebaseConfig);

export const db = getFirestore();
