import { useGetProductsQuery } from "../../redux/api/productApiSlice";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { PiStarThin } from "react-icons/pi";
// import { IoMdHeartEmpty } from "react-icons/io";

const ProductsDetail = () => {
  const { data, isLoading, error } = useGetProductsQuery();

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
              <>
                <div className="flex flex-row flex-wrap w-full gap-x-3 gap-y-3">
                  {data?.products?.map((product) => (
                    <div
                      key={product._id}
                      className="bg-white shadow-sm max-w-[24%] cursor-pointer  p-2"
                    >
                      {/* <IoMdHeartEmpty   size="1.5rem" color="#FF0000"  /> */}
                      <Link to={`/shop/single-product/${product._id}`}>
                        <img
                          src={product.image}
                          alt={product.productName}
                          className="object-cover object-center w-[222px] h-[222px] group-hover:opacity-75"
                        />
                      </Link>
                      <div className="flex flex-col p-2">
                        <p className="text-blue-500">{product.productName}</p>
                        <p>
                          <span className=" text-neutral-500">By </span>Apple
                        </p>
                        <div className="flex flex-row items-center justify-between">
                          <p className="">{product.price}</p>

                          <p className="flex flex-row items-center gap-x-1">
                            4.2{" "}
                            <span>
                              {" "}
                              <PiStarThin />
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            </>
          )}
        </>

      )}
    </section>
  );
};

export default ProductsDetail;
