import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopPreview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section id="shop-preview" className="px-6 md:px-20 py-12 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-gray-700 ">Shop Preview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-md p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {product.title}
            </h3>
            <p className="text-blue-600 font-bold mb-4">${product.price}</p>

            {/* Link to Shop page */}
            <Link
              to="/shop"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopPreview;
