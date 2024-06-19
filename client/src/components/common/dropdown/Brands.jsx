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

const Brands = () => {
  return (
    <>
      <DropdownMenu>
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
        <DropdownMenuContent className="w-[300px] px-4 py-2">
          <DropdownMenuLabel>
            <div className="flex flex-row items-center justify-between ">
              <p className="text-lg font-semibold">SHOP BY BRAND</p>
              <Link to="/category">
                <p className="text-sm cursor-pointer text-sky-500 hover:text-gray-900">
                  See All
                </p>
              </Link>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="flex flex-row items-center justify-between">
            <div>
              <DropdownMenuItem>Gucci</DropdownMenuItem>
              <DropdownMenuItem>Polo</DropdownMenuItem>
              <DropdownMenuItem>Nike</DropdownMenuItem>
              <DropdownMenuItem>Puma</DropdownMenuItem>
            </div>
            <div>
              <DropdownMenuItem>Apple</DropdownMenuItem>
              <DropdownMenuItem>Tommy Hilfiger</DropdownMenuItem>
              <DropdownMenuItem>Calvin Klein</DropdownMenuItem>
              <DropdownMenuItem>Converse</DropdownMenuItem>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Brands;
