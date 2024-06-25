import { useGetSingleReviewQuery } from "../redux/api/reviewApiSlice";
import ReactStars from "react-rating-stars-component";

const Reviews = ({ productId }) => {
  const { data } = useGetSingleReviewQuery(productId);

  return (
    <div className="flex flex-col mt-5 gap-y-3">
      {data?.data?.map((review) => (
        <div
          key={review?._id}
          className="h-max bg-white py-3 px-3 flex flex-row justify-between border-[1px]"
        >
          <div className="flex flex-row items-center gap-x-5">
            <div>
              <img
                src={
                  review?.user?.image ||
                  "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg"
                }
                className="w-[50px] rounded-[80%] border-[1px]"
                alt=""
              />
            </div>
            <div className="">
              <p className="flex flex-col text-base font-semibold">
                {review?.title}
                <span className="text-xs font-normal">
                  {new Date(review?.created).toLocaleDateString("en-Us", {
                    weekday: "long",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </p>

              <p className="mt-2 text-sm">{review?.review}</p>
            </div>
          </div>
          <div>
            <ReactStars
              value={review?.rating}
              count={5}
              size={24}
              edit={false}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
