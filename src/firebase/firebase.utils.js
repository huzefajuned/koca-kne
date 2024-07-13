import { signInWithGooglePopup } from "./firebase";

// Sign in with Google
export const signin = async () => {
  try {
    const result = await signInWithGooglePopup();
    return result;
  } catch (error) {
    throw new error();
    // console.error("Error signing in with Google:", error);
  }
};
