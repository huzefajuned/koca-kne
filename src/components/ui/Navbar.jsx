import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [navLinks] = useState(["Home", "About", "Contact"]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-gray-400"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="text-white">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span>Profile</span>
              <button onClick={handleSignOut} className="hover:text-gray-400">
                Logout
              </button>
            </div>
          ) : (
            <button className="hover:text-gray-400">Login</button>
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
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white hover:text-gray-400"
              >
                {link}
              </a>
            ))}
            {isAuthenticated ? (
              <button
                onClick={handleSignOut}
                className="text-white hover:text-gray-400"
              >
                Logout
              </button>
            ) : (
              <button className="text-white hover:text-gray-400">Login</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
