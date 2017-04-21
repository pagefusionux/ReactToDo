import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    //projectId: "todoapp-5f148",
    storageBucket: process.env.STORAGE_BUCKET,
    //messagingSenderId: "825264400759"
  };

  firebase.initializeApp(config);


} catch (e) {


}

// get reference to DB
export const firebaseRef = firebase.database().ref();

// setting 'default' so if other files include this, it won't include the firebaseRef
export default firebase;
