import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyDrNOHjA1a6aKh3M8xZnZLc3pIUK2537fo",
authDomain: "sri-saradha-transports.firebaseapp.com",
projectId: "sri-saradha-transports",
storageBucket: "sri-saradha-transports.firebasestorage.app",
messagingSenderId: "1038948764750",
appId: "1:1038948764750:web:ba998f945146c73057871f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
db,
collection,
addDoc,
getDocs
};