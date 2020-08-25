import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyAK_z_uGmyQk8YUnXTMGIZhSdH7lKGkS4U',
  authDomain: 'cloth-shop-db-de522.firebaseapp.com',
  databaseURL: 'https://cloth-shop-db-de522.firebaseio.com',
  projectId: 'cloth-shop-db-de522',
  storageBucket: 'cloth-shop-db-de522.appspot.com',
  messagingSenderId: '712373327639',
  appId: '1:712373327639:web:aea325023edfd701b68952'
})

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
