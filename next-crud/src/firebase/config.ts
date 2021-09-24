import firebase from 'firebase';
import 'firebase/firestore';

//verificaçao de inicializaçaão 
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PULBIC_FIREVASE_API_KEY,
        authDomain: process.env.NEXT_PULBIC_FIREVASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PULBIC_FIREVASE_PROJECT_ID

    })
}

export default firebase