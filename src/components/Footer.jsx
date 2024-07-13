const Address = () => (
  <div>
    <h2 className="font-bold text-lg mb-2">Address</h2>
    <p>1234 Street Name</p>
    <p>City, State, ZIP</p>
  </div>
);

const Contact = () => (
  <div>
    <h2 className="font-bold text-lg mb-2">Contact</h2>
    <p>Email: example@example.com</p>
    <p>Phone: (123) 456-7890</p>
  </div>
);

const About = () => (
  <div>
    <h2 className="font-bold text-lg mb-2">About</h2>
    <p>We are a company dedicated to providing the best services.</p>
  </div>
);

const MoreLinks = () => (
  <div>
    <h2 className="font-bold text-lg mb-2">More Links</h2>
    <ul>
      <li>
        <a href="#" className="text-gray-400 hover:text-white">
          Link 1
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-400 hover:text-white">
          Link 2
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-400 hover:text-white">
          Link 3
        </a>
      </li>
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8  w-full">
      <div className=" mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <Address />
          <Contact />
          <About />
          <MoreLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
