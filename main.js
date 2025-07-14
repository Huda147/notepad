// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAB7CdAQDQSwJ3Y_zQ-7rk3JjZUMTJgOc4",
    authDomain: "notepad-real-time.firebaseapp.com",
    databaseURL: "https://notepad-real-time-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "notepad-real-time",
    storageBucket: "notepad-real-time.firebasestorage.app",
    messagingSenderId: "882448817426",
    appId: "1:882448817426:web:0440fbe5bfbb1a901fe7cb"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const noteRef = db.ref("sharedNote");

// DOM
const textarea = document.getElementById("note");

// Sync: Load from Firebase
noteRef.on("value", (snapshot) => {
  const data = snapshot.val();
  if (data !== null && textarea.value !== data) {
    textarea.value = data;
  }
});

// Sync: Update to Firebase
textarea.addEventListener("input", () => {
  noteRef.set(textarea.value);
});
