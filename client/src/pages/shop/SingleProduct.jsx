import ReactStars from "react-rating-stars-component";
import { RiShoppingBagLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/productApiSlice";
import iamgePlaceholder from "../../assets/placeholder-image.png";
import Spinner from "../../components/Spinner";
import { addToCart, removeToCart } from "../../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = () => {
  
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(productId);
  const { cart } = useSelector((state) => state.cart);

  const ratingChanged = (newRating) => {
    console.log(newRating);
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
              <div className="flex flex-col gap-y-1">
                <label htmlFor="email" className="text-sm">
                  Quantity
                </label>
                <input
                  type="number"
                  name=""
                  min="1"
                  id=""
                  placeholder="Please Enter your email"
                  className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                />
              </div>
              <div className="flex flex-row items-center mt-3 gap-x-5 ">
                {cart.length > 0 ? (
                  <>
                    <button
                      onClick={() => dispatch(removeToCart(productId))}
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
                      onClick={() => dispatch(addToCart(productId))}
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

            {/* rating */}
            <div className="px-3 py-3 mt-5 bg-white">
              <p className="font-semibold">Rating</p>
              <div className="flex flex-row gap-x-3">
                <span>⭐⭐⭐ </span>
                <p className="text-sm">based on 2 reviews.</p>
              </div>
              <hr className="mt-2 border-y-4" />
              <div className="mt-3">
                <div className="flex flex-row justify-between">
                  <span className="text-sm">5 start</span>
                  <progress value="70" max="100" color="" className="w-3/4" />
                  <span className="text-sm">70%</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-sm">4 start</span>
                  <progress value="40" max="100" color="" className="w-3/4" />
                  <span className="text-sm">40%</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-sm">3 start</span>
                  <progress value="0" max="100" color="" className="w-3/4" />
                  <span className="text-sm">0%</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-sm">2 start</span>
                  <progress value="0" max="100" color="" className="w-3/4" />
                  <span className="text-sm">0%</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-sm">1 start</span>
                  <progress value="0" max="100" color="" className="w-3/4" />
                  <span className="text-sm">0%</span>
                </div>
              </div>
            </div>
            {/* coments */}
            <div className="flex flex-col mt-5 gap-y-3">
              <div className="h-max bg-white py-3 px-3 flex flex-row justify-between border-[1px]">
                <div className="flex flex-row items-center gap-x-5">
                  <div>
                    <img
                      src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg"
                      className="w-[60px] rounded-[80%] border-[1px]"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="flex flex-col text-base font-semibold">
                      John{" "}
                      <span className="text-xs font-normal">
                        Monday, Oct 12, 2023
                      </span>
                    </p>

                    <p className="mt-2 text-sm">Nice shirt</p>
                  </div>
                </div>
                <div>
                  <span>⭐⭐⭐</span>
                </div>
              </div>
              <div className="h-max bg-white py-3 px-3 flex flex-row justify-between border-[1px]">
                <div className="flex flex-row items-center gap-x-5">
                  <div>
                    <img
                      src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg"
                      className="w-[60px] rounded-[80%] border-[1px]"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="flex flex-col text-base font-semibold">
                      John{" "}
                      <span className="text-xs font-normal">
                        Monday, Oct 12, 2023
                      </span>
                    </p>

                    <p className="mt-2 text-sm">Nice shirt</p>
                  </div>
                </div>
                <div>
                  <span>⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* write a review */}
        <div></div>
        <div className="px-5 py-5 mt-5 bg-white">
          <p>Title</p>
          <div className="flex flex-col mt-3 gap-y-5">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-xs">
                Email Address
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Review Title"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-xs">
                Comment
              </label>
              <textarea
                name="text"
                id=""
                cols="30"
                rows="3"
                placeholder="Write Review"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
              ></textarea>
            </div>
          </div>

          <div className="mt-5">
            <p>Rating</p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>

          <div className="flex flex-row items-center w-3/6 mt-3 gap-x-5">
            <button className="text-xs border-[1px] border-gray-200 px-8 py-2 hover:bg-blue-500 hover:text-white">
              Publish Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
