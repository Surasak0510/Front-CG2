import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/database';



const firebaseConfig = {
    apiKey: "AIzaSyDMUrp1PHdaodv34bMXzY9gtHA2ve5YwJw",
    authDomain: "carbongo-b272c.firebaseapp.com",
    projectId: "carbongo-b272c",
    storageBucket: "carbongo-b272c.appspot.com",
    messagingSenderId: "14266691507",
    appId: "1:14266691507:web:c8259ea72492610c94e5c6",
    measurementId: "G-J026TP6TDC"
  };

// Check if the Firebase app is already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
