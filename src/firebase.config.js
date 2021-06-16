import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCzEqbErLmz04PJselnapHlY8mLwsVw7A4",
    authDomain: "globant-react-1f5fc.firebaseapp.com",
    projectId: "globant-react-1f5fc",
    storageBucket: "globant-react-1f5fc.appspot.com",
    messagingSenderId: "63570784912",
    appId: "1:63570784912:web:2ba81e7ac240a408739e15"
  }; 
  firebase.initializeApp(firebaseConfig);
  export default firebase;