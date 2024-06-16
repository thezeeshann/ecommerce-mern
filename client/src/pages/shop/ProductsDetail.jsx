import {
  useGetProductsQuery,
  useGetHighToLowPriceProductQuery,
  useGetLowToHightPriceProductQuery,
} from "../../redux/api/productApiSlice";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { PiStarThin } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import {
  addToWishList,
  removeFromWishList,
} from "../../redux/features/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProductsDetail = ({ sortBy }) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetProductsQuery();
  const { data: hignToLowPriceProducts } = useGetHighToLowPriceProductQuery();
  const { data: lowToHighPriceProducts } = useGetLowToHightPriceProductQuery();
  const { wishList } = useSelector((state) => state.wishlist);
  return (
    <section>
      {isLoading === true ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {error ? (
            <div>
              <p className="text-center">
                Something went wrong while fetching products data
              </p>
            </div>
          ) : (
            <>
              <>
                <div className="relative flex flex-row flex-wrap w-full gap-x-3 gap-y-3">
                  {sortBy === "new" && (
                    <>
                      {data?.products?.map((product) => {
                        const isInWishList = wishList.some(
                          (item) => item._id === product._id
                        );
                        return (
                          <div
                            key={product._id}
                            className="bg-white shadow-sm max-w-[24%] cursor-pointer  p-2"
                          >
                            <div className="absolute ">
                              {isInWishList ? (
                                <FaHeart
                                  size={"1.5rem"}
                                  className="text-red-500"
                                  onClick={() => {
                                    dispatch(removeFromWishList(product._id));
                                    toast.success(
                                      "Product removed from your wishlist!"
                                    );
                                  }}
                                />
                              ) : (
                                <CiHeart
                                  size={"2rem"}
                                  className="text-gray-500 "
                                  onClick={() => {
                                    dispatch(addToWishList(product));
                                    toast.success(
                                      "Product added to your wishlist!"
                                    );
                                  }}
                                />
                              )}
                            </div>

                            <Link to={`/shop/product/${product.slug}`}>
                              <img
                                src={product.image}
                                alt={product.productName}
                                className="object-cover object-center w-[222px] h-[222px] group-hover:opacity-75"
                              />
                            </Link>
                            <div className="flex flex-col p-2">
                              <p className="text-blue-500">
                                {product.productName}
                              </p>
                              <p>
                                <span className=" text-neutral-500">By </span>
                                Apple
                              </p>
                              <div className="flex flex-row items-center justify-between">
                                <p className="">$ {product.price}</p>

                                <p className="flex flex-row items-center gap-x-1">
                                  4.2{" "}
                                  <span>
                                    {" "}
                                    <PiStarThin />
                                  </span>{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  )}

                  {sortBy === "high" && (
                    <>
                      <>
                        {hignToLowPriceProducts?.products?.map((product) => {
                          const isInWishList = wishList.some(
                            (item) => item._id === product._id
                          );
                          return (
                            <div
                              key={product._id}
                              className="bg-white shadow-sm max-w-[24%] cursor-pointer  p-2"
                            >
                              <div className="absolute ">
                                {isInWishList ? (
                                  <FaHeart
                                    size={"1.5rem"}
                                    className="text-red-500"
                                    onClick={() => {
                                      dispatch(removeFromWishList(product._id));
                                      toast.success(
                                        "Product removed from your wishlist!"
                                      );
                                    }}
                                  />
                                ) : (
                                  <CiHeart
                                    size={"2rem"}
                                    className="text-gray-500 "
                                    onClick={() => {
                                      dispatch(addToWishList(product));
                                      toast.success(
                                        "Product added to your wishlist!"
                                      );
                                    }}
                                  />
                                )}
                              </div>

                              <Link to={`/shop/product/${product.slug}`}>
                                <img
                                  src={product.image}
                                  alt={product.productName}
                                  className="object-cover object-center w-[222px] h-[222px] group-hover:opacity-75"
                                />
                              </Link>
                              <div className="flex flex-col p-2">
                                <p className="text-blue-500">
                                  {product.productName}
                                </p>
                                <p>
                                  <span className=" text-neutral-500">By </span>
                                  Apple
                                </p>
                                <div className="flex flex-row items-center justify-between">
                                  <p className="">$ {product.price}</p>

                                  <p className="flex flex-row items-center gap-x-1">
                                    4.2{" "}
                                    <span>
                                      {" "}
                                      <PiStarThin />
                                    </span>{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </>
                  )}
                  {sortBy === "low" && (
                    <>
                      {lowToHighPriceProducts?.products?.map((product) => {
                        const isInWishList = wishList.some(
                          (item) => item._id === product._id
                        );
                        return (
                          <div
                            key={product._id}
                            className="bg-white shadow-sm max-w-[24%] cursor-pointer  p-2"
                          >
                            <div className="absolute ">
                              {isInWishList ? (
                                <FaHeart
                                  size={"1.5rem"}
                                  className="text-red-500"
                                  onClick={() => {
                                    dispatch(removeFromWishList(product._id));
                                    toast.success(
                                      "Product removed from your wishlist!"
                                    );
                                  }}
                                />
                              ) : (
                                <CiHeart
                                  size={"2rem"}
                                  className="text-gray-500 "
                                  onClick={() => {
                                    dispatch(addToWishList(product));
                                    toast.success(
                                      "Product added to your wishlist!"
                                    );
                                  }}
                                />
                              )}
                            </div>

                            <Link to={`/shop/product/${product.slug}`}>
                              <img
                                src={product.image}
                                alt={product.productName}
                                className="object-cover object-center w-[222px] h-[222px] group-hover:opacity-75"
                              />
                            </Link>
                            <div className="flex flex-col p-2">
                              <p className="text-blue-500">
                                {product.productName}
                              </p>
                              <p>
                                <span className=" text-neutral-500">By </span>
                                Apple
                              </p>
                              <div className="flex flex-row items-center justify-between">
                                <p className="">$ {product.price}</p>

                                <p className="flex flex-row items-center gap-x-1">
                                  4.2{" "}
                                  <span>
                                    {" "}
                                    <PiStarThin />
                                  </span>{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              </>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default ProductsDetail;
