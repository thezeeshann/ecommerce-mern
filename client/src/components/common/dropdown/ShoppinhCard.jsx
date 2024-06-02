import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { RxCross1 } from "react-icons/rx";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { removeToCart } from "../../../redux/features/cartSlice";
// import { useDispatch } from "react-redux";
import {
  useGetCartsQuery,
  useRemoveFromCartMutation,
} from "../../../redux/api/cartApiSlice";
import toast from "react-hot-toast";

const ShoppinhCard = ({ open, setOpen }) => {
  // const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { data } = useGetCartsQuery();
  const [removeFromCart] = useRemoveFromCartMutation();

  const handleRemoveFromCart = async (pId) => {
    try {
      const productId = {
        productId: pId,
      };
      const response = await removeFromCart(productId);
      if (response.status === 200) {
        toast.success("Item removed from cart");
      }
      console.log("REMOVE FROM CART API RESPONSE",response)
    } catch (error) {
      console.log("REMOVE ITEM FROM CART API ERROR", error);
    }
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                    <div className="flex flex-col h-full px-4 py-6 overflow-y-scroll bg-white shadow-xl">
                      <div className="flex items-start justify-end mb-3 ">
                        <button
                          type="button"
                          className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <RxCross1 className="w-6 h-6" aria-hidden="true" />
                        </button>
                      </div>
                      <hr />

                      {data?.totalProducts === 0 ? (
                        <>
                          <div className="flex flex-col items-center justify-center h-full gap-y-2">
                            <span>
                              {" "}
                              <RiShoppingBagLine size={"3rem"} />
                            </span>
                            <p className="text-sm font-Poppins">
                              Your shopping cart is empty
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          {data?.data?.map((product, index) => (
                            <>
                              <Fragment key={index}>
                                <div className="flex-1 ">
                                  {product?.items?.map((p, index) => (
                                    <div
                                      key={index}
                                      className="flex flex-col py-2 gap-y-3 "
                                    >
                                      <div className="flex flex-row items-center justify-between ">
                                        <div className="flex flex-row items-center gap-x-2">
                                          <img
                                            src={p?.product?.image}
                                            className="w-[70px] h-[70px] rounded"
                                            alt=""
                                          />
                                          <p className="font-semibold text-blue-500 ">
                                            {p?.product?.productName}
                                          </p>
                                        </div>
                                        <span onClick={()=>handleRemoveFromCart(p?.product?._id)}>
                                          {" "}
                                          <MdDelete
                                            size={"1.5rem"}
                                            className="cursor-pointer hover:text-red-500"
                                          />
                                        </span>
                                      </div>
                                      <div className="flex flex-col">
                                        <div className="flex flex-row items-center justify-between">
                                          <p className="text-lg">Price</p>
                                          <p className="text-lg">
                                            ${p?.product?.price}
                                          </p>
                                        </div>
                                        <div className="flex flex-row items-center justify-between">
                                          <p>Quantity</p>
                                          <p>{p?.quantity || 0}</p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </Fragment>

                              <div className="flex flex-col py-3 font-Poppins gap-y-5">
                                <div className="p-5 flex flex-col bg-[#F6F7F8] gap-y-2">
                                  <div className="flex flex-row items-center justify-between ">
                                    <p className="text-sm">Free Shippling </p>
                                    <p className="text-sm">$0</p>
                                  </div>
                                  <div className="flex flex-row items-center justify-between">
                                    <p className="text-sm">Total</p>
                                    <p className="text-sm">
                                      ${product?.totalPrice}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-center px-5 gap-x-3">
                                  <Link to="/shop">
                                    <button
                                      onClick={() => setOpen(false)}
                                      className="border-[1px] py-2 px-3 text-sm hover:bg-blue-500 hover:text-white"
                                    >
                                      Continue Shopping
                                    </button>
                                  </Link>
                                  <button className="border-[1px] py-2 px-3 text-sm hover:bg-blue-500 hover:text-white">
                                    {user
                                      ? "Place Order"
                                      : "Proceed To Checkout"}
                                  </button>
                                </div>
                              </div>
                            </>
                          ))}
                        </>
                      )}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ShoppinhCard;
