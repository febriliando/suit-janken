import { initializeApp } from 'firebase';

const firebase = initializeApp({
  apiKey: "AIzaSyATPh-7sZPTJyHQhKPx7MDUyCuTKvmW5Os",
  authDomain: "suit-janken.firebaseapp.com",
  databaseURL: "https://suit-janken.firebaseio.com",
  projectId: "suit-janken",
  storageBucket: "suit-janken.appspot.com",
  messagingSenderId: "540357454573"
})

export const db = firebase.database();
export const userRef = db.ref('User')
export default firebase 