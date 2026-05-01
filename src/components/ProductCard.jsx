function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">

      <img
        src={product.imageUrl}
        className="h-40 w-full object-cover rounded"
      />

      <h3 className="font-semibold mt-3">{product.name}</h3>

      <p className="text-green-600 font-bold">₹{product.price}</p>

      <p className="text-gray-500 text-sm">Stock: {product.quantity}</p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={()=>onEdit(product)}
          className="flex-1 bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
        >
          Edit
        </button>

        <button
          onClick={()=>onDelete(product.id)}
          className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default ProductCard;