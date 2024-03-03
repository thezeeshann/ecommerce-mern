import { useGetProductsQuery } from "../../redux/api/productApiSlice";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

const ProductsDetail = () => {
  const { data, isLoading , error } = useGetProductsQuery();

  return (
    <section>
      {isLoading === true ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className=" bg-white">
          {error ? (
            <div>
              <p className="text-center">Something went wrong while fetching products data</p>
            </div>
          ) : (
            <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                {data?.products?.map((product) => (
                  <div key={product._id} className="group">
                    <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                      <Link to={`/shop/single-product/${product._id}`}>
                        <img
                          src={product.image}
                          alt={product.productName}
                          className="object-cover object-center w-full h-full group-hover:opacity-75"
                        />
                      </Link>
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.productName}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProductsDetail;
