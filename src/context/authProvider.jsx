import { useContext, useReducer } from "react";
import { AuthContext } from "./authContext";

import {useAuthentication} from "../customHooks/useAuthentication";


const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};
const authReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_SIGNIN_START":
      return {
        currentUser: null,
        error: null,
        loading: true,
      };
    case "EMAIL_SIGNIN_SUCCESS":
      return {
        currentUser: action.payload,
        error: null,
        loading: false,
      };
    case "EMAIL_SIGNIN_FAILURE":
      return {
        currentUser: null,
        error: action.payload,
        loading: false,
      };
    case "EMAIL_SIGNUP_START":
      return {
        currentUser: null,
        error: null,
        loading: true,
      };
    case "EMAIL_SIGNUP_SUCCESS":
      return {
        currentUser: action.payload,
        error: null,
        loading: false,
      };
    case "EMAIL_SIGNUP_FAILURE":
      return {
        currentUser: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const { handleEmailSignIn, handleEmailSignUp, handleSignOut } =
    useAuthentication(dispatch);
  return (
    <AuthContext.Provider
      value={{ authState, handleEmailSignIn, handleEmailSignUp, handleSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
