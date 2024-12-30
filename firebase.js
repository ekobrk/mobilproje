// Firebase'i başlatmak için Firebase Config'i kullanıyoruz
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// FireStore
import 'firebase/compat/firestore';

// Kendi firebaseConfig değerlerinizi kopyala/yapıştır yapın. Yoksa uygulama çalışmaz.
const firebaseConfig = {
  apiKey: "AIzsLviaSyD5t01N_7SkA6G9VF17hGw4uLaqZ2w",
  authDomain: "todox-4bbf6.firebaseapp.com",
  projectId: "todox-4bbf6",
  storageBucket: "todox-4bbf6.firebasestorage.app",
  messagingSenderId: "508849849940",
  appId: "1:508849849940:web:a6390d1c15364eb0a363b3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

// Firebase Storeage için
export const firestore = firebase.firestore();