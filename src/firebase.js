import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyATPh-7sZPTJyHQhKPx7MDUyCuTKvmW5Os",
  authDomain: "suit-janken.firebaseapp.com",
  databaseURL: "https://suit-janken.firebaseio.com",
  projectId: "suit-janken",
  storageBucket: "suit-janken.appspot.com",
  messagingSenderId: "540357454573"
})

export const db = app.database();
export const userRef = db.ref('User')