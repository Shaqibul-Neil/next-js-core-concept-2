import FoodCardSkeleton from "../components/skeleton/FoodCardSkeleton";

const Loading = () => {
  return (
    <div className="grid grid-cols-3 my-6 gap-5">
      {[...Array(12)].map((_, i) => (
        <FoodCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default Loading;
