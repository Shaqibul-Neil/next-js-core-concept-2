import ReviewCardSkeleton from "../components/skeleton/ReviewCardSkeleton";

const ReviewLoading = () => {
  return (
    <div className="grid grid-cols-3 my-6 gap-5">
      {[...Array(12)].map((_, i) => (
        <ReviewCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default ReviewLoading;
