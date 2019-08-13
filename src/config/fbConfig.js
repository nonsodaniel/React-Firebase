import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyColrLAvjYbzn1xFEto6apcmxogS1aOOlU",
    authDomain: "dashboard-ac060.firebaseapp.com",
    databaseURL: "https://dashboard-ac060.firebaseio.com",
    projectId: "dashboard-ac060",
    storageBucket: "",
    messagingSenderId: "374657193798",
    appId: "1:374657193798:web:086c7176cc9b9312"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;