/* eslint-disable turbo/no-undeclared-env-vars */
import { initializeApp } from 'firebase/app'
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
} from 'firebase/auth'
import {
  serverTimestamp as getServerTimestamp,
  getFirestore,
} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
auth.languageCode = 'ja'

const db = getFirestore(app)
const serverTimestamp = getServerTimestamp()
const storage = getStorage(app)

setPersistence(auth, browserSessionPersistence)

export { auth, db, serverTimestamp, storage }
