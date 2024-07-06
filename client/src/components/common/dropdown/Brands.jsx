import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetBrandsQuery } from "@/redux/api/brandApiSlice";
import { useState } from "react";

const Brands = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetBrandsQuery();

  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger>
          <div className="flex items-center felx-row ">
            <p className="text-sm font-medium text-gray-600 rounded-md ">
              Brands
            </p>
            <div>
              <HiChevronDown
                className="font-semibold text-gray-500"
                size={"1rem"}
              />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[330px] px-4 py-2">
          <DropdownMenuLabel>
            <div className="flex flex-row items-center justify-between ">
              <p className="text-lg font-semibold">SHOP BY BRAND</p>
              <Link to="/brands">
                <p  onClick={()=>setIsOpen(false)} className="text-sm cursor-pointer text-sky-500 hover:text-gray-900">
                  See All
                </p>
              </Link>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="flex flex-row flex-wrap items-center justify-between">
            {data?.map((brand) => (
              <div key={brand._id} className="w-1/2">
                <DropdownMenuItem className="capitalize">
                  <Link onClick={()=>setIsOpen(false)} to={`/shop/brand/${brand.slug}`}> {brand.name} </Link>
                </DropdownMenuItem>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Brands;
