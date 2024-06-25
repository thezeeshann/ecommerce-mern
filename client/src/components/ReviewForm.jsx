import ReactStars from "react-rating-stars-component";
import {
  useAddReviewMutation,
  useGetReviewsQuery,
  useGetSingleReviewQuery,
} from "../redux/api/reviewApiSlice";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useSelector } from "react-redux";

const ReviewForm = ({ productId }) => {
  const { user } = useSelector((state) => state.user);
  const [addReview, { isLoading }] = useAddReviewMutation();
  const { refetch } = useGetSingleReviewQuery(productId);
  const { refetch: refetchGetReview } = useGetReviewsQuery();
  const [formData, setFormData] = useState({
    title: "",
    review: "",
    rating: 0,
  });

  const { title, review, rating } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      review: "",
      rating: 0,
    });
  };

  const handleRatingChange = (newRating) => {
    setFormData((prev) => ({
      ...prev,
      rating: newRating,
    }));
  };

  const submitReviewForm = async (e) => {
    e.preventDefault();

    try {
      if (!user) {
        return toast.error("you must be logged in");
      } else {
        const data = {
          title,
          review,
          rating,
          productId,
        };
        const response = await addReview(data);
        console.log("REViEW API RESPONSE...", response);
        toast.success("revew added successfully");
        resetForm();
        refetch();
        refetchGetReview();
      }
    } catch (error) {
      console.log("REVIEW API ERROR...", error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <form onSubmit={submitReviewForm}>
      <div className="px-5 py-5 mt-5 bg-white ">
        <div className="flex flex-col mt-3 gap-y-5">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="title" className="text-xs">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              placeholder="Enter Review Title"
              className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="Comment" className="text-xs">
              Comment
            </label>
            <textarea
              name="review"
              value={review}
              onChange={handleChange}
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
            onChange={handleRatingChange}
            value={rating}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>

        <div className="flex flex-row items-center w-3/6 mt-3 gap-x-5">
          <button
            type="submit"
            disabled={isLoading}
            className="text-xs border-[1px] border-gray-200 px-8 py-2 hover:bg-blue-500 hover:text-white"
          >
            Publish Review
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
