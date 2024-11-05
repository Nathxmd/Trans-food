import { useState } from "react";
import { useOrders } from "./hooks/useOrders";
import { FiShoppingCart } from "react-icons/fi";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  const [isOrdering, setIsOrdering] = useState(false);
  const { addOrder } = useOrders();

  const formatPrice = (price) => {
    if (typeof price === "number") {
      return price.toLocaleString();
    }
    return price;
  };

  const handleAddToOrder = async () => {
    setIsOrdering(true);
    try {
      await addOrder(product);
      alert("Added to orders!");
    } catch (error) {
      alert("Failed to add order:  " + error);
    } finally {
      setIsOrdering(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto">
      <div className="w-full h-64 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "fallback-image-url.jpg"; // Add a fallback image
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {product.name}
        </h3>
        <p className="text-gray-600 text-lg font-medium mb-4">
          Rp {formatPrice(product.price)}
        </p>
        <button
          onClick={handleAddToOrder}
          disabled={isOrdering}
          className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg
                   hover:bg-blue-600 transition-colors duration-200
                   disabled:bg-blue-300 disabled:cursor-not-allowed
                   flex items-center justify-center gap-2"
        >
          {isOrdering ? "Adding..." : "Add to Cart"}
          <FiShoppingCart className="ml-2" />
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
