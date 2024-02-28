import { useNavigate } from "react-router";

function CategoryCard({ item }) {
  const navigate = useNavigate();
  return (
    <div className="w-64 border-1 border-white p-4 rounded-lg m-4">
      <div className="w-full border-1 border-white p-3 text-left rounded-lg shadow-3xl">
        <p className="text-2xl font-bold mb-2">{item.title}</p>
        <button
          onClick={() => navigate(`/${item.categoryId}/courses`)}
          className="bg-secondaryLight mt-2 py-1 px-3 text-white rounded-full"
        >
          View Courses
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
