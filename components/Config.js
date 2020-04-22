// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDwUMufirY6D9012DfSvKax0UsBzXe01go',
//   authDomain: 'fir-db-580cd.firebaseapp.com',
//   databaseURL: 'https://fir-db-580cd.firebaseio.com',
//   projectId: 'fir-db-580cd',
//   storageBucket: 'fir-db-580cd.appspot.com',
//   messagingSenderId: '177428321906',
//   appId: '1:177428321906:web:3989877db6017c6e67d4eb',
//   //measurementId: 'G-EGT8K9NXC4',
// };
// firebase.initializeApp(firebaseConfig);

//  export default firebase;

import Firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyDwUMufirY6D9012DfSvKax0UsBzXe01go',
  authDomain: 'fir-db-580cd.firebaseapp.com',
  databaseURL: 'https://fir-db-580cd.firebaseio.com',
  projectId: 'fir-db-580cd',
  storageBucket: 'fir-db-580cd.appspot.com',
  messagingSenderId: '177428321906',
  appId: '1:177428321906:web:018b1510c01a64fd67d4eb',
  measurementId: 'G-JEBK86C1MQ',
};
Firebase.initializeApp(config);
//let register = Firebase.initializeApp(config);
export default Firebase;
//export const db = app.database();
