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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RxCross2 } from "react-icons/rx";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@radix-ui/themes";
import {
  useCreateProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "@/redux/api/productApiSlice";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "@/redux/api/productApiSlice";
import toast from "react-hot-toast";
import { useState } from "react";

const ManageProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [currentProductId, setCurrentProductId] = useState(null);
  const { data, refetch } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [actionType, setActionType] = useState(null);
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    description: "",
    quantity: "",
    image: null,
  });

  const { productName, price, description, quantity, image } = formData;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("quantity", quantity);
      formData.append("image", image);

      const response = await createProduct(formData);
      if (response.error) {
        console.log(response);
        toast.error(response.error.data.message);
      } else {
        toast.success("Product create successfully");
        console.log("CREATE PRODUCT API RESPONSE", response);
      }
    } catch (error) {
      console.log("CREATE PRODUCT API ERROR", error);
    }
  };

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

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("quantity", quantity);
      formData.append("image", image);

      const response = await updateProduct({
        productId: currentProductId,
        formData,
      });
      if (response.error) {
        console.log(response);
        toast.error(response.error.data.message);
      } else {
        toast.success("Product updated successfully");
        console.log("UPDATE PRODUCT API RESPONSE");
        refetch();
      }
    } catch (error) {
      console.log("UPDATE PRODUCT API ERROR", error);
    }
  };

  const openDeleteDialog = (productId) => {
    setProductIdToDelete(productId);
    setIsOpen(true);
  };

  const openAddProductForm = () => {
    setFormData({
      productName: "",
      price: "",
      description: "",
      quantity: "",
      image: null,
    });
    setActionType("add");
    setAddProductOpen(true);
  };

  const openEditProductForm = (product) => {
    setFormData({
      productName: product.productName,
      price: product.price,
      description: product.description,
      quantity: product.quantity,
      image: null,
    });
    setCurrentProductId(product._id);
    setActionType("edit");
    setAddProductOpen(true);
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
              <RxCross2 size={"2rem"} className="font-medium text-red-500/80" />
            </p>
          ) : (
            <p
              onClick={openAddProductForm}
              className="text-lg font-medium cursor-pointer"
            >
              Add Products
            </p>
          )}
        </div>
        <hr />

        {addProductOpen === true ? (
          <form
            onSubmit={
              actionType === "add" ? handleCreateProduct : handleUpdateProduct
            }
            className="flex flex-col gap-y-3"
          >
            <div className="flex flex-row w-full gap-x-5">
              <div className="flex flex-col w-1/2 gap-y-1">
                <label htmlFor="text" className="text-sm">
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  onChange={handleChange}
                  value={productName}
                  placeholder="Product Name"
                  className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-y-1">
                <label htmlFor="number" className="text-sm">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row w-full gap-x-5">
              <div className="flex flex-col w-1/2 gap-y-1">
                <Label htmlFor="message" className="font-normal">
                  Description
                </Label>
                <Textarea
                  value={description}
                  name="description"
                  onChange={handleChange}
                  placeholder="Type your message here."
                  id="message"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-y-1">
                <label htmlFor="email" className="text-sm">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={handleChange}
                  placeholder="Product Quantity"
                  className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row w-full gap-x-5">
              <div className="flex flex-col w-1/2 gap-y-1">
                <label htmlFor="email" className="text-sm">
                  Image
                </label>
                <Input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  id="picture"
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
              {actionType === "add" ? "Add Product" : "Update Product"}
            </button>
          </form>
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
                      <DropdownMenu dir="ltr">
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="w-8 h-8 p-0 cur">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() => openEditProductForm(product)}
                          >
                            Update Product
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => openDeleteDialog(product._id)}
                          >
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
                          onClick={() => handleDeleteProduct(productIdToDelete)}
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
