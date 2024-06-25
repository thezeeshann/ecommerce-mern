import { useGetSingleReviewQuery } from "../redux/api/reviewApiSlice";
import ReactStars from "react-rating-stars-component";
const Rating = ({ productId }) => {
  const { data } = useGetSingleReviewQuery(productId);

  const totalRatings = data?.data?.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  const averageRating =
    totalRatings > 0 && Math.round(totalRatings / data?.totalReviews);

  return (
    <div className="px-3 py-3 mt-5 bg-white h-min">
      <p className="font-semibold">Rating</p>
      <div className="flex flex-row items-center gap-x-3">
        {averageRating ? (
          <>
            <div className="">
              <ReactStars
                count={5}
                value={averageRating}
                size={24}
                edit={false}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <div>
              {data?.totalReviews > 0 && (
                <p className="text-sm">
                  based on {data?.totalReviews} reviews.
                </p>
              )}
            </div>
          </>
        ) : (
        <p className="mt-2 text-sm">Rating Not Added Yet!</p>
        )}
      </div>
    </div>
  );
};

export default Rating;
