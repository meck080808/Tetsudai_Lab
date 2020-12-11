import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

if (!firebase.apps.length) {
  firebase.initializeApp({
    // TODO: insert configuration
    apiKey: "AIzaSyCjCc9QNJM8LyjwHJk_utfNF3vzVrx2Iu0",
    authDomain: "tetsudai-lab.firebaseapp.com",
    projectId: "tetsudai-lab",
    storageBucket: "tetsudai-lab.appspot.com",
    messagingSenderId: "238848030871",
    appId: "1:238848030871:web:f24add1595f9cd8c8651d2"
  })
}

export default firebase
