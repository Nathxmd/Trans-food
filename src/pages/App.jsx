// src/pages/App.jsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import FoodList from "../components/produtcs/FoodList";
import OrdersPage from "../pages/OrdersPage";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { OrderProvider } from "../context/OrderProvider";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <div className="flex h-screen bg-gray-900 text-white">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<FoodList />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
              </Routes>
            </main>
          </div>
        </div>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
