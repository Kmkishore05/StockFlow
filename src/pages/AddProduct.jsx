import { useState } from "react";
import { addProduct } from "../services/api";

function AddProduct() {
  const [data, setData] = useState({
    name: "",
    price: "",
    quantity: "",
    imageUrl: ""
  });

  const submit = async () => {
    try {
      const payload = {
        name: data.name,
        price: Number(data.price),        // ✅ FIX
        quantity: Number(data.quantity),  // ✅ FIX
        imageUrl: data.imageUrl
      };

      console.log("Sending:", payload); // 🔍 debug

      await addProduct(payload);

      alert("Product Added ✅");

      // reset form
      setData({
        name: "",
        price: "",
        quantity: "",
        imageUrl: ""
      });

    } catch (err) {
      console.error(err);
      alert("Error adding product ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">

      <h2 className="text-xl font-bold mb-4">Add Product</h2>

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Name"
        value={data.name}
        onChange={e => setData({ ...data, name: e.target.value })}
      />

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Price"
        value={data.price}
        onChange={e => setData({ ...data, price: e.target.value })}
      />

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Quantity"
        value={data.quantity}
        onChange={e => setData({ ...data, quantity: e.target.value })}
      />

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Image URL"
        value={data.imageUrl}
        onChange={e => setData({ ...data, imageUrl: e.target.value })}
      />

      <button
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        onClick={submit}
      >
        Add Product
      </button>

    </div>
  );
}

export default AddProduct;