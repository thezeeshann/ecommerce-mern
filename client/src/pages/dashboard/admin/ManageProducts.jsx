import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
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
import { Button } from "@radix-ui/themes";
import { useGetProductsQuery } from "@/redux/api/productApiSlice";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "@/redux/api/productApiSlice";
import toast from "react-hot-toast";
import { useState } from "react";

const ManageProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const { data, refetch } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await deleteProduct(productId);
      toast.success("Product delete successfully");
      console.log("DELETE PRODUCT API RESPONSE", response);
      refetch();
    } catch (error) {
      console.log("DELETE PRODUCT API ERROR", error);
    }
  };

  return (
    <>
      <section className="flex flex-col gap-y-4">
        <div className="flex flex-row items-center justify-between">
          <p className="text-lg font-medium">Manage Products</p>

          {addProductOpen === true ? (
            <p
              onClick={() => setAddProductOpen(false)}
              className="text-lg font-medium cursor-pointer"
            >
              Cancel
            </p>
          ) : (
            <p
              onClick={() => setAddProductOpen(true)}
              className="text-lg font-medium cursor-pointer"
            >
              Add Products
            </p>
          )}
        </div>
        <hr />

        {addProductOpen === true ? (
          <div>
            <form >
              <div className="flex flex-row w-full mt-10">
                <div className="flex flex-col w-3/6 gap-y-2">
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="email" className="text-xs">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      // value={firstName}
                      // onChange={handleChange}
                      placeholder="Please Enter your First Name"
                      className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="email" className="text-xs">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      // onChange={handleChange}
                      // value={lastName}
                      placeholder="Please Enter your Last Name"
                      className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="email" className="text-xs">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      // value={email}
                      // onChange={handleChange}
                      placeholder="Please Enter your Email"
                      className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                    />
                  </div>

                  <div className="flex flex-row items-center justify-between w-full gap-x-1">
                    <div className="relative flex flex-col w-1/2 gap-y-1">
                      <label htmlFor="email" className="text-xs ">
                        Password
                      </label>
                      <input
                        type={"text"}
                        name="password"
                        // value={password}
                        // onChange={handleChange}
                        placeholder="Enter Password"
                        className=" px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                      />
                      {/* <span
                        className="absolute right-4 top-[28px] z-[10] cursor-pointer"
                        onClick={() => setShowPassword((value) => !value)}
                      >
                        {showPassword ? (
                          <IoMdEyeOff
                            size={"1.5rem"}
                            className="cursor-pointer"
                          />
                        ) : (
                          <IoMdEye size={"1.5rem"} className="cursor-pointer" />
                        )}
                      </span> */}
                    </div>

                    <div className="relative flex flex-col w-1/2 gap-y-1">
                      <label htmlFor="email" className="text-xs ">
                        Confirm Password
                      </label>
                      <input
                        type={"text"}
                        name="confirmPassword"
                        // value={confirmPassword}
                        // onChange={handleChange}
                        placeholder="Confirm Password"
                        className=" px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                      />
                      {/* <span
                        className="absolute right-4 top-[28px] z-[10] cursor-pointer"
                        onClick={() =>
                          setShowConfirmPassword((value) => !value)
                        }
                      >
                        {showConfirmPassword ? (
                          <IoMdEyeOff
                            size={"1.5rem"}
                            className="cursor-pointer"
                          />
                        ) : (
                          <IoMdEye size={"1.5rem"} className="cursor-pointer" />
                        )}
                      </span> */}
                    </div>
                  </div>

                  {/* <div className="mt-3 w-max border-[1px] border-gray-200">
                    <Tab tabData={tabData} field={role} setField={setRole} />
                  </div> */}
                </div>
                {/* <div className="flex items-center justify-center w-3/6 ">
                  <img src={registerImg} alt="" width={"45%"} />
                </div> */}
              </div>
              <hr className="mt-6" />
              <div className="flex flex-row w-full">
                {/* <div className="flex flex-row items-center w-3/6 mt-3 gap-x-5">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="text-xs border-[1px] border-gray-200 px-8 py-2 hover:bg-blue-500 hover:text-white"
                  >
                    {isLoading ? "Sign...." : "Sign Up"}
                  </button>
                </div> */}
                <div className="w-3/6 mt-3">
                  <Link to="/login">
                    <p className="text-sm cursor-pointer text-sky-500 text-end">
                      Back to Login?
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[25%]">Product</TableHead>
                <TableHead className="w-[15%]">Price</TableHead>
                <TableHead className="w-[15%]">Quantity</TableHead>
                <TableHead className="w-[15%]">Active</TableHead>
                <TableHead className="w-[15%]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.products?.map((product) => (
                <>
                  <TableRow key={product._id}>
                    <TableCell className="">
                      <Link to={`/shop/product/${product.slug}`}>
                        <div className="flex flex-row items-center gap-x-2">
                          <img
                            src={product?.image}
                            alt="Product image"
                            className="w-[15%] cursor-pointer h-[15%]"
                          />
                          <p className="font-medium text-blue-500 cursor-pointer">
                            {product.productName}
                          </p>
                        </div>
                      </Link>
                    </TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>
                      {product.isActive === true ? "True" : "False"}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="w-8 h-8 p-0 cur">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                          <DropdownMenuItem>Update Product</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setIsOpen(true)}>
                            Delete Product
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
                          onClick={() => handleDeleteProduct(product._id)}
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
    </>
  );
};

export default ManageProducts;
