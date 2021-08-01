import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyApULy3lVEIu6TA7Fwe2Zh7QeynuQbkM6M",
  authDomain: "crwn-db-17dad.firebaseapp.com",
  projectId: "crwn-db-17dad",
  storageBucket: "crwn-db-17dad.appspot.com",
  messagingSenderId: "50049765606",
  appId: "1:50049765606:web:c07fac9156dba6f6ed6b27",
  measurementId: "G-FC4GMNBX47",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;