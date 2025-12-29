import Link from "next/link";
import FeedbackCard from "../components/cards/FeedbackCard";

export const metadata = {
  title: "Feedbacks",
};

const getFeedBack = async () => {
  const res = await fetch("http://localhost:3000/api/feedback/", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });

  return await res.json();
};
const FeedbackPage = async () => {
  const feedbacks = await getFeedBack();
  console.log(feedbacks);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {feedbacks.length} Feedbacks Found
        </h2>
        <Link href={"/feedbacks/add"} className=" bg-red-400 p-4 rounded-xl">
          Add Feedback
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-5 my-3">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
