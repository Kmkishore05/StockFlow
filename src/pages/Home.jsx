import { useEffect, useState } from "react";
import { getProducts, searchProducts, deleteProduct, updateProduct } from "../services/api";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import ProductModal from "../components/ProductModal";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(()=>{ load(); }, [page, keyword]);

  const load = async () => {
    if(keyword){
      const res = await searchProducts(keyword);
      setProducts(res.data);
      setTotalPages(1);
    } else {
      const res = await getProducts(page, 8);
      setProducts(res.data.content);
      setTotalPages(res.data.totalPages);
    }
  };

  const handleDelete = async(id)=>{
    await deleteProduct(id);
    load();
  };

  const handleSave = async(data)=>{
    await updateProduct(data.id,data);
    setSelected(null);
    load();
  };

  return (
    <div className="p-6">

      <SearchBar onSearch={(k)=>{setKeyword(k); setPage(0);}} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map(p=>(
          <ProductCard key={p.id} product={p} onEdit={setSelected} onDelete={handleDelete}/>
        ))}
      </div>

      {!keyword && (
        <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
      )}

      {selected && (
        <ProductModal
          product={selected}
          onClose={()=>setSelected(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default Home;