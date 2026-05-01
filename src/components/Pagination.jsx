function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-center mt-6 gap-4">
      <button
        disabled={page === 0}
        onClick={()=>setPage(page-1)}
        className="px-4 py-1 bg-gray-300 rounded"
      >
        Prev
      </button>

      <span className="font-bold">{page+1} / {totalPages}</span>

      <button
        disabled={page === totalPages-1}
        onClick={()=>setPage(page+1)}
        className="px-4 py-1 bg-gray-300 rounded"
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;