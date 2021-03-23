import firebase from 'firebase/app';
import 'firebase/auth'
import firebaseConfig from './firebase.config';
import { isValidUserInformaton, isValidUser } from "./validation";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
}


function signUp(user){
    let {
        userName,
        userPassword,
        userEmail,
        setError,
        error,
        isAuthenticate,
        setIsAuthenticate,
        setUser
    } = user;

    let errorMessage = {...error};
    errorMessage.signUp = '';

    let newUser = {userName};

    let isValid = isValidUserInformaton(user);

    if(isValid){
        console.log('isValid = ',isValid);
        firebase.auth().createUserWithEmailAndPassword(userEmail,userPassword)
            .then(userCredential =>{
                setUser(newUser);
                setIsAuthenticate(true);
            })
            .catch(e =>{
                errorMessage.signUp = e.message;
                setError(errorMessage);
            })
    }
}

function logIn(user){
    let  {
        email,
        password,
        setUser,
        error,
        setError,
        setIsAuthenticate
    } = user;

    let isValid = isValidUser(user); 
    let errorMessage = {...error};
    errorMessage.logIn = ''
    setError(errorMessage);

    if(isValid){
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(userCredential=>{
                setIsAuthenticate(true);
                let name = userCredential.user.email.split('@')[0];
                setUser({userName : name});
            })
            .catch(e =>{
                errorMessage.logIn = e.message;
                setError(errorMessage);
            })
    }
}


function signInWithGoogle(setUser,setIsAuthenticate){
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result =>{
            let userName = result.user.displayName;
            setUser({userName});
            setIsAuthenticate(true);
        })
        .catch(e =>{
            let errorMessage = e.message;
            console.log(errorMessage);
        })
}

function signInWithFacebook(setUser,setIsAuthenticate) {
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result =>{
            let userName = result.user.displayName;
            setUser({userName});
            setIsAuthenticate(true);
        })
        .catch(e=>{
            console.log(e.message);
        })
}

export {signUp,logIn,signInWithGoogle,signInWithFacebook};