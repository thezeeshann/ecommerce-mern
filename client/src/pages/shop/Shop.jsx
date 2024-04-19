import ProductsDetail from "./ProductsDetail";
import Pagination from "../../components/Pagination";
import {Select } from "@radix-ui/themes";

const Shop = () => {
  return (
    <section className=" bg-[#F6F7F8] py-6">
      <div className="flex flex-row w-[80%] mx-auto gap-x-6 ">
        {/* filter products */}
        <aside className="w-[20%] flex flex-col h-min gap-y-3">
          {/* <div className="flex flex-col px-3 py-4 bg-white gap-y-3">
            <p>Price</p>
            <Slider defaultValue={[50]} />
          </div> */}
          {/* <div className="flex flex-col p-2 bg-white gap-y-2">
            <p>Rating</p>
            <Rating value={3} />
          </div> */}
        </aside>

        <div className="flex flex-col w-[80%] ">
          {/* short by price */}
          <div className="flex flex-row items-center justify-between w-full px-3 py-1 bg-white rounded-md">
            <p className="w-[60%] text-base">
              Showing: 1-10 products of 12 products
            </p>
            <div className="w-[40%] flex flex-row gap-x-2 items-center justify-end ">
              <p>Short By</p>
              <Select.Root size="2" defaultValue="new">
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="new" >Newest First</Select.Item>
                  <Select.Item value="hign">Price High to Low</Select.Item>
                  <Select.Item value="low">Price Low to High</Select.Item>
                </Select.Content>
              </Select.Root>
            </div>
          </div>

          {/* products list */}
          <div className="mt-5">
            <ProductsDetail />
          </div>

          <div className="mt-5">
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
