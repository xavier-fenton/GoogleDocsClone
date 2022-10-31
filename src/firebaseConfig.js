// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAtCdQ4QdxBlnZUnnD0TtPUavzbua7YHdg',
  authDomain: 'docsclone-a9859.firebaseapp.com',
  projectId: 'docsclone-a9859',
  storageBucket: 'docsclone-a9859.appspot.com',
  messagingSenderId: '341550836676',
  appId: '1:341550836676:web:4786281c708138b010d291',
  measurementId: 'G-WSRL3VQGNK',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const firebaseConfig = {
  //Your Firebase Data
}
