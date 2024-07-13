// Profile.js
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import Loader from "./ui/Loader";
import { handleSignOut } from "../firebase/firebase.utils";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import user_avatar from "../assets/user_avatar.png";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.providerData[0]);
      } else {
        toast.error("Please login! 😇😇");
        navigate("/");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className=" h-full w-full flex justify-center items-center p-5">
      <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-md justify-center ">
        <h1 className="text-2xl font-bold text-center mb-4">Profile</h1>
        {user && (
          <div className="flex flex-col items-center">
            <img
              src={user.photoURL || user_avatar}
              alt="profile pic"
              className="rounded-full w-24 h-24 mb-4 border-2 border-gray-300"
            />
            <span className="text-lg font-semibold">
              Name: {user.displayName}
            </span>
            <span className="text-gray-600">Email: {user.email}</span>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-6 py-2 my-5 rounded-lg hover:bg-red-600 hover:text-gray-200 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
