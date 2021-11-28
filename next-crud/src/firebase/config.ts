import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: process.env.NEXT_PULBIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PULBIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PULBIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
