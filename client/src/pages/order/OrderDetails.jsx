import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGetSingleOrderQuery } from "../../redux/api/orderApiSlice";
import Spinner from "../../components/Spinner";
import React, { useRef, useState } from "react";
import { useDeleteOrderMutation } from "../../redux/api/orderApiSlice";
import useClickOutside from "../../hooks/useClickOutSide";

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = useRef();
  const { data, isLoading } = useGetSingleOrderQuery(orderId);
  const [deleteOrder] = useDeleteOrderMutation();

  const handleDeleteOrder = async (OId) => {
    try {
      const response = await deleteOrder(OId);
      console.log("DELETE ORDER API RESPONSE", response);
      navigate("/dashborad");
    } catch (error) {
      console.log("DELETE ORDER API ERROR", error);
    }
  };

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useClickOutside(clickRef, handleIsOpen);

  return (
    <section className=" flex flex-col w-[80%] mx-auto gap-y-2 py-6 ">
      <div className="relative space-y-4">
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
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="flex flex-row items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm">Order ID </p>
                <p className="text-sm">Order Date </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-neutral-500">
                  {data?.data?.orderId}
                </p>
                <p className="text-sm font-semibold text-neutral-500">
                  {new Date(data?.data?.orderDate).toLocaleDateString("en-Us", {
                    weekday: "long",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="relative">
                <button
                  ref={clickRef}
                  onClick={handleIsOpen}
                  type="submit"
                  className="text-xs border-[1px] border-gray-200 px-8 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Cancel Order
                </button>
                {isOpen && (
                  <div className="absolute z-10 py-3 bg-white rounded shadow-md">
                    <div className="flex flex-col items-center justify-center gap-y-2 ">
                      <p className="text-sm text-center">
                        Are you sure you want to cancel
                      </p>
                      <button
                        onClick={() => handleDeleteOrder(data?.data?.orderId)}
                        type="submit"
                        className=" text-xs border-[1px] bg-red-500 text-white font-semibold border-gray-200 px-2 py-2 hover:bg-red-600 hover:text-white"
                      >
                        Confirm cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row items-center justify-between pt-5 gap-x-3">
              <div className="space-y-3 w-[70%]">
                <p className="text-lg font-semibold">Order Items</p>
                <hr />
                <div className="flex flex-row items-center justify-between">
                  {data?.data?.cart?.items?.map((p) => (
                    <React.Fragment key={p._id}>
                      <div className="flex flex-row items-center justify-between gap-x-2">
                        <img
                          src={p?.product?.image}
                          className="w-[80px] h-[80px]"
                          alt="product image"
                        />
                        <div className="flex flex-col">
                          <p className="text-sm font-semibold text-sky-500">
                            {p?.product?.productName}
                          </p>
                          <span className="text-sm">${p?.product?.price}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <p className="text-sm font-semibold">Quantity</p>
                        <p className="text-sm">{p?.quantity}</p>
                      </div>
                      <div className="flex flex-col items-center ">
                        <p className="text-sm font-semibold">Total Price</p>
                        <p className="text-sm">
                          $ {data?.data?.cart?.totalPrice}
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-sm font-semibold">Status</p>
                        <p className="text-sm text-neutral-500">
                          {data?.data?.cart?.status}
                        </p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className=" border-[1px] border-gray-200 w-[30%] p-4 space-y-3">
                <p className="text-lg font-semibold">Order Summary</p>
                <hr />
                <div className="flex flex-col text-sm gap-y-3">
                  <div className="flex items-center justify-between">
                    <p>Subtotal </p>
                    <p>${data?.data?.cart?.totalPrice}</p>
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
                  <span className="text-sm">
                    ${data?.data?.cart?.totalPrice}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default OrderDetails;
