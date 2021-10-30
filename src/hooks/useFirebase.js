import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuth from '../Pages/Firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from "react";

const provider = new GoogleAuthProvider();

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleSignInProvider = () => {
        // return signInWithPopup(auth, provider);
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false)
        })
    }, [auth]);

    return {
        user,
        logOut,
        isLoading,
        googleSignInProvider
    }
};

export default useFirebase;