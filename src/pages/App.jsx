import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import FoodList from "../components/produtcs/FoodList";
import OrdersPage from "../pages/OrdersPage";
import { OrderProvider } from "../context/OrderProvider";
// import "./App.css";

function App() {
  return (
    <OrderProvider>
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<FoodList />} />
              <Route path="/orders" element={<OrdersPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </OrderProvider>
  );
}

export default App;
