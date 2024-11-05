import { FiSearch, FiBell } from "react-icons/fi";
import UserProfile from "./UserProfile";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800">
      <div className="flex items-center bg-gray-700 rounded-full px-4 py-2 w-1/2">
        <FiSearch className="mr-2 text-gray-400" />
        <input
          type="text"
          placeholder="Cari..."
          className="bg-transparent outline-none w-full text-gray-300"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FiBell />
        <UserProfile />
      </div>
    </div>
  );
}

export default Navbar;
