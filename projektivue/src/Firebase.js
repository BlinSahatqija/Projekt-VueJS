import firebase from 'firebase';
import store from './store';

const settings = {timestampsInSnapshots:true};

const config = {
    apiKey: "AIzaSyBHjAUTvTLK_jSgMKYiDUEOFefJ2c651cY",
    authDomain: "projektiexample.firebaseapp.com",
    databaseURL: "https://projektiexample-default-rtdb.firebaseio.com",
    projectId: "projektiexample",
    storageBucket: "projektiexample.appspot.com",
    messagingSenderId: "973407722910",
    appId: "1:973407722910:web:c2b1080ab61fb258058a8f",
    measurementId: "G-CXKG7QEBGV"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);
firebase.auth().onAuthStateChanged(user=>{
    store.dispatch("fetchUser", user);
});

firebase.getCurrentUser = ()=>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
            unsubscribe();
            resolve(user);
        },reject);
    })
};

export default firebase;
