function Navbar({ setView }) {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">🛒 StockFlow</h1>

      <div className="space-x-6">
        <button onClick={()=>setView("landing")}>Home</button>
        <button onClick={()=>setView("dashboard")} className="hover:text-yellow-400">Dashboard</button>
        <button onClick={()=>setView("home")} className="hover:text-yellow-400">Products</button>
        <button onClick={()=>setView("add")} className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500">
          Add Product
        </button>
      </div>
    </nav>
  );
}
export default Navbar;