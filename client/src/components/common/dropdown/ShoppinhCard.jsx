import { RiShoppingBagLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCreateOrderMutation } from "../../../redux/api/orderApiSlice";
import toast from "react-hot-toast";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { removeToCart, clearCart } from "@/redux/features/cartSlice";

const ShoppinhCard = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const [createOrder] = useCreateOrderMutation();
  let totalPrice = 0;
  cart.forEach((product) => {
    totalPrice += (product.price || 0) * (product.quantity || 0);
  });

  const currentUserCart = cart.filter((product) => product.userId === user?._id);

  const orderProduct = async () => {
    try {
      const data = {
        user: user._id,
        total: totalPrice,
        cart: currentUserCart,
      };
      const response = await createOrder(data);
      if (response.error) {
        console.log(response.error);
      } else {
        console.log("CREATE ORDER API RESPONSE", response);
        toast.success("Your order has been placed successfully!");
        dispatch(clearCart());
        navigate(`/order/success/${response?.data?.data?.orderId}`);
        setOpen(false);
      }
    } catch (error) {
      console.log("CREAET ORDER API ERROR", error);
    }
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader></SheetHeader>

          <div className="mt-5 ">
            <hr />
            {currentUserCart.length === 0? (
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
                <ScrollArea className="w-full mt-3 rounded-md h-[375px]">
                  {cart?.map((product) => (
                    <div
                      className="flex flex-col px-2 pr-3 h-36 gap-y-3"
                      key={product?._id}
                    >
                      <div className="">
                        <div className="flex flex-row items-center justify-between ">
                          <div className="flex flex-row items-center gap-x-2">
                            <img
                              src={product?.image}
                              className="w-[70px] h-[70px] rounded"
                              alt=""
                            />
                            <p className="font-semibold text-blue-500 ">
                              {product?.productName}
                            </p>
                          </div>
                          <span
                            onClick={() => dispatch(removeToCart(product?._id))}
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
                            <p className="">Price</p>
                            <p className="text-lg font-medium">
                              ${product?.price}
                            </p>
                          </div>
                          <div className="flex flex-row items-center justify-between">
                            <p>Quantity</p>
                            <p className="font-medium">
                              {product.quantity || 0}
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </ScrollArea>
                <div className="flex flex-col py-3 font-Poppins gap-y-5">
                  <div className="p-5 flex flex-col bg-[#F6F7F8] gap-y-2">
                    <div className="flex flex-row items-center justify-between ">
                      <p className="text-sm">Free Shippling </p>
                      <p className="text-sm">$0</p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-sm">Total</p>
                      <p className="text-sm">${totalPrice}</p>
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
                      onClick={() => orderProduct()}
                      className="border-[1px] py-2 px-3 text-sm hover:bg-blue-500 hover:text-white"
                    >
                      {user ? "Place Order" : "Proceed To Checkout"}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ShoppinhCard;
