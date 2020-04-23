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
//let app = Firebase.initializeApp(config);
//export const db = Firebase.database();
export default Firebase;

