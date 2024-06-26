import { Link } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import Brands from "./dropdown/Brands";
import { RxHamburgerMenu } from "react-icons/rx";
import Welcome from "./dropdown/Welcome";
import ShoppinhCard from "./dropdown/ShoppinhCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import Search from "./Search";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  

  return (
    <header className="w-full font-Poppins">
      {/* top level headers */}
      <div className="bg-black ">
        <div className="w-[70%] mx-auto flex flex-row py-2 justify-between">
          <div className="flex flex-row items-center justify-center gap-x-3">
            <div>
              {" "}
              <MdLocalShipping className="text-white" size={"1rem"} />
            </div>
            <p className="text-sm font-medium text-white">Free Shipping</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-x-3">
            <div>
              <MdPayment className="text-white" size={"1rem"} />
            </div>
            <p className="text-sm font-medium text-white">Payment Methods</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-x-3">
            <div>
              <IoCall className="text-white" size={"1rem"} />
            </div>
            <p className="text-sm font-medium text-white">
              Call us 951-999-9999
            </p>
          </div>
        </div>
      </div>

      {/* headers */}
      <nav className="w-[80%] mx-auto py-5  flex flex-row justify-between items-center">
        {/* shop name          */}
        <div className="flex flex-row items-center gap-x-3">
          <RxHamburgerMenu
            onClick={() => setOpenCategory(true)}
            size={"1.5rem"}
            className="-mt-1 cursor-pointer text-neutral-400"
          />
          <Link to={"/"}>
            <p className="text-xl font-medium text-gray-600 cursor-pointer">
              MERN Store
            </p>
          </Link>
        </div>
        {/* search input */}
        <Search/>
        {/* nav */}
        <div className="flex flex-row items-center gap-x-5 ">
          <div className="relative">
            {cart.length > 0 && (
              <span className="bg-blue-500 w-auto -top-1 -right-2 rounded-full px-2 py-[1px] absolute text-[10px] text-white">
                {cart.length}
              </span>
            )}
            <RiShoppingBagLine
              size={"1.5rem"}
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>

          <div className="flex flex-row items-center gap-x-3 justify-evenly">
            {/* brands */}
            <Brands />
            {/* shop */}
            <div className="cursor-pointer">
              <Link to="/shop">
                <p className="text-sm font-medium text-gray-600">Shop</p>
              </Link>
            </div>
            {/* welcome */}
            <Welcome />
          </div>
        </div>
      </nav>

      <Sheet open={openCategory} onOpenChange={setOpenCategory}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetDescription>
              <div className="py-5">
                <hr />
                <p className="mt-8 text-xl font-medium">SHOP BY CATEGORY</p>
                <div className="flex flex-col pt-5 ">
                  <p className="hover:bg-[#F6F7F8] cursor-pointer hover:text-blue-500 p-2 font-medium">Shoes</p>
                  <p className="hover:bg-[#F6F7F8] cursor-pointer hover:text-blue-500 p-2 font-medium">Bags</p>
                  <p className="hover:bg-[#F6F7F8] cursor-pointer hover:text-blue-500 p-2 font-medium">Perfumes</p>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <hr />

      <ShoppinhCard open={open} setOpen={setOpen} />
    </header>
  );
};

export default Navbar;
