import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3F14wj5G8WgEyXJ-qg77SII66bzLRCIo",
  authDomain: "jt-clothing-db-cfc14.firebaseapp.com",
  projectId: "jt-clothing-db-cfc14",
  storageBucket: "jt-clothing-db-cfc14.appspot.com",
  messagingSenderId: "110933111211",
  appId: "1:110933111211:web:a03b981c0d3471b23762ee",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // Get document reference
  const userDocRef = doc(db, "users", userAuth.uid);

  // Get data of document named userAuth.uid
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
};
