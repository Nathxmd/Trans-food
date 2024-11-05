import { usePagination } from "./hooks/usePagination";
import ProductCard from "./ProductCard";
import Pagination from "./components/common/pagination";

const foodItems = [
  { id: 1, name: "Rawon Malang", price: 23000, image: "rawon.jpg" },
  { id: 2, name: "Nasi Gudeg", price: 16000, image: "gudeg.jpeg" },
  { id: 3, name: "Tempe Mendoan", price: 5000, image: "mendoan.jpeg" },
  { id: 4, name: "Siomay Bandung", price: 11000, image: "siomay.jpg" },
  { id: 5, name: "Klepon Hijau", price: 6000, image: "klepon.jpeg" },
  { id: 6, name: "Ayam Kalasan", price: 27000, image: "kalasan.jpeg" },
];

function FoodList() {
  const { currentPage, totalPages, currentItems, handlePageChange } =
    usePagination(foodItems);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {currentItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default FoodList;
