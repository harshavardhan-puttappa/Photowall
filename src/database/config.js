import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAjdgA8nA2M6RjIlbxl1wgflo6R92E0qAU",
  authDomain: "photowall-b15d8.firebaseapp.com",
  databaseURL: "https://photowall-b15d8.firebaseio.com",
  projectId: "photowall-b15d8",
  storageBucket: "photowall-b15d8.appspot.com",
  messagingSenderId: "834320791549",
  appId: "1:834320791549:web:0a0ec867fc10af22fb8b94",
  measurementId: "G-DFHL49JJ3L",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
