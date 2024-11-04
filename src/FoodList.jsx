import FoodCard from "./FoodCard";

const foodItems = [
  { name: "Rawon Malang", price: "Rp 23.000", image: "rawon.jpg" },
  { name: "Nasi Gudeg", price: "Rp 16.000", image: "gudeg.jpeg" },
  { name: "Tempe Mendoan", price: "Rp 5.000", image: "mendoan.jpeg" },
  { name: "Siomay Bandung", price: "Rp 11.000", image: "siomay.jpg" },
  { name: "Klepon Hijau", price: "Rp 6.000", image: "klepon.jpeg" },
  { name: "Ayam Kalasan", price: "Rp 27.000", image: "kalasan.jpeg" },
];

function FoodList() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 overflow-auto">
      {foodItems.map((item, index) => (
        <FoodCard key={index} item={item} />
      ))}
    </div>
  );
}

export default FoodList;
