

export function avarageRating(data) {
  const totalRatings = data?.data?.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  const averageRating =
    totalRatings > 0 && Math.round(totalRatings / data?.totalReviews);

  return averageRating;
}
