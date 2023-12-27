// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA5udA6bEmPINBcvSL_vAyrlQfZjnsO848',
	authDomain: 'focusflow-27541.firebaseapp.com',
	projectId: 'focusflow-27541',
	storageBucket: 'focusflow-27541.appspot.com',
	messagingSenderId: '789174724805',
	appId: '1:789174724805:web:a3b6885d60d5671777a8ac',
	measurementId: 'G-DD6LPYE192'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
