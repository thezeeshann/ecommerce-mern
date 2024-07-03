import Spinner from "@/components/Spinner";
import { useGetCategoryQuery } from "@/redux/api/categoryApiSlice";
import { useParams } from "react-router-dom";
const Category = () => {
  const { categorySlug } = useParams();
  const { data, error, isLoading } = useGetCategoryQuery();
  return (
    <section>
      {isLoading === true ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {error ? (
            <div>
              <p className="text-center">
                Something went wrong while fetching products data
              </p>
            </div>
          ) : (
            <>
              <div className="relative flex flex-row flex-wrap w-full gap-x-3 gap-y-3">
                <div>
                  <h1>category</h1>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Category;
