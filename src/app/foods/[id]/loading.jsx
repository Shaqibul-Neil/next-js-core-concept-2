const Loading = () => {
  return (
    <div className="container mx-auto p-6 max-w-5xl animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 rounded-3xl p-6">
        {/* Image Skeleton */}
        <div className="bg-gray-300 h-96 w-full rounded-2xl"></div>

        {/* Content Skeleton */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
          </div>
          <div className="h-10 w-3/4 bg-gray-300 rounded-lg"></div>
          <div className="h-8 w-1/4 bg-gray-300 rounded-lg"></div>
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
          </div>
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-32 bg-gray-300 rounded-xl"></div>
            <div className="h-12 w-32 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
