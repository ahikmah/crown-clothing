import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFt_3nkTrOtpc1LwqfxXkuBENeewjWfU4",
  authDomain: "crown-clothing-db-7a08b.firebaseapp.com",
  projectId: "crown-clothing-db-7a08b",
  storageBucket: "crown-clothing-db-7a08b.appspot.com",
  messagingSenderId: "21556019776",
  appId: "1:21556019776:web:9b2a2f8a45652ec48195a5",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

/////////////////////////////////////////////

// Firebase Firestore

const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth: any) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);

  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error: any) {
      console.error("Error creating user", error.message);
    }
  }

  return userRef;
};
