import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToWishList,
  removeFromWishList,
} from "@/redux/features/wishlistSlice";
import toast from "react-hot-toast";
import { useGetSingleReviewQuery } from "@/redux/api/reviewApiSlice";
import { avarageRating } from "@/lib/averageRating";
import { useProductInTheWishlist } from "@/hooks/productInWishlist";

const ProductCard = ({ product,rating }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { data } = useGetSingleReviewQuery(product._id);
  const isInWishList = useProductInTheWishlist(product._id);
  const averageRating = avarageRating(data);

  
  if (rating !== null && averageRating !== rating) {
    return null;
  }

  return (
    <div
      key={product._id}
      className="bg-white shadow-sm max-w-[24%] cursor-pointer  p-2"
    >
      <div className="absolute p-[2px]  m-1 bg-white rounded-full ">
        {isInWishList ? (
          <FaHeart
            size={22}
            className="text-red-500"
            onClick={() => {
              dispatch(removeFromWishList(product._id));
              toast.success("Product removed from your wishlist!");
            }}
          />
        ) : (
          <CiHeart
            size={25}
            className="text-gray-500 "
            onClick={() => {
              if (user) {
                dispatch(addToWishList(product));
                toast.success("Product added to your wishlist!");
              } else {
                toast.error("Please login to wishlist a product");
              }
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
        <p className="font-medium text-blue-500">{product.productName}</p>
        <p className="capitalize">
          <span className=" text-neutral-500">By </span>
          {product?.brand?.name}
        </p>
        <div className="flex flex-row items-center justify-between">
          <p className="">$ {product.price}</p>

          <p className="flex flex-row items-center gap-x-1">
            {averageRating ? (
              <div className="flex flex-row items-center gap-x-1">
                <span>{averageRating}</span>
                <span>
                  <FaStar className="text-[#FFD700]" size={"1.1rem"} />
                </span>
              </div>
            ) : (
              <div className="flex flex-row items-center gap-x-1">
                <span>0</span>
                <span>
                  <FaStar className="text-[#FFD700]" size={"1.1rem"} />
                </span>
              </div>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
