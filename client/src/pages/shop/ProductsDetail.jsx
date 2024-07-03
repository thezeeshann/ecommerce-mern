import {
  useGetProductsQuery,
  useGetHighToLowPriceProductQuery,
  useGetLowToHightPriceProductQuery,
} from "../../redux/api/productApiSlice";
import Spinner from "../../components/Spinner";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
import Category from "./Category";
import { useGetCategoryQuery } from "@/redux/api/categoryApiSlice";

const ProductsDetail = ({ sortBy, brandSlug }) => {
  const { data, isLoading, error } = useGetProductsQuery();
  const {data:categoryData} = useGetCategoryQuery()
  console.log(categoryData);
  const { data: hignToLowPriceProducts } = useGetHighToLowPriceProductQuery();
  const { data: lowToHighPriceProducts } = useGetLowToHightPriceProductQuery();
  const location = useLocation();
  console.log(location)

  const getProductList = () => {
    switch (sortBy) {
      case "high":
        return hignToLowPriceProducts?.products;
      case "low":
        return lowToHighPriceProducts?.products;
      default:
        return data?.products;
    }
  };

  const products = getProductList();

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
                {location.pathname === `/shop/category/${categoryData.data?.map((c)=>c.slug)}` ? (
                  <Category />
                ) : (
                  products
                    ?.filter((product) =>
                      brandSlug ? product.brand.slug === brandSlug : true
                    )
                    .map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default ProductsDetail;
