// Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import { useEffect, useState } from "react";
import Loader from "./ui/Loader";
import Footer from "./Footer";
import toast from "react-hot-toast";
import { auth } from "../firebase/firebase";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  const { user, setUser } = useContext(AuthContext);

  console.log("user inide Layout", user);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user?.providerData[0]);
          toast.success(
            `welcome  Back ${user?.displayName} to Koca Season 2 👋 🎉 `
          );
        } else {
          toast.success("welcome  to Koca Season 2 👋 🎉.");
        }
      });
      return () => {
        unsubscribe();
      };
    }, 2000);

    // Clean up the timer on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
      {loading && <Loader />}
    </div>
  );
};

export default Layout;
