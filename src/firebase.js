import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDHVGtzrWMOVRfX66qahU2-gHuizMxKL8I",
  authDomain: "linkedin-clone-dce5a.firebaseapp.com",
  projectId: "linkedin-clone-dce5a",
  storageBucket: "linkedin-clone-dce5a.appspot.com",
  messagingSenderId: "988629516318",
  appId: "1:988629516318:web:3dcbf8384e37eb0f58ae0f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};