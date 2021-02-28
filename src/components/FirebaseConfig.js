import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAvd_lbxg2cSilkQAzBiELLw9rBGkYQR8k',
  authDomain: 'fir-15c25.firebaseapp.com',
  databaseURL: 'https://fir-15c25.firebaseio.com',
  projectId: 'fir-15c25',
  storageBucket: 'fir-15c25.appspot.com',
  messagingSenderId: '16436327154',
  appId: '1:16436327154:web:0f9e5288d049de527d566b',
  measurementId: 'G-HZP48B7H40',
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
