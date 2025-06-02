import Footer from "../components/Footer";
import CropTop1 from "../images/croptop.jpg"; 
import Denim from "../images/denim.jpg";
import Hoodie from "../images/hoodie.jpg";
import Vintage from "../images/vintage2.jpg";
import Gang from "../images/Gang3.jpg";
import hoodie2 from "../images/hoodie3.jpg";
import Airforce from "../images/Black.jpg";
import Airforce2 from "../images/4.jpg";
import short from "../images/Shorts2.jpg";

const products = [
  {
    id: 1,
    name: "Shin HUl crop top",
    image: CropTop1, 
    price: 13960,
  },
  {
    id: 2,
    name: "Two Tone Raw Cut Denim Jacket",
    image: Denim,
    price: 11657,
  },
  {
    id: 3,
    name: "Black hoodie for men",
    image: Hoodie,
    price: 6750,
  },
  {
    id: 4,
    name: "Black and white hoodie",
    image: hoodie2,
    price: 23302,
  },
  {
    id: 5,
    name: "Black Gangster top",
    image: Gang,
    price: 19850,
  },
  {
    id: 6,
    name: "Vintage Denim Jacket",   
    image: Vintage,
    price: 22500,
  },
  {
    id: 7,
    name: "Nike air trainer teal white black",   
    image: Airforce,
    price: 22500,
  },
  {
    id: 8,
    name: "Nike Air",   
    image: Airforce2,
    price: 22500,
  },
  {
    id: 9,
    name: "Mickey shorts",   
    image: short,
    price: 22500,
  }
];

const Shop = ({ cart, setCart }) => {
  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in your cart!`);
    }
  };

  return (
    <>
      <section id="shop" className="px-6 py-12 md:px-20 bg-white">
        <h2 className="text-4xl font-bold mb-8 text-gray-700 border-b-2 w-fit ">
          Shop from our Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-md p-4 flex flex-col items-center hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {product.name}
              </h3>
              <p className="text-blue-600 font-bold mt-2">
                ₦{product.price.toLocaleString()}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
