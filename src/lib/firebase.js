import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-45e9f.firebaseapp.com",
  projectId: "reactchat-45e9f",
  storageBucket: "reactchat-45e9f.appspot.com",
  messagingSenderId: "826171295428",
  appId: "1:826171295428:web:10f56e3b1abe48daf26b91"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()