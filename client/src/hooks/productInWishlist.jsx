import { useSelector } from "react-redux";

export function useProductInTheWishlist(productId) {
  const { wishList } = useSelector((state) => state.wishlist);
  const isInWishList = wishList.some((item) => item._id === productId);
  return isInWishList;
}
