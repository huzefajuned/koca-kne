import { useState, useEffect } from "react";
import "./App.css";
import { signInWithGooglePopup, auth } from "./firebase/firebase";
import User from "./components/ui/User";
import Loader from "./components/Loader";
import { Outlet } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sign in with Google
  const signin = async () => {
    try {
      const result = await signInWithGooglePopup();
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // authentication state observer and get user data
  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {!user ? (
          <button
            onClick={signin}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          >
            Login
          </button>
        ) : (
          <User user_info={user} />
        )}
        {loading && <Loader />}
      </div>

      <Outlet />
    </>
  );
}

export default App;
