const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200"></div>

      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="h-5 bg-gray-200 rounded w-1/4"></div>

        <div className="flex gap-2 pt-3">
          <div className="h-9 bg-gray-200 rounded-lg w-full"></div>
          <div className="h-9 bg-gray-200 rounded-lg w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
