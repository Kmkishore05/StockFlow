import { useState } from "react";

function ProductModal({ product, onClose, onSave }) {
  const [data, setData] = useState(product);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-80">

        <h3 className="text-lg font-bold mb-3">Edit Product</h3>

        <input className="w-full border p-2 mb-2"
          value={data.name}
          onChange={(e)=>setData({...data,name:e.target.value})}
        />

        <input className="w-full border p-2 mb-2"
          value={data.price}
          onChange={(e)=>setData({...data,price:e.target.value})}
        />

        <input className="w-full border p-2 mb-2"
          value={data.quantity}
          onChange={(e)=>setData({...data,quantity:e.target.value})}
        />

        <input className="w-full border p-2 mb-2"
          value={data.imageUrl}
          onChange={(e)=>setData({...data,imageUrl:e.target.value})}
        />

        <div className="flex gap-2 mt-3">
          <button onClick={()=>onSave(data)} className="flex-1 bg-green-500 text-white p-2 rounded">
            Save
          </button>
          <button onClick={onClose} className="flex-1 bg-gray-400 text-white p-2 rounded">
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
export default ProductModal;