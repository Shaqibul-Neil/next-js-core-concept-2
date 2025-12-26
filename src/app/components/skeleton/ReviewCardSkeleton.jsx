const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 max-w-xl border animate-pulse">
      {/* user info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-300" />
        <div className="space-y-2">
          <div className="w-32 h-4 bg-gray-300 rounded" />
          <div className="w-20 h-3 bg-gray-200 rounded" />
        </div>
      </div>

      {/* stars */}
      <div className="flex gap-2 mt-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-5 h-5 bg-gray-300 rounded" />
        ))}
      </div>

      {/* review lines */}
      <div className="mt-4 space-y-2">
        <div className="w-full h-4 bg-gray-200 rounded" />
        <div className="w-11/12 h-4 bg-gray-200 rounded" />
        <div className="w-9/12 h-4 bg-gray-200 rounded" />
      </div>

      {/* like button */}
      <div className="mt-5 w-20 h-4 bg-gray-300 rounded" />
    </div>
  );
};

export default ReviewCardSkeleton;
