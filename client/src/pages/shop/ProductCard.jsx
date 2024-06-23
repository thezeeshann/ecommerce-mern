import { PiStarThin } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToWishList,
  removeFromWishList,
} from "@/redux/features/wishlistSlice";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.wishlist);
  const isInWishList = wishList.some((item) => item._id === product._id);

  return (
    <div
      key={product._id}
      className="bg-white shadow-sm max-w-[24%] cursor-pointer  p-2"
    >
      <div className="absolute m-1">
        {isInWishList ? (
          <FaHeart
            size={"1.5rem"}
            className="text-red-500"
            onClick={() => {
              dispatch(removeFromWishList(product._id));
              toast.success("Product removed from your wishlist!");
            }}
          />
        ) : (
          <CiHeart
            size={"2rem"}
            className="text-gray-500 "
            onClick={() => {
              dispatch(addToWishList(product));
              toast.success("Product added to your wishlist!");
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
        <p>
          <span className=" text-neutral-500">By </span>
          {product?.brand?.name}
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
};

export default ProductCard;
