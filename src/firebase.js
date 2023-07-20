import { getApp, getApps, initializeApp ,} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyBxpMxLJiZ6QYsxwlQZKoK4GBwfBTBwwSE",
  authDomain: "amzon-to.firebaseapp.com",
  databaseURL: "https://amzon-to-default-rtdb.firebaseio.com",
  projectId: "amzon-to",
  storageBucket: "amzon-to.appspot.com",
  messagingSenderId: "674455623688",
  appId: "1:674455623688:web:dd121ac544c66dd24319bd"
};
const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db  };
