import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-jODDGQuOaHOvSWikF3M_piP3FIxr9Pk",
    authDomain: "style-db-f4873.firebaseapp.com",
    databaseURL: "https://style-db-f4873.firebaseio.com",
    projectId: "style-db-f4873",
    storageBucket: "style-db-f4873.appspot.com",
    messagingSenderId: "548223586967",
    appId: "1:548223586967:web:03d4b7dd162adf66adcfd2",
    measurementId: "G-F5TK7HYS9N"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating the user',error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;