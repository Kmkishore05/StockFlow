import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(0, 100).then(res => setProducts(res.data.content));
  }, []);

  // 🔥 CATEGORY LOGIC (simple grouping)
  const categoryData = [
    {
      name: "Electronics",
      value: products.filter(p =>
        p.name.toLowerCase().includes("laptop") ||
        p.name.toLowerCase().includes("phone") ||
        p.name.toLowerCase().includes("camera")
      ).length
    },
    {
      name: "Accessories",
      value: products.filter(p =>
        p.name.toLowerCase().includes("mouse") ||
        p.name.toLowerCase().includes("keyboard") ||
        p.name.toLowerCase().includes("headphone")
      ).length
    },
    {
      name: "Household",
      value: products.filter(p =>
        p.name.toLowerCase().includes("chair") ||
        p.name.toLowerCase().includes("sofa") ||
        p.name.toLowerCase().includes("lamp")
      ).length
    },
    {
      name: "Others",
      value: products.length
    }
  ];

  // 🔥 STOCK DISTRIBUTION
  const stockData = [
    {
      name: "Low Stock",
      value: products.filter(p => p.quantity < 5).length
    },
    {
      name: "In Stock",
      value: products.filter(p => p.quantity >= 5).length
    }
  ];

  const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      {/* TOP CARDS */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h3>Total Products</h3>
          <p className="text-2xl font-bold">{products.length}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3>Low Stock</h3>
          <p className="text-2xl font-bold text-red-500">
            {products.filter(p => p.quantity < 5).length}
          </p>
        </div>
      </div>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* BAR CHART */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="mb-4 font-semibold">Category Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PIE CHART */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="mb-4 font-semibold">Stock Status</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stockData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {stockData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;