import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import {
  useGetOrdersAdminQuery,
  useDeleteOrderMutation,
} from "@/redux/api/orderApiSlice";
import { useState } from "react";
import toast from "react-hot-toast";

const ManageOrders = () => {
  const { data, refetch } = useGetOrdersAdminQuery();
  const [isOpen, setIsOpen] = useState();
  const [orderIdToDelete, setOrderIdToDelete] = useState(null);
  const [deleteOrder] = useDeleteOrderMutation();

  const handleDeleteOrder = async (orderId) => {
    try {
      const response = await deleteOrder(orderId);
      refetch();
      toast.success("Order deleted successfully");
      console.log("DELETE ORDER API RESPONSE", response);
    } catch (error) {
      console.log("DELETE ORDER API ERROR ", error);
    }
  };

  const openDeleteDialog = (orderId) => {
    setOrderIdToDelete(orderId);
    setIsOpen(true);
  };

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-row items-center justify-between">
        <p className="text-lg font-medium">Manage Orders</p>
        <p className="text-lg font-medium cursor-pointer">Add Orders</p>
      </div>
      <hr />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[15%]">Order ID</TableHead>
            <TableHead className="w-[15%]">Customer</TableHead>
            <TableHead className="w-[15%]">Product</TableHead>
            <TableHead className="w-[10%]">Amount</TableHead>
            <TableHead className="w-[15%]">Status</TableHead>
            <TableHead className="w-[10%]">Rating</TableHead>
            <TableHead className="w-[10%]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((order) => (
            <TableRow key={order._id}>
              <TableCell className="">
                <p>{order.orderId}</p>
              </TableCell>
              <TableCell className="">
                <p className="font-medium cursor-pointer">
                  {order?.user?.firstName + order?.user?.lastName}
                </p>
              </TableCell>
              {order?.cart?.items?.map((p) => (
                <div key={p._id}>
                  <TableCell className="font-medium">
                    {p?.product?.productName}
                  </TableCell>
                </div>
              ))}
              <TableCell className="font-medium text-green-500/80">
                ${order?.cart?.totalPrice}
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{order?.cart?.status}</Badge>{" "}
              </TableCell>
              <TableCell>5</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-8 h-8 p-0 cur">
                      <span className="sr-only">Open menu</span>
                      <DotsHorizontalIcon className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    <DropdownMenuItem>Update Order</DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => openDeleteDialog(order.orderId)}
                    >
                      Delete Order
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
              onClick={() => handleDeleteOrder(orderIdToDelete)}
              className="bg-red-500/80"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default ManageOrders;
