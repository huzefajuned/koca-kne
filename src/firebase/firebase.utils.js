import { signOut } from "firebase/auth";
import { auth, signInWithGooglePopup } from "./firebase";

// Sign in with Google
export const signin = async () => {
  try {
    const result = await signInWithGooglePopup();
    return result;
  } catch (error) {
    throw new error();
  }
};

// user signout function...
export const handleSignOut = () => {
  signOut(auth);
};
