import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDh2XxSY8tE2yPcSIhEdET_ve9gDCzFGL4",
    authDomain: "todoapp-5f148.firebaseapp.com",
    databaseURL: "https://todoapp-5f148.firebaseio.com",
    projectId: "todoapp-5f148",
    storageBucket: "todoapp-5f148.appspot.com",
    messagingSenderId: "825264400759"
  };

  firebase.initializeApp(config);


} catch (e) {


}

// get reference to DB
export const firebaseRef = firebase.database().ref();

// setting 'default' so if other files include this, it won't include the firebaseRef
export default firebase;
