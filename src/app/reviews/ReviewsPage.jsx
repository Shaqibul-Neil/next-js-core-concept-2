"use client";
import { useEffect, useState } from "react";
import ReviewCard from "../components/cards/ReviewCard";
import ReviewLoading from "./ReviewLoading";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data?.reviews || []);
        setLoading(false);
      });
  }, []);
  if (loading) return <ReviewLoading />;
  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total {reviews.length} reviews Found
      </h2>
      <div className="grid grid-cols-3 my-6 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
