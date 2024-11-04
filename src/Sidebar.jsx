import { FiHome, FiLogOut, FiShoppingBag } from "react-icons/fi";
import logo from "./assets/logo.svg";

function Sidebar() {
  return (
    <div className="w-64 bg-black p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <img src={logo} alt="logo" className="w-8 h-8 " />
          <span className="text-2xl font-bold">TransFood</span>
        </div>
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
  );
}

export default Sidebar;
