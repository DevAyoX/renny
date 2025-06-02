import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    navigate("/checkout");
  };

  const handleClearCart = () => {
    setCart([]); // Clear all items from cart
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-4 flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>₦{item.price.toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 font-bold text-xl">
            Total: ₦{totalPrice.toLocaleString()}
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={handleClearCart}
              className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
