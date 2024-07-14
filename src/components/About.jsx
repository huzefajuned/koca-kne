import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl  mb-6">Welcome to Koca Season 2</h1>
        <p className="text-xl mb-4">
          Koca Season 2 is a platform for dancers, artists, models, and fashion
          influencers to showcase their talent. We believe in providing
          opportunities for individuals to express their creativity and passion.
        </p>
        <p className="text-xl mb-4">
          Join us in celebrating talent and creativity. Whether you're a dancer,
          artist, model, or fashion influencer, Koca Season 2 is the place to
          be.
        </p>
        <p className="text-xl mb-4">
          We also host quiz competitions to engage and challenge our community.
          Stay tuned for exciting events and opportunities to shine.
        </p>
        <div className="mt-8">
          <Link to="/events">
            <a className="px-6 py-3 bg-white text-blue-500 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Explore Events
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
