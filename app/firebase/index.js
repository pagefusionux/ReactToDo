import firebase from 'firebase';

try {
  // Initialize Firebase
  const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
  };

  firebase.initializeApp(config);


} catch (e) {


}

// set up OAuth with Github
export const githubProvider = new firebase.auth.GithubAuthProvider();

// get reference to DB
export const firebaseRef = firebase.database().ref();

// setting 'default' so if other files include this, it won't include the firebaseRef
export default firebase;
