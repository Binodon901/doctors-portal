import { initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCLcHFvO1aosCJLY6aNxILarFgjVmr67-8",
  authDomain: "doctor-portal-aaf43.firebaseapp.com",
  projectId: "doctor-portal-aaf43",
  storageBucket: "doctor-portal-aaf43.appspot.com",
  messagingSenderId: "851033286797",
  appId: "1:851033286797:web:b753c402a23cf798815ac4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(app.length===0)
  initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);