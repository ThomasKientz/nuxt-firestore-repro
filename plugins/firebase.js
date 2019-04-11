import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCzRT16spzxaM62uXw2lQ48GT5zncQ8sss",
  authDomain: "issue-repro.firebaseapp.com",
  databaseURL: "https://issue-repro.firebaseio.com",
  projectId: "issue-repro",
  storageBucket: "issue-repro.appspot.com",
  messagingSenderId: "765316448809"
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

export default firebaseApp;
export const db = firebaseApp.firestore();
