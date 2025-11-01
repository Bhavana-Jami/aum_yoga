import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useEffect } from "react";

export const useAuthentication = (dispatch) => {
    // persist user session
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // dispatch({ type: "AUTH_READY", payload: user });
        });
        return () => unsubscribe();
    }, []);
    //email sign in
    const handleEmailSignIn = (email, password) => {
        dispatch({ type: "EMAIL_SIGNIN_START" });
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch({
                    type: "EMAIL_SIGNIN_SUCCESS",
                    payload: userCredential.user,
                });
            })
            .catch((error) => {
                dispatch({ type: "EMAIL_SIGNIN_FAILURE", payload: error.message });
            });
    };
    //email sign up
    const handleEmailSignUp = async (email, password) => {
        dispatch({ type: "EMAIL_SIGNUP_START" });

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            dispatch({
                type: "EMAIL_SIGNUP_SUCCESS",
                payload: userCredential.user,
            });
        } catch (error) {
            dispatch({ type: "EMAIL_SIGNUP_FAILURE", payload: error.message });
        }
    };

    //email sign out
    const handleSignOut = () => {
        dispatch({ type: "EMAIL_SIGNOUT_START" });
        signOut(auth).then((user) => {
            dispatch({
                type: "EMAIL_SIGNOUT_SUCCESS",
                payload: user.user,
            });
        }).catch((error) => {
            dispatch({ type: "EMAIL_SIGNOUT_FAILURE", payload: error.message });

        });
    };
    return { handleEmailSignIn, handleEmailSignUp, handleSignOut };
}