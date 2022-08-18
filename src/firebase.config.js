import {getApp, getApps, initializeApp} from 'firebase/app' 
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAbbSwiRER03GvuEKstHyp_l7y5pee0XCo",
    authDomain: "restaurantapp-17566.firebaseapp.com",
    databaseURL: "https://restaurantapp-17566-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-17566",
    storageBucket: "restaurantapp-17566.appspot.com",
    messagingSenderId: "806795842745",
    appId: "1:806795842745:web:9ca9ad3fb815ae3db0b768"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export  {app, firestore, storage};
