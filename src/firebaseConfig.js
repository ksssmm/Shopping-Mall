import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKzYNQAoTPVTGAFc6ZVouHPe1tsUelUSk",
  authDomain: "my-app-6c5d4.firebaseapp.com",
  projectId: "my-app-6c5d4",
  storageBucket: "my-app-6c5d4.appspot.com",
  messagingSenderId: "999107842001",
  appId: "1:999107842001:web:adc9436374947044f39af0",
  measurementId: "G-KFH0VBM6Y1"
};

const app = initializeApp(firebaseConfig); 

const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, app, db }; 
