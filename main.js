// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBSJbHZC_EN3BL600vtec-cdncPDnBofUE",
    authDomain: "realtime-notepad-huda147.firebaseapp.com",
    databaseURL: "https://realtime-notepad-huda147-default-rtdb.firebaseio.com",
    projectId: "realtime-notepad-huda147",
    storageBucket: "realtime-notepad-huda147.firebasestorage.app",
    messagingSenderId: "1072103737097",
    appId: "1:1072103737097:web:397fc32843cda3cf7f35d8"
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