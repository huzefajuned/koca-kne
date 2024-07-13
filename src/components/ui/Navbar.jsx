import { useState, useEffect, useContext } from "react";
import { auth } from "../../firebase/firebase";
import { navlinks } from "../../utils";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import user_avatar from "../../assets/user_avatar.png";
import { signin } from "../../firebase/firebase.utils";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * authentication state observer and get user data
   */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user?.providerData[0]);
      } else {
        setUser(null);
        // setLoading(false);
      }
      setIsMenuOpen(false);
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  return (
    <nav className=" text-black bg-transparent p-4 sticky  top-0 backdrop-blur-sm  border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" font-bold text-xl cursor-pointer  flex flex-col items-center justify-center">
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
            <Link key={link.id} to={link.path} className=" hover:text-gray-400">
              {link.title}
            </Link>
          ))}
        </div>
        {/* Show hide Login. based on user Authentication */}
        <div className=" hidden sm:hidden lg:block">
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile">
                <img
                  src={user.photoURL || user_avatar}
                  alt="user photoURL"
                  className="rounded-full  h-16 w-16 border-2"
                />
              </Link>
            </div>
          ) : (
            <button
              onClick={() => signin()}
              className=" bg-orange-400 text-white border-white border-2  px-5 py-2
             rounded-lg hover:text-white hover:bg-black"
            >
              Login
            </button>
          )}
        </div>
        {/* Hamburger  */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
            {isMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
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
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-orange-500 text-white flex flex-col  items-center justify-center h-screen ">
          <div className="flex flex-col space-y-4 mt-2">
            {navlinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className=" hover:text-gray-400"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {link.title}
              </Link>
            ))}
            {user ? (
              <div className="flex items-center space-x-4 ">
                <Link
                  to="/profile"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <img
                    src={user.photoURL || user_avatar}
                    alt="user photoURL"
                    className="rounded-full  h-16 w-16 border-2"
                  />
                </Link>
              </div>
            ) : (
              <button
                onClick={() => signin()}
                className=" bg-orange-400 text-white border-white border-2  px-5 py-2
             rounded-lg hover:text-white hover:bg-black"
              >
                Logins
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
