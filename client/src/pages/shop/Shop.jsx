import ProductsDetail from "./ProductsDetail";
import ReactStars from "react-rating-stars-component";
import ProductsPagination from "@/components/Pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/api/productApiSlice";

const Shop = () => {
  const { slug } = useParams();
  const { categorySlug } = useParams();
  const [sortBy, setSortBy] = useState("new");
  const [rating, setRating] = useState(null);
  const { data } = useGetProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalNumberOfProducts = data?.total || 0;
  const totalNumberOfPages = Math.ceil(totalNumberOfProducts / productsPerPage);


  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handlePageChange = (direction) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className=" bg-[#F6F7F8] py-6">
      <div className="flex flex-row w-[80%] mx-auto gap-x-6 ">
        {/* filter products */}
        <aside className="w-[20%] flex flex-col h-min gap-y-5">
          <div className="flex flex-col bg-white ">
            <div className="p-3 bg-[#F6F7F8] border-[1px]">
              <p className="text-lg font-medium">Price</p>
            </div>
            <div className="p-3 py-6 border-[1px]">
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
          </div>

          <div className="flex flex-col bg-white ">
            <div className="p-3 bg-[#F6F7F8] border-[1px]">
              <p className="text-lg font-medium">Rating</p>
            </div>
            <div className="p-3 border-[1px] ">
              <ReactStars
                count={5}
                onChange={handleRatingChange}
                value={rating}
                classNames=" mx-auto space-x-2"
                size={24}
                isHalf={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
          </div>
        </aside>

        <div className="flex flex-col w-[80%] ">
          {/* short by price */}
          <div className="flex flex-row items-center justify-between w-full px-3 py-1.5 bg-white border-[1px]">
            <p className="w-[60%] text-base">
              Showing: 1-{data?.total} products of {data?.total} products
            </p>
            <div className="w-[40%] flex flex-row gap-x-2 items-center justify-end ">
              <p>Short By</p>

              <Select
                value={sortBy}
                onValueChange={setSortBy}
                defaultValue="new"
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="new">Newest First</SelectItem>
                    <SelectItem value="high">Price High to Low</SelectItem>
                    <SelectItem value="low">Price Low to High</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* products list */}
          <div className="mt-5">
            <ProductsDetail
              currentPage={currentPage}
              sortBy={sortBy}
              brandSlug={slug}
              rating={rating}
              categorySlug={categorySlug}
            />
          </div>

          <div className="mt-5">
            <ProductsPagination
              currentPage={currentPage}
              totalNumberOfPages={totalNumberOfPages}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
