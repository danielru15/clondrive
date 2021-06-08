import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBs5QwlPTf5c4n1nUTCbvzZWK2QbtJxHzw",
    authDomain: "drive-d75a7.firebaseapp.com",
    projectId: "drive-d75a7",
    storageBucket: "drive-d75a7.appspot.com",
    messagingSenderId: "563305105697",
    appId: "1:563305105697:web:4a213ffa67bed3526c1660"
  };
firebase.initializeApp(firebaseConfig);


export default firebase