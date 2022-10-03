import React from "react";
import GoogleButton from "react-google-button";

import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const style = {
  wrapper: `flex justify-center`
};

const SignIn = () => {
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default SignIn;
