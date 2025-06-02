import { useState } from "react";
import { Link } from "react-router-dom";

// SVG Cart Icon component
const CartIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 5h12"
    ></path>
    <circle cx="7" cy="21" r="1"></circle>
    <circle cx="17" cy="21" r="1"></circle>
  </svg>
);

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-200 font-extrabold w-full sticky top-0 z-40 overflow-hidden">
      <nav className="flex items-center m-4 justify-between h-16">
        <h1>
          <span className="text-blue-500 text-3xl">ℛ𝑒𝓃𝓃𝓎</span>{" "}
          <span className="text-gray-700 text-2xl">𝒞𝑜𝓁𝓁𝑒𝒸𝓉𝒾𝑜𝓃</span>
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-blue-500"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex text-gray-800 space-x-5 items-center">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-blue-600">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Cart button desktop */}
        <button className="hidden md:flex items-center space-x-2 font-bold text-2xl bg-blue-500 rounded-md w-24 text-white justify-center">
          <Link to="/cart" className="flex items-center">
            <CartIcon className="w-6 h-6" />
            <span className="sr-only">Cart</span>
            {cartCount > 0 && (
              <span className="ml-2 bg-red-600 rounded-full px-2 text-sm font-semibold">
                {cartCount}
              </span>
            )}
          </Link>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-blue-100 p-4 space-y-3 text-gray-800">
          <li>
            <Link to="/" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <button className="bg-blue-500 text-white w-full rounded-md py-2 flex items-center justify-center" onClick={() => setMenuOpen(false)}>
              <Link to="/cart" className="flex items-center w-full justify-center">
                <CartIcon className="w-6 h-6" />
                <span className="sr-only">Cart</span>
                {cartCount > 0 && (
                  <span className="ml-2 bg-red-600 rounded-full px-2 text-sm font-semibold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
