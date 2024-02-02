import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGsHqN6gJZDF-OckVH7Ot_v9ObQC71XMA",
  authDomain: "manageapp-fd7d7.firebaseapp.com",
  projectId: "manageapp-fd7d7",
  storageBucket: "manageapp-fd7d7.appspot.com",
  messagingSenderId: "1020817374050",
  appId: "1:1020817374050:web:8a02978699bf57c92eca3b",
  measurementId: "G-ZBKYLRHRP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
