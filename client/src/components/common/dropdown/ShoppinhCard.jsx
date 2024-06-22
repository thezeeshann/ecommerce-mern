import { RiShoppingBagLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetCartsQuery } from "../../../redux/api/cartApiSlice";
import useRemoveProductFromCart from "../../../hooks/removeProductFromCart";
import {
  useCreateOrderMutation
} from "../../../redux/api/orderApiSlice";
import toast from "react-hot-toast";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { clearCart,setOrderedCart } from "@/redux/features/cartSlice";


const ShoppinhCard = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { data } = useGetCartsQuery();
  // console.log(data, "get cart query");
  const [createOrder] = useCreateOrderMutation();
  const removeProductFromCart = useRemoveProductFromCart();

  const handleRemoveFromCart = async (pId) => {
    await removeProductFromCart(pId);
  };

  const orderProduct = async (cartId) => {
    try {
      const data = {
        cart: cartId,
      };
      const response = await createOrder(data);
      if (response.error) {
        console.log(response.error);
      } else {
        console.log("CREATE ORDER API RESPONSE", response);
        toast.success("Your order has been placed successfully!");

        const cartProducts = currentUserCart.find(cart => cart._id === cartId)?.items || [];
        dispatch(setOrderedCart(cartProducts))
        dispatch(clearCart())

        // for (const product of cartProducts) {
        //   await handleRemoveFromCart(product?.product?._id);
        // }

        console.log(cartProducts,"cartProducts")

        navigate(`/order/success/${response?.data?.data?.orderId}`);
        setOpen(false);
      }
    } catch (error) {
      console.log("CREAET ORDER API ERROR", error);
    }
  };

  const currentUserCart =
    data?.data?.filter((cart) => cart.user?._id === user?._id) || [];


  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <div className="my-4">
            <hr />

            {currentUserCart.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-screen gap-y-2">
                <div>
                  {" "}
                  <RiShoppingBagLine size={"3rem"} />
                </div>
                <p className="text-sm font-Poppins">
                  Your shopping cart is empty
                </p>
              </div>
            ) : (
              <>
                {currentUserCart.map((product, index) => (
                  <div className="flex flex-col mt-2 " key={index}>
                    <div className="">
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
                            <span
                              onClick={() =>
                                handleRemoveFromCart(p?.product?._id)
                              }
                            >
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
                              <p className="text-lg">${p?.product?.price}</p>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                              <p>Quantity</p>
                              <p>{p?.quantity || 0}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col py-3 mt-40 font-Poppins gap-y-5">
                      <div className="p-5 flex flex-col bg-[#F6F7F8] gap-y-2">
                        <div className="flex flex-row items-center justify-between ">
                          <p className="text-sm">Free Shippling </p>
                          <p className="text-sm">$0</p>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                          <p className="text-sm">Total</p>
                          <p className="text-sm">${product?.totalPrice}</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-evenly">
                        <Link to="/shop">
                          <button
                            onClick={() => setOpen(false)}
                            className="border-[1px] py-2 px-3 text-sm hover:bg-blue-500 hover:text-white"
                          >
                            Continue Shopping
                          </button>
                        </Link>
                        <button
                          onClick={() => orderProduct(product._id)}
                          className="border-[1px] py-2 px-3 text-sm hover:bg-blue-500 hover:text-white"
                        >
                          {user ? "Place Order" : "Proceed To Checkout"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ShoppinhCard;
