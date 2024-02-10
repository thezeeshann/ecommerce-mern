import { Link } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import Brands from "./dropdown/Brands";
import Welcome from "./dropdown/Welcome";
import ShoppinhCard from "./dropdown/ShoppinhCard";
import { useState } from "react";

const Navbar = () => {


  const [open,setOpen] = useState(false)


  return (
    <header className="w-full font-Poppins">
      {/* top level headers */}
      <div className="bg-black ">
        <div className="w-[70%] mx-auto flex flex-row py-2 justify-between">
          <div className="flex flex-row justify-center items-center gap-x-3">
            <div>
              {" "}
              <MdLocalShipping className="text-white" size={"1rem"} />
            </div>
            <p className="text-white font-semibold text-sm">Free Shipping</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-3">
            <div>
              <MdPayment className="text-white" size={"1rem"} />
            </div>
            <p className="text-white font-semibold text-sm">Payment Methods</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-3">
            <div>
              <IoCall className="text-white" size={"1rem"} />
            </div>
            <p className="text-white font-semibold text-sm">
              Call us 951-999-9999
            </p>
          </div>
        </div>
      </div>

      {/* headers */}
      <nav className="w-[80%] mx-auto py-5  flex flex-row justify-between items-center">
        {/* shop name          */}
        <div>
          <Link to={"/"}>
            {" "}
            <p className="font-semibold text-2xl text-gray-600 cursor-pointer">
              MERN Store
            </p>
          </Link>
        </div>
        {/* search input */}
        <div className="border-[1px] border-gray-200 w-2/5 py-1 px-3 rounded-sm">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search products"
            className="placeholder:text-gray-500 text-base focus:border-none outline-none"
          />
        </div>
        {/* nav */}
        <div className="flex flex-row items-center gap-x-5 ">
          <div>
            <RiShoppingBagLine
              size={"1.5rem"}
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>

          <div className="flex flex-row gap-x-3  items-center justify-evenly">
            {/* brands */}
            <Brands />
            {/* shop */}
            <div className="cursor-pointer">
              <Link to="/shop">
                <p className="font-semibold text-gray-600 text-sm">Shop</p>
              </Link>
            </div>
            {/* welcome */}
            <Welcome />
          </div>
        </div>
      </nav>

      <hr />

      <ShoppinhCard open={open} setOpen={setOpen} />
    </header>
  );
};

export default Navbar;
