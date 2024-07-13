import { signInWithGooglePopup } from "./firebase";

// Sign in with Google
export const signin = async () => {
  try {
    const result = await signInWithGooglePopup();
    return result;
  } catch (error) {
    console.log("error in signin", error);
    return error;
  }
};
