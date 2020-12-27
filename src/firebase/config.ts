import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJIMONMD8-pt1VOGKT36bv5VxmJwN7SLo",
  authDomain: "sql-demo-6529d.firebaseapp.com",
  projectId: "sql-demo-6529d",
  storageBucket: "sql-demo-6529d.appspot.com",
  messagingSenderId: "963678522663",
  appId: "1:963678522663:web:8070e30aaed4fe03d0ed02",
  measurementId: "G-0SPSVGPHPH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();