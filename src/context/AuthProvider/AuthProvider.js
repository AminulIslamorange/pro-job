import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';


const auth=getAuth(app);


export const AuthContext=createContext();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState('null');
    


    const providerLogin = (provider) => {
        
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
      
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {alert('clicked')
      signOut();
        
     
    }



    const authInfo={
        user,
        providerLogin,
        createUser,signIn,logOut ,setUser,auth
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;

