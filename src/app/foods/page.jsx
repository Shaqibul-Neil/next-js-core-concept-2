import FoodCard from "../components/cards/FoodCard";
import CartItems from "./cart/CartItems";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await getFoods();
  console.log(foods);

  return (
    <div>
      <h2 className="text-4xl font-bold">Total {foods.length} Foods Found</h2>
      <div className="flex gap-5">
        <div className="flex-1 grid grid-cols-3 my-6 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <div className="w-80 border-2 rounded-xl p-4">
          <h2 className="text-2xl font-bold">Cart Items</h2>
          <hr />
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
