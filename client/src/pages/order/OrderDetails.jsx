import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  return (
    <section className="flex flex-col w-[80%] mx-auto gap-y-2 py-6 ">
      <div className="space-y-4">
        <div className="flex flex-row items-center justify-between">
          <p className="text-lg font-semibold ">Order Details</p>
          <span className="flex flex-row items-center gap-x-2 hover:text-neutral-500">
            {" "}
            <span>
              {" "}
              <FaArrowLeftLong />
            </span>
            <Link to="/dashborad">
              <p> Back To Orders</p>
            </Link>
          </span>
        </div>
        <hr />
        <div className="flex flex-row items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm">Order ID </p>
            <p className="text-sm">Order Date </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-neutral-500">
              Wednesday, Jun 12, 2024
            </p>
            <p className="text-sm font-semibold text-neutral-500">
              6669f888967fbe001272f8bb
            </p>
          </div>
          <button
            type="submit"
            className="text-xs border-[1px] border-gray-200 px-8 py-2 hover:bg-blue-500 hover:text-white"
          >
            Cancel Order
          </button>
        </div>
        <div className="flex flex-row items-center justify-between pt-5 gap-x-3 ">
          <div className="space-y-3 w-[70%]">
            <p className="text-lg font-semibold">Order Items</p>
            <hr />
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-between gap-x-2">
                <img
                  src={
                    "https://res.cloudinary.com/dwhf51atn/image/upload/v1715583166/Ecommerce/ub9xg7dpggdrlqv5zskv.jpg"
                  }
                  className="w-[80px] h-[80px]"
                  alt="product image"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-sky-500">
                    Mens Cotton Jacket
                  </p>
                  <span className="text-sm">$2500</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm font-semibold">Status</p>
                <p className="text-sm text-neutral-500">Not processed</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm font-semibold">Quantity</p>
                <p className="text-sm">1</p>
              </div>
              <div className="flex flex-col items-center ">
                <p className="text-sm font-semibold">Total Price</p>
                <p className="text-sm">$2500</p>
              </div>
            </div>
          </div>
          <div className=" border-[1px] border-gray-200 w-[30%] p-4 space-y-3">
            <p className="text-lg font-semibold">Order Summary</p>
            <hr />
            <div className="flex flex-col text-sm gap-y-3">
              <div className="flex items-center justify-between">
                <p>Subtotal </p>
                <p>$2500</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Est. Sales Tax </p>
                <p>$0</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Shipping & Handling </p>
                <p>$0</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-row items-center justify-between gap-y-3">
              <span className="text-sm">Total</span>{" "}
              <span className="text-sm">$2500</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
