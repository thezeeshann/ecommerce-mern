import { RiShoppingBagLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/productApiSlice";
import iamgePlaceholder from "../../assets/placeholder-image.png";
import Spinner from "../../components/Spinner";
import { useSelector } from "react-redux";
import { useState } from "react";
import Rating from "../../components/Rating";
import Reviews from "../../components/Reviews";
import ReviewForm from "../../components/ReviewForm";
import {
  useAddToCartMutation,
  useGetCartsQuery,
} from "../../redux/api/cartApiSlice";
import toast from "react-hot-toast";
import useRemoveProductFromCart from "../../hooks/removeProductFromCart";

const SingleProduct = () => {
  const [productQuantity, setQuantity] = useState(1);
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(slug);
  const { user } = useSelector((state) => state.user);
  const [addToCart] = useAddToCartMutation();
  const removeProductFromCart = useRemoveProductFromCart();
  const { data: productInTheCart, refetch } = useGetCartsQuery();
  const pInCart = productInTheCart?.data?.map((p) => p?.items);
  const productIds = pInCart?.flat().map((item) => item.product._id);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const addToCartForm = async (e) => {
    try {
      e.preventDefault();
      if (!user) {
        return toast.error("you must be logged in");
      }
      const cartData = {
        user: user._id,
        items: [
          {
            product: data?.singleProduct?._id,
            quantity: productQuantity,
          },
        ],
      };

      const response = await addToCart(cartData);

      if (response.error) {
        toast.error(response.error.data.message || "An error occurred");
        console.log(response.error);
      } else {
        console.log("ADD TO CART API RESPONSE...", response);
        toast.success("Product added to cart");
        refetch();
      }
    } catch (error) {
      console.log("ADD TO CART API ERROR", error);
    }
  };


  const handleRemoveFromCart = async (pId) => {
    await removeProductFromCart(pId);
  };

  return (
    <section className=" bg-[#F6F7F8] py-6">
      <div className="grid grid-cols-2 w-[80%] mx-auto gap-x-5 ">
        {isLoading === true ? (
          <>
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          </>
        ) : (
          <>
            <div className="">
              <img
                src={`${data?.singleProduct?.image}` || iamgePlaceholder}
                className="object-cover object-center w-full"
                alt={data?.singleProduct}
              />
            </div>
            <div className="flex flex-col px-5 py-5 bg-white gap-y-5">
              <div>
                <p className="text-lg font-semibold text-sky-500">
                  {data?.singleProduct?.productName}
                </p>
                <p className="text-sm">converse-shoes</p>
              </div>
              <hr className="" />
              <p className="">{data?.singleProduct?.description}</p>
              <p className="text-3xl">$ {data?.singleProduct?.price}</p>

              <form onSubmit={addToCartForm}>
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="email" className="text-sm">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={productQuantity}
                    onChange={handleQuantityChange}
                    min="1"
                    placeholder="Please Enter your email"
                    className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                  />
                </div>
                <div className="flex flex-row items-center mt-3 gap-x-5 ">
                  {productIds?.includes(data?.singleProduct?._id) ? (
                    <>
                      <button
                        onClick={() =>
                          handleRemoveFromCart(data?.singleProduct?._id)
                        }
                        className=" flex flex-row items-center gap-x-2 text-xs border-[1px] border-gray-200 px-8 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        <RiShoppingBagLine
                          size={"1.5rem"}
                          className="cursor-pointer"
                        />{" "}
                        <p> Remove From Cart</p>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className=" flex flex-row items-center gap-x-2 text-xs border-[1px] border-gray-200 px-8 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        <RiShoppingBagLine
                          size={"1.5rem"}
                          className="cursor-pointer"
                        />{" "}
                        <p> Add To Cart</p>
                      </button>
                    </>
                  )}
                </div>
              </form>
            </div>

            <Rating productId={data?.singleProduct?._id} />
            <div>
              <Reviews productId={data?.singleProduct?._id} />
              <ReviewForm productId={data?.singleProduct?._id} />
            </div>
          </>
        )}
        <div></div>
      </div>
    </section>
  );
};

export default SingleProduct;
