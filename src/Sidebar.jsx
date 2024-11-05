import { FiHome, FiLogOut, FiShoppingBag, FiMenu } from "react-icons/fi";
import logo from "./assets/logo.svg";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-black text-white w-64 p-4 transform h-screen ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-64 transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center space-x-2 mb-6">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <span className="text-2xl font-bold">TransFood</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 p-3 text-red-500 bg-white rounded-lg mb-2">
              <FiHome />
              <span>Beranda</span>
            </div>
            <div className="flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
              <FiShoppingBag />
              <span>Pesanan</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
            <FiLogOut />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Menu Tombol untuk Sidebar di Layar Kecil */}
      <button
        className="fixed top-7 right-24 p-2 rounded-full hover:bg-gray-700 focus:outline-none lg:hidden z-30"
        onClick={toggleSidebar}
      >
        <FiMenu />
      </button>

      {/* Overlay untuk layar kecil saat sidebar terbuka */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
