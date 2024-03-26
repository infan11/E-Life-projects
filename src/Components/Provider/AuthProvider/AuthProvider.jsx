import { createContext } from "react";
import { useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth'
import app from "../../../Firebase/firebase.config";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser] = useState([]);
    const [loading , setLoading] = useState(true)
 // sign up

 const signUp = (email , password) => {
    setLoading(true);
    return createUserWithEmailAndPassword( auth,  email , password );
 }
 const googleUser = (email , password) => {
    setLoading(true);
    return signInWithPopup(auth , googleProvider)
 }
    const authInfo = {
            user,
            loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;