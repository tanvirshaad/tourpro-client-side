import initializeAuthentication from '../components/Firebase/firebase.init';

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        signOut(auth).then(() => {});
    };

    return {
        user,
        setError,
        error,
        signInWithPopup,
        signInUsingGoogle,
        logOut,
    };
};

export default useFirebase;
