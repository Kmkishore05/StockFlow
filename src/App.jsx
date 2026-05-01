import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";

function App() {
  const [view, setView] = useState("landing"); // ⭐ start from landing

  return (
    <div>
      <Navbar setView={setView} />

      {view === "landing" && <Landing setView={setView} />}
      {view === "home" && <Home />}
      {view === "add" && <AddProduct />}
      {view === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;