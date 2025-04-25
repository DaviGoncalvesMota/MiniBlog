import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmzrRCwweyyHyMjA81kDxBA7qLqLdU3bU",
  authDomain: "miniblog-b165a.firebaseapp.com",
  projectId: "miniblog-b165a",
  storageBucket: "miniblog-b165a.firebasestorage.app",
  messagingSenderId: "48096390806",
  appId: "1:48096390806:web:0ff85f7bfe9dc22fad9cb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app);

export { db, auth }
