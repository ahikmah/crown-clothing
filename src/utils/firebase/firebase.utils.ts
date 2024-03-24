import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInformation: any
) => {
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
        ...additionalInformation,
      });
    } catch (error: any) {
      console.error("Error creating user", error.message);
    }
  }

  return userRef;
};

// REGISTER USER
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
  displayName: string
) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await createUserDocumentFromAuth(user.user, { displayName });
    return true;
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      alert("Email already in use");
    } else {
      console.error("Error creating user", error.message);
    }
    return false;
  }
};

// SIGN IN USER
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error: any) {
    if (error.code === "auth/invalid-credential") {
      alert("Invalid credentials");
    } else {
      console.error("Error signing in user", error.code, error.message);
    }
    return false;
  }
};