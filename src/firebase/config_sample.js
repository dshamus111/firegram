
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Change this filename to config.js in order to link with rest of app

// Your web app's Firebase configuration
var firebaseConfig = {
  // PUT FIREBASE CONFIG HERE
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };