import { Link } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import Brands from "./dropdown/Brands";
import Welcome from "./dropdown/Welcome";
import ShoppinhCard from "./dropdown/ShoppinhCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetCartsQuery } from "../../redux/api/cartApiSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { data } = useGetCartsQuery();

  const currentUserCart =
    data?.data?.filter((cart) => cart.user?._id === user?._id) || [];
  const totalProducts = currentUserCart.reduce(
    (acc, cart) => acc + cart.items.length,
    0
  );

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
        <div>
          <Link to={"/"}>
            {" "}
            <p className="text-2xl font-medium text-gray-600 cursor-pointer">
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
            className="text-base outline-none placeholder:text-gray-500 focus:border-none"
          />
        </div>
        {/* nav */}
        <div className="flex flex-row items-center gap-x-5 ">
          <div className="relative">
            {totalProducts > 0 && (
              <span className="bg-blue-500 w-auto -top-1 -right-2 rounded-full px-2 py-[1px] absolute text-[10px] text-white">
                {user ? `${totalProducts}` : ""}
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

      <hr />

      <ShoppinhCard open={open} setOpen={setOpen} />
    </header>
  );
};

export default Navbar;
