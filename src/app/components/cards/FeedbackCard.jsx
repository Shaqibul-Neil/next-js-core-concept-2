import { formatDistanceToNow } from "date-fns";

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const { _id, message, date } = feedback;

  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 space-y-4">
      <p className="text-gray-800 text-base">{message}</p>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{formatDistanceToNow(new Date(date), { addSuffix: true })}</span>

        <div className="flex gap-2">
          <button
            //onClick={() => onUpdate(_id)}
            className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
          >
            Update
          </button>
          <button
            //onClick={() => onDelete(_id)}
            className="px-3 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
