import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// Force user to select an account
provider.setCustomParameters({
  prompt: "select_account",
});

// Initialize Firebase Auth
const auth = getAuth(firebaseApp);

// Function to sign in with Google using a popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Export auth for use in other parts of your application
export { auth };
