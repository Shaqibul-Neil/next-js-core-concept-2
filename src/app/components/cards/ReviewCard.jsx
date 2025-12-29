import Image from "next/image";
import { useState } from "react";
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { user, photo, rating, review: reviewText, likes, date } = review;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 max-w-xl border">
      {/* user info */}
      <div className="flex items-center gap-4">
        <Image
          width={48}
          height={48}
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-gray-800">{user}</h3>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* rating */}
      <div className="flex items-center gap-1 mt-3">
        {[1, 2, 3, 4, 5].map((star) =>
          star <= rating ? (
            <FaStar key={star} className="text-yellow-400" />
          ) : (
            <FaRegStar key={star} className="text-gray-300" />
          )
        )}
      </div>

      {/* review text */}
      <p className="mt-4 text-gray-700 leading-relaxed">{reviewText}</p>

      {/* like button */}
      <button
        className="mt-4 flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition cursor-pointer"
        onClick={handleLike}
      >
        <FaHeart className={`${liked ? "text-red-500" : "text-gray-400"}`} />
        <span>{likeCount} likes</span>
      </button>
    </div>
  );
};

export default ReviewCard;
