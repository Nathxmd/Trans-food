import { useState } from "react";
import { Dropdown } from "flowbite-react";
import { FiUser } from "react-icons/fi";

function UserProfile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      {/* Icon User */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        <FiUser size={24} />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <Dropdown
          arrowIcon
          inline
          label={<span className="hidden">User Menu</span>}
          className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md overflow-hidden"
        >
          <Dropdown.Item>
            <div className="flex items-center space-x-3 p-2">
              <img
                src="https://via.placeholder.com/40" // Ganti URL dengan URL foto profil sebenarnya
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Username</p>
                <p className="text-sm text-gray-500">user@example.com</p>
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => alert("View Profile")}>
            View Profile
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert("Logout")}>Logout</Dropdown.Item>
        </Dropdown>
      )}
    </div>
  );
}

export default UserProfile;
