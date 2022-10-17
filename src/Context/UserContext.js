import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.init';




 export const AuthContext = createContext();
 const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user,setUser] = useState({});
    const  [loading,setLoding] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const sigIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    const signInWithGoogle = ()=>{
        return signInWithPopup (auth,googleProvider)

    }
    const logOut = () =>{
        return sigIn(auth);
    }
    //  why are doing this 
    useEffect(()=>{
      const unsubscribe =   onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoding(false);
            console.log('auth starat changed',currentUser);

        })
        return () =>{
            unsubscribe();
        }
        
    },[])
    // const authInfo = {user:create} 
    const authInfo = {user,loading, createUser,sigIn, logOut,signInWithGoogle}
    return (
       <AuthContext.Provider  value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;