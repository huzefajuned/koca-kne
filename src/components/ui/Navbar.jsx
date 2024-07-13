import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { navlinks } from "../../utils";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { signin } from "../../firebase/firebase.utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const Signin_ = async () => {
    await signin()
      .then((user) => {
        console.log("user after signin", user);
      })
      .catch((error) => {
        console.log("error on signin", error);
      });
  };

  // // authentication state observer and get user data
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.providerData[0]);
      } else {
        setUser(null);
        // setLoading(false);
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  // Validating user authentication...
  // show hide profle & login  based on user authentication state...
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setIsAuthenticated(true);
  //     } else {
  //       setIsAuthenticated(false);
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);

  // user signout function...
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-[#E2BBE9] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl cursor-pointer  flex flex-col items-center justify-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-16" />
            <span className="text-sm underline bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
              Kishanganj Carnival
            </span>
          </Link>
        </div>
        {/* Navlinks */}
        <div className="hidden md:flex space-x-4">
          {navlinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-white hover:text-gray-400"
            >
              {link.title}
            </Link>
          ))}
        </div>
        {/* Show hide Login. based on user Authentication */}
        <div className="text-white sm:hidden md:block">
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile">
                {/* <span>Profile</sp an> */}
                <img
                  src={user.photoURL}
                  alt="user photoURL"
                  className="rounded-full  h-16 w-16 border-2"
                />
              </Link>
            </div>
          ) : (
            <button
              onClick={() => Signin_()}
              className="text-white border-white border-2 p-2
             rounded-lg hover:text-gray-400"
            >
              Logins
            </button>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-2">
            {navlinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="text-white hover:text-gray-400"
              >
                {link.title}
              </Link>
            ))}
            {user ? (
              <button
                onClick={handleSignOut}
                className="text-white hover:text-gray-400"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => Signin_()}
                className="text-white border-white border-2 hover:text-gray-400"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
