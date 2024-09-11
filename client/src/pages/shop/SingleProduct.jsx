import { RiShoppingBagLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/productApiSlice";
import iamgePlaceholder from "../../assets/placeholder-image.png";
import Spinner from "../../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Rating from "../../components/Rating";
import Reviews from "../../components/Reviews";
import ReviewForm from "../../components/ReviewForm";
import { addToCart, removeToCart } from "@/redux/features/cartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [productQuantity, setQuantity] = useState(1);
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(slug);
  const { cart } = useSelector((state) => state.cart);
  const {user} = useSelector((state)=>state.user)

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const isProductInCart = cart.some(
    (item) => item._id === data?.singleProduct?._id
  );

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
                <p className="text-lg font-semibold capitalize text-sky-500">
                  {data?.singleProduct?.productName}
                </p>
                <p className="text-sm">{data?.singleProduct?.slug}</p>
              </div>
              <hr className="" />
              <p>
                See More From{" "}
                <Link
                  to={`/shop/brand/${data?.singleProduct?.brand?.slug}`}
                  className="underline capitalize cursor-pointer"
                >
                  {data?.singleProduct?.brand?.name}
                </Link>
              </p>
              <p className="">{data?.singleProduct?.description}</p>
              <p className="text-3xl">$ {data?.singleProduct?.price}</p>
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
                {isProductInCart ? (
                  <>
                    <button
                      onClick={() =>
                        dispatch(removeToCart(data?.singleProduct?._id))
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
                      onClick={() =>
                        dispatch(
                          addToCart({
                            product: data.singleProduct,
                            quantity: productQuantity,
                            userId:user._id
                          })
                        )
                      }
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
