import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBziCrLX-AGxOHlK2MMB24r2XTnvI15D98",
  authDomain: "linkedin-clone-d8f7b.firebaseapp.com",
  projectId: "linkedin-clone-d8f7b",
  storageBucket: "linkedin-clone-d8f7b.appspot.com",
  messagingSenderId: "616585502465",
  appId: "1:616585502465:web:c3d9ba108603e169f04500"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;