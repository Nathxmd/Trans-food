import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import FoodList from "./FoodList";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <FoodList />
      </div>
    </div>
  );
}

export default App;
