import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn9Vn0n3emnEZqb6cFo7eaSpC0IHHkfe0",
  authDomain: "clone-7dfcb.firebaseapp.com",
  projectId: "clone-7dfcb",
  storageBucket: "clone-7dfcb.appspot.com",
  messagingSenderId: "874746710524",
  appId: "1:874746710524:web:9b00891faf9d32d0d24a79",
  measurementId: "G-LTGGECC21Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
