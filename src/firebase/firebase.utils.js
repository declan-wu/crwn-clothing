import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAj0fxX5bqQDQ8zlPi2m_p01aBu7UmjXpM",
  authDomain: "crwn-db-ba627.firebaseapp.com",
  databaseURL: "https://crwn-db-ba627.firebaseio.com",
  projectId: "crwn-db-ba627",
  storageBucket: "",
  messagingSenderId: "975822767134",
  appId: "1:975822767134:web:daaf7c850d35f1fe"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
