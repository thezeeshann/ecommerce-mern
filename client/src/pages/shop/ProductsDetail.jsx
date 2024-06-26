import {
  useGetProductsQuery,
  useGetHighToLowPriceProductQuery,
  useGetLowToHightPriceProductQuery,
} from "../../redux/api/productApiSlice";
import Spinner from "../../components/Spinner";
import ProductCard from "./ProductCard";

const ProductsDetail = ({ sortBy, brandSlug }) => {
  const { data, isLoading, error } = useGetProductsQuery();
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
                {products
                  ?.filter((product) =>
                    brandSlug ? product.brand.slug === brandSlug : true
                  )
                  .map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default ProductsDetail;
