import { Link } from "react-router-dom";

const CartContext = ({ cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="px-6 py-12 md:px-20 bg-white min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-gray-700 border-b-2 w-fit">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600 mt-20">
          <p>Your cart is empty.</p>
          <Link
            to="/shop"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Go to Shop
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border-b py-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-blue-600 font-bold">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border rounded p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
              <div className="flex justify-between mb-4">
                <span>Total Items:</span>
                <span>{cart.length}</span>
              </div>
              <div className="flex justify-between text-xl font-bold mb-6">
                <span>Total Price:</span>
                <span>₦{totalPrice.toLocaleString()}</span>
              </div>
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded transition"
                onClick={() => alert("Checkout feature coming soon!")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CartContext;
