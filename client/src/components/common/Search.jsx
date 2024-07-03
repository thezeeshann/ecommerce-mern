import { useDebounce } from "@/hooks/usedebounce";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {

  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce(searchQuery,1000)

  const fetchData = async (value) => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/products");
      const products = response?.data?.products;
      if (products) {
        const result = products.filter((product) => {
          return (
            value &&
            product &&
            product.productName &&
            product.productName.toLowerCase().includes(value)
          );
        });
        setResults(result);
      } else {
        console.log("No products found in response");
        setResults([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (value) => {
    setSearchQuery(value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setResults([]);
    
  };


  useEffect(()=>{
    if(debouncedValue){
      fetchData(debouncedValue)
    }else{
      setResults([])
    }
  },[debouncedValue])

  return (
    <div className="relative flex flex-col w-2/5 ">
      <div
        className={`${
          searchQuery ? "rounded-t-md" : "  rounded-md"
        }  border-[1px]  border-gray-200  py-1 px-3`}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search products"
          className="py-[2px] text-base outline-none placeholder:text-sm placeholder:text-gray-500 focus:border-none"
        />
      </div>
      {results && (
        <div
          className={`${
            searchQuery
              ? " border-b-[1px] border-r-[1px] border-l-[1px]  border-gray-200  rounded-b-sm  "
              : ""
          } shadow-md top-[39px] absolute z-10  bg-white w-full`}
        >
          {results?.map((product) => (
            <Link
              key={product._id}
              to={`/shop/product/${product.slug}`}
              onClick={clearSearch}
            >
              <div className="hover:bg-[#F6F7F8] p-3 flex flex-row items-start gap-x-3">
                <img
                  src={product.image}
                  alt="product image"
                  className="w-[40px] h-[40px]"
                />
                <div>
                  <p className="text-sm">{product.productName}</p>
                  <p className="text-sm">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
