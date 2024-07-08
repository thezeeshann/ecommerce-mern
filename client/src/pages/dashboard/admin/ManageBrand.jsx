import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdDelete } from "react-icons/md";
import {
  useAddBrandMutation,
  useDeleteBrandMutation,
  useGetBrandsQuery,
} from "@/redux/api/brandApiSlice";
import { useGetProductsQuery } from "@/redux/api/productApiSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ManageBrand = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [addBrandOpen, setAddBrandOpen] = useState(false);
  const [brandIdToDelete, setBrandIdToDelete] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { data, refetch } = useGetBrandsQuery();
  const { data: productData } = useGetProductsQuery();
  const [addBrand, { isLoading }] = useAddBrandMutation();
  const [deleteBrand] = useDeleteBrandMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        description,
      };
      const response = await addBrand(data);
      if (response.error) {
        console.log(response.error);
        toast.error(response.error.data.message);
      } else {
        console.log("CREATE BRAND AP RESPONSE", response);
        toast.success("Brand created successfully");
        refetch();
      }
      setName("");
      setDescription("");
    } catch (error) {
      console.log("ADD BRAND API RESPONSE", error);
    }
  };

  const handleDelete = async (bId) => {
    try {
      const data = {
        brandId: bId,
      };
      const response = await deleteBrand(data);
      if (response.error) {
        console.log(response.error);
        // toast.error(response.error)
      } else {
        console.log("DELETE BRAND API RESPONSE", response);
        toast.success("Brand delete successfully");
        refetch();
      }
    } catch (error) {
      console.log("DELETE BRAND API RESPONSE", error);
    }
  };

  const openDeleteDialog = (brandId) => {
    setBrandIdToDelete(brandId);
    setIsOpen(true);
  };

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-row items-center justify-between">
        <p className="text-lg font-medium">Manage Brands</p>

        {addBrandOpen === true ? (
          <p
            onClick={() => setAddBrandOpen(false)}
            className="text-lg font-medium cursor-pointer"
          >
            <RxCross2 size={"2rem"} className="font-medium text-red-500/80" />
          </p>
        ) : (
          <p
            onClick={() => setAddBrandOpen(true)}
            className="text-lg font-medium cursor-pointer"
          >
            Add Products
          </p>
        )}
      </div>
      <hr />

      {addBrandOpen === true ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
          <div className="flex flex-row w-full gap-x-5">
            <div className="flex flex-col w-1/2 gap-y-1">
              <label htmlFor="text" className="text-sm">
                Brand Name
              </label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Product Name"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
              />
            </div>
            <div className="flex flex-col w-1/2 gap-y-1">
              <label htmlFor="number" className="text-sm">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Price"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
              />
            </div>
          </div>
          <hr className="mt-3" />
          <button
            type="submit"
            disabled={isLoading}
            className="text-sm border-[1px] px-4 py-2 mt-3 hover:bg-blue-500 hover:text-white w-max"
          >
            Add Brand
          </button>
        </form>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[15%]">Brand</TableHead>
              <TableHead className="w-[15%]">Description</TableHead>
              <TableHead className="w-[25%]">Product</TableHead>
              <TableHead className="w-[15%]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((brand) => (
              <>
                <TableRow key={brand._id}>
                  <TableCell className="">
                    <Link to={`/shop/brand/${brand.slug}`}>
                      <p className="font-medium text-blue-500 capitalize cursor-pointer">
                        {brand.name}
                      </p>
                    </Link>
                  </TableCell>
                  <TableCell className="capitalize">
                    {brand.description || "Description"}
                  </TableCell>

                  <TableCell className="capitalize">
                    {productData?.products
                      ?.filter((product) => product.brand._id === brand._id)
                      .map((product) => (
                        <p key={product._id}>{product.productName}</p>
                      ))}
                  </TableCell>
                  <TableCell>
                    <MdDelete
                      onClick={() => openDeleteDialog(brand._id)}
                      size={"1.5rem"}
                      className="text-red-500 cursor-pointer"
                    />
                  </TableCell>
                </TableRow>

                <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                  <AlertDialogTrigger asChild></AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to delete!
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(brandIdToDelete)}
                        className="bg-red-500/80"
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            ))}
          </TableBody>
        </Table>
      )}
    </section>
  );
};

export default ManageBrand;
