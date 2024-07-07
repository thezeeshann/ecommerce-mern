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

const ProductsDetail = ({
  sortBy,
  brandSlug,
  rating,
  categorySlug,
  currentPage,
}) => {
  const location = useLocation();
  const { data, isLoading, error } = useGetProductsQuery();
  const {
    data: categoryData,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetCategoryQuery();
  const { data: hignToLowPriceProducts } = useGetHighToLowPriceProductQuery();
  const { data: lowToHighPriceProducts } = useGetLowToHightPriceProductQuery();

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

  const filteredProducts = products?.filter((product) =>
    brandSlug ? product.brand.slug === brandSlug : true
  );

  return (
    <section className="">
      {isLoading === true || categoryLoading === true ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {error || categoryError ? (
            <div>
              <p className="text-center">
                Something went wrong while fetching the data
              </p>
            </div>
          ) : (
            <> 
              <div className="relative flex flex-row flex-wrap items-center justify-start gap-x-[10px] gap-y-3">
                {location.pathname === `/shop/category/${categorySlug}` ? (
                  <Category
                    categoryData={categoryData}
                    categorySlug={categorySlug}
                  />
                ) : filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts
                    .slice(currentPage * 4 - 4, currentPage * 4)
                    .map((product) => (
                      <ProductCard
                        rating={rating}
                        key={product._id}
                        product={product}
                      />
                    ))
                ) : (
                  <div className="flex items-center justify-center mx-auto w-30">
                    <p className="text-sm font-medium">products not found.</p>
                  </div>
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
