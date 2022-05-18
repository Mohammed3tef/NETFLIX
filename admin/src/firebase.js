import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfdeMQP871ACQKjzF_T8LiN5cjv9dehwI",
  authDomain: "netflex-f2f49.firebaseapp.com",
  projectId: "netflex-f2f49",
  storageBucket: "netflex-f2f49.appspot.com",
  messagingSenderId: "915678601303",
  appId: "1:915678601303:web:1963c9ee0d630e71d70312",
  measurementId: "G-7S86B48SMZ",
};

const app = initializeApp(firebaseConfig);
const storage = app.storage();
export default storage;
