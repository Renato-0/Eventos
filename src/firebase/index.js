
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { LocalStorage } from 'quasar'

const firebaseConfig = {
  apiKey: "AIzaSyDhaxFkT8k6LRbwGcspz_fSc6jnEm4Fk8I",
  authDomain: "eventos-738a7.firebaseapp.com",
  projectId: "eventos-738a7",
  storageBucket: "eventos-738a7.appspot.com",
  messagingSenderId: "1040677807076",
  appId: "1:1040677807076:web:56758aca411f914439ddf1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
 if (user) {
  LocalStorage.set('user', user)
 } else {
  LocalStorage.remove('user')
 }
});