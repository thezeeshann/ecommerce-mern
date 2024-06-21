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

const Shop = () => {
  const [sortBy, setSortBy] = useState("new");

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
                // onChange={handleRatingChange}
                // value={rating}
                classNames=" mx-auto space-x-2"
                size={24}
                isHalf={true}
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
              Showing: 1-10 products of 12 products
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
            <ProductsDetail sortBy={sortBy} />
          </div>

          <div className="mt-5">
            <ProductsPagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
