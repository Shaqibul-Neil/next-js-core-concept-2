const FeedbackSkeleton = () => {
  return (
    <div className="bg-white rounded-xl border p-5 space-y-4 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>

      <div className="flex items-center justify-between">
        <div className="h-3 bg-gray-200 rounded w-24"></div>
        <div className="flex gap-2">
          <div className="h-8 w-16 bg-gray-200 rounded"></div>
          <div className="h-8 w-16 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSkeleton;
