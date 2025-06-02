import {Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-gray-700 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} Renny Collection. All rights reserved.
        </p>

        <ul className="flex space-x-6 mt-4 md:mt-0 text-sm cursor-pointer">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/Shop" className="hover:text-blue-600">Shop</Link>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
