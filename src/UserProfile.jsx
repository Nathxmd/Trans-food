// src/UserProfile.jsx
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown } from "flowbite-react";
import { FiUser } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import { AuthContext } from "./context/AuthContext";

function UserProfile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Navigate to home after logout
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="relative">
      <Dropdown
        label={
          <Button color="gray" pill>
            <FiUser className="h-5 w-5" />
          </Button>
        }
        arrowIcon={false}
        inline
      >
        {user ? (
          <>
            <Dropdown.Header>
              <div className="flex items-center space-x-3">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user.displayName || "User"}
                  </p>
                  <p className="text-sm text-gray-500 truncate">{user.email}</p>
                </div>
              </div>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => navigate("/profile")}>
              Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/settings")}>
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </>
        ) : (
          <>
            <Dropdown.Item onClick={() => navigate("/auth/login")}>
              Sign In
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/auth/register")}>
              Register
            </Dropdown.Item>
          </>
        )}
      </Dropdown>
    </div>
  );
}

export default UserProfile;
