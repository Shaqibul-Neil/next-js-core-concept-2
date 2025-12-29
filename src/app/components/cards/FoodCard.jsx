import Link from "next/link";
import CardButton from "../buttons/CardButton";
import style from "@/app/foods/foods.module.css";
import Image from "next/image";

const FoodCard = ({ food }) => {
  const { title, category, foodImg, price, id } = food;

  return (
    <div
      className={`bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition ${style.bgred}`}
    >
      <Image
        src={foodImg}
        alt={title}
        className="h-48 w-full object-cover"
        width={300}
        height={250}
      />

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        <p className="text-sm text-gray-500">{category}</p>

        <p className="text-lg font-bold text-emerald-600">৳ {price}</p>

        <div className="flex gap-2 pt-3">
          <CardButton food={food} />
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
