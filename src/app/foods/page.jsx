const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await getFoods();

  return (
    <div>
      <h2 className="text-4xl font-bold">Total {foods.length} Foods Found</h2>
    </div>
  );
};

export default FoodsPage;
