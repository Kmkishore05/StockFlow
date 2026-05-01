import { useState } from "react";

function Landing({ setView }) {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">StockFlow</span>
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Smart Inventory Management made simple and powerful
        </p>

        <button
          onClick={() => setView("home")}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg hover:bg-yellow-500"
        >
          Get Started 🚀
        </button>
      </div>

      {/* FEATURES */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">📦 Manage Products</h3>
            <p>Add, update, and track your inventory easily</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">🔍 Smart Search</h3>
            <p>Quickly find products with powerful search</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">📊 Dashboard</h3>
            <p>Monitor stock levels and performance</p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-yellow-400 text-center py-12">
        <h2 className="text-2xl font-bold mb-4">
          Start managing your inventory today
        </h2>

        <button
          onClick={() => setView("dashboard")}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Go to Dashboard
        </button>
      </div>

    </div>
  );
}

export default Landing;