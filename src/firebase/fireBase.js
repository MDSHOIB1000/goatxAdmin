
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCLcimVcCq_VSfqsp-UyaP1FLRiiFg3eBk",
  authDomain: "paypanda-34650.firebaseapp.com",
  projectId: "paypanda-34650",
  storageBucket: "paypanda-34650.appspot.com",
  messagingSenderId: "762436248429",
  appId: "1:762436248429:web:d46175acc4dd9b48b27064",
  measurementId: "G-M264Q8NPWP"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);


