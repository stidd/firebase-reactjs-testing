import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAer6UYb_aado-cw__LBrTU_Lqow77S-sI",
    authDomain: "just-clock-it-47733.firebaseapp.com",
    databaseURL: "https://just-clock-it-47733.firebaseio.com",
    projectId: "just-clock-it-47733",
    storageBucket: "just-clock-it-47733.appspot.com",
    messagingSenderId: "1075363172390",
    appId: "1:1075363172390:web:0af28afa768b6979db16e7",
    measurementId: "G-FHDB0L4EW8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;