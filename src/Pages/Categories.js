import CategoryCard from "../components/Cards/CategoryCard";
const categoryData = [
  {
    title: "Category_1",
    categoryId: 1,
  },
  {
    title: "Category_2",
    categoryId: 2,
  },
  {
    title: "Category_3",
    categoryId: 3,
  },
  {
    title: "Category_4",
    categoryId: 4,
  },
];

function Categories() {
  return (
    <div className="bg-secondaryExtraLight h-screen">
      <div className="w-full m-auto pt-12 justify-center px-20">
        <p className="text-3xl font-bold text-secondaryDark">
          Available Categories
        </p>
        <div className="flex flex-row mt-4 justify-evenly flex-wrap">
          {categoryData.map((item, index) => {
            return <CategoryCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
