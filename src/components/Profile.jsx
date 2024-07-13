// Profile.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import Loader from "./ui/Loader";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.providerData[0]);
      } else {
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
    <div className="bg-gray-100 h-full w-full flex justify-center items-center p-5">
      <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-md justify-center ">
        <h1 className="text-2xl font-bold text-center mb-4">Profile</h1>
        {user && (
          <div className="flex flex-col items-center">
            <img
              src={user.photoURL}
              alt=""
              className="rounded-full w-24 h-24 mb-4 border-2 border-gray-300"
            />
            <span className="text-lg font-semibold">
              Name: {user.displayName}
            </span>
            <span className="text-gray-600">Email: {user.email}</span>
            <button
              onClick={() => {}}
              className="hover:text-gray-400 bg-red-500 px-4 my-5"
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
