import { useGetSingleReviewQuery } from "@/redux/api/reviewApiSlice";
import { useProductInTheWishlist } from "@/hooks/productInWishlist";
import { avarageRating } from "@/lib/averageRating";

const useProductDetails = (productId) => {
  const { data: singleReview } = useGetSingleReviewQuery(productId);
  const averageRating = avarageRating(singleReview);
  const isInWishList = useProductInTheWishlist(productId);

  return { averageRating, isInWishList };
};

export default useProductDetails;
