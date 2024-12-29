import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

export const useAuthentication = (dispatch) => {
    const navigate = useNavigate();
    //email sign in
    const handleEmailSignIn = (email, password) => {
        console.log("hi from signini")
        dispatch({ type: "EMAIL_SIGNIN_START" });
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch({
                    type: "EMAIL_SIGNIN_SUCCESS",
                    payload: userCredential.user,
                });
                navigate("/")
                alert("signin successful")
            })
            .catch((error) => {
                // switch (error.code) {
                //     case "auth/user-not-found":
                //         alert("No user found with this email. Please sign up.");
                //         navigate("/signup");
                //         break;
                //     case "auth/wrong-password":
                //         alert("Incorrect password. Please try again.");
                //         break;
                //     case "auth/invalid-email":
                //         alert("The email address is badly formatted.");
                //         break;
                //     case "auth/invalid-credential":
                //         alert("The credentials provided are invalid.");
                //         break;
                //     default:
                //         alert("An error occurred. Please try again later.");
                //         console.error("Error code:", error.code, "Message:", error.message);
                // }
                console.log(error.code)
                dispatch({ type: "EMAIL_SIGNIN_FAILURE", payload: error.message });

            });
    };
    //email sign up
    const handleEmailSignUp = (email, password) => {
        dispatch({ type: "EMAIL_SIGNUP_START" });
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch({
                    type: "EMAIL_SIGNUP_SUCCESS",
                    payload: userCredential.user,
                });
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/email-already-in-use":
                        alert("Looks like you already signed up, Please sign in!")
                        navigate("/signin");
                        break;
                    default:
                        return;
                }
                dispatch({ type: "EMAIL_SIGNUP_FAILURE", payload: error.message });
            });
    };
    //email sign out

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setStoredAuth(false);
                localStorage.removeItem("auth");
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };
    return { handleEmailSignIn, handleEmailSignUp, handleSignOut };
}