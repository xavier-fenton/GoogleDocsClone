import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  //Your Firebase Data
  apiKey: 'AIzaSyAtCdQ4QdxBlnZUnnD0TtPUavzbua7YHdg',
  authDomain: 'docsclone-a9859.firebaseapp.com',
  projectId: 'docsclone-a9859',
  storageBucket: 'docsclone-a9859.appspot.com',
  messagingSenderId: '341550836676',
  appId: '1:341550836676:web:4786281c708138b010d291',
  measurementId: 'G-WSRL3VQGNK',
}

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
