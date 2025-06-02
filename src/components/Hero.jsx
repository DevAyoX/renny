import image from "../images/bane.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-cream-300 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12"
    >
      <div id="hero-intro" className="text-center md:text-left md:w-1/2 mb-4.5">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-700 leading-tight">
          Welcome to the home of the best fashion for you
        </h1>
        <p className="my-4 text-gray-700 text-lg font-semibold">
          Discover timeless pieces tailored to your unique style.
        </p>
        <Link
          to="/Shop"
          className="inline-block mt-4 bg-blue-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Shop Now
        </Link>
      </div>

      <img
        src={image}
        alt="hero-banner"
        className="w-98 md:w-75 max-h-[500px] object-cover mb-8 md:mb-0 ml-0 md:ml-18 rounded-md mt-3.5"
      />
    </section>
  );
};

export default Hero;
