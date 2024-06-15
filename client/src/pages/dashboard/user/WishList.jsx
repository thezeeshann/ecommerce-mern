import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../../../redux/features/wishlistSlice";
import toast from "react-hot-toast";

const WishList = () => {
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.wishlist);  


  return (
    <div className="flex flex-col">
      <p>{wishList.length} Your Wishlist</p>
      <hr />
      <div className="relative">
        {wishList.length === 0 ? (
          <p className="mt-3 text-sm text-center">
            You have no items in your wishlist
          </p>
        ) : (
          wishList.map((wishlist) => (
            <div key={wishList._id}>
              <div className="flex flex-row justify-between items-center  p-3 gap-x-4 border-[1px] mt-5">
                <div className="flex flex-row items-center gap-x-2">
                  <img
                    src={wishlist.image}
                    className="w-[70px] h-[70px]"
                    alt=""
                  />
                  <div className="flex flex-col ">
                    <p className="font-semibold">{wishlist.productName}</p>
                    <p className="text-sm">${wishlist.price}</p>
                    <p className="text-sm">
                      Wishlist Added on Monday, Mar 4, 2024
                    </p>
                  </div>
                </div>
                <div className="">
                  <MdCancel
                    onClick={() => {
                      toast.success("Product removed from your wishlist");
                      dispatch(removeFromWishList(wishlist._id));
                    }}
                    size={"2rem"}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishList;
