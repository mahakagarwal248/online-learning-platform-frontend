import { useNavigate } from "react-router";
import CategoryCard from "../Cards/CategoryCard";
import SectionHeading from "../Headings/SectionHeading";
import "./Categories.css";

const data = [
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
  const navigate = useNavigate();
  return (
    <div className="w-full m-auto py-12 justify-center px-36 sm:px-20 xsm:px-12 bg-secondaryExtraLight">
      <SectionHeading heading={"CATEGORIES"} />
      <h1 className="text-4xl text-primaryDark my-3">Course Categories</h1>
      <div className="flex flex-row justify-evenly flex-wrap">
        {data.map((item, index) => {
          return <CategoryCard key={index} item={item} />;
        })}
      </div>
      <button
        onClick={() => navigate("/categories")}
        className="bg-secondaryLight text-white px-9 py-3 mt-3 rounded-full"
      >
        View All
      </button>
    </div>
  );
}

export default Categories;
