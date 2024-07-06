import { useGetBrandsQuery } from "@/redux/api/brandApiSlice";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  const { data } = useGetBrandsQuery();

  return (
    <section className="py-6 w-[80%] mx-auto flex flex-col">
      <div className="flex flex-col gap-y-3 ">
        <p className="text-2xl font-medium font-Poppins">SHOP BY BRAND</p>
        <hr />
      </div>
      <div className="flex flex-col pt-4 gap-y-4">
        <div className="grid grid-cols-4 gap-4">
          {data?.map((brand) => (
            <Link key={brand._id} to={`/shop/brand/${brand.slug}`}>
              <div className="p-2 border-[1px] h-[100px] flex flex-col gap-y-2 cursor-pointer hover:bg-[#F6F7F8]">
                <p className="capitalize">{brand.name}</p>
                <span className="text-sm">
                  {brand.description
                    ? `${brand.description}`
                    : " Lorem, ipsum dolor sit amet adipisicing ..."}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
