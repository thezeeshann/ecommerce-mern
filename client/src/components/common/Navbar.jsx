import {Link} from "react-router-dom"
import { MdPayment } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="w-full font-Poppins">
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
      <nav className="w-[80%] mx-auto py-5  flex flex-row justify-between items-center">
        {/* shop name          */}
        <div>
        <Link to={"/"}>          <p className="font-semibold text-2xl text-gray-600 cursor-pointer">MERN Store</p></Link>
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
        <div className="flex flex-row items-center gap-x-5">
          <div>
            <RiShoppingBagLine size={"1.5rem"} className="cursor-pointer" />
          </div>
          <div className="flex flex-row gap-x-3">
            <div className="flex flex-row justify-center items-center cursor-pointer">
              <p className="font-semibold text-gray-600 text-sm">Brands </p>
              <div>
                <HiChevronDown
                  className="text-gray-500 font-semibold"
                  size={"1rem"}
                />
              </div>
            </div>
            <div className="cursor-pointer">
              <p className="font-semibold text-gray-600 text-sm">Shop</p>
            </div>
            <div className="flex flex-row justify-center items-center cursor-pointer">
              <p className="font-semibold text-gray-600 text-sm">Welcome!</p>
              <div>
                <HiChevronDown
                  className="text-gray-500 font-semibold"
                  size={"1rem"}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Navbar;