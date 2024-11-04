import { FiPlusCircle } from "react-icons/fi";
import PropTypes from "prop-types";

function FoodCard({ item }) {
  return (
    <div className="bg-white text-black rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <div className="text-center">
        <h3 className="font-semibold">{item.name}</h3>
        <p>{item.price}</p>
      </div>
      <button className="mt-4 text-red-500">
        <FiPlusCircle size={24} />
      </button>
    </div>
  );
}

// Validasi item menggunakan PropTypes
FoodCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodCard;
