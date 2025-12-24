import Link from "next/link";

const FoodCard = ({ food }) => {
  const { title, category, foodImg, price, id } = food;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={foodImg} alt={title} className="h-48 w-full object-cover" />

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        <p className="text-sm text-gray-500">{category}</p>

        <p className="text-lg font-bold text-emerald-600">৳ {price}</p>

        <div className="flex gap-2 pt-3">
          <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm">
            Add to Cart
          </button>

          <Link
            href={`/foods/${id}`}
            className="flex-1 text-center border border-gray-300 hover:bg-gray-100 py-2 rounded-lg text-sm bg-slate-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
