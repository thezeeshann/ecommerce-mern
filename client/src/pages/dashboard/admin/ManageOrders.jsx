import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  useUpdateOrderMutation,
} from "@/redux/api/orderApiSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { CART_ITEM_STATUS } from "@/lib/constant";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

const ManageOrders = () => {
  const { data, refetch } = useGetOrdersAdminQuery();
  const [isOpen, setIsOpen] = useState();
  const [status, setStatus] = useState("");
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [orderIdToDelete, setOrderIdToDelete] = useState(null);
  const [orderIdToUpdate, setOrderIdToUpdate] = useState(null);
  const [deleteOrder] = useDeleteOrderMutation();
  const [updateOrder] = useUpdateOrderMutation();

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

  const handleUpdateOrder = async (orderId) => {
    try {
      const data = {
        status,
        orderId,
      };
      const response = await updateOrder(data);
      if (response.error) {
        console.log(response.error.data.message, "Error hai");
        toast.error(response.error.data.message);
      } else {
        console.log("UPDATE ORDER API RESPONSE", response);
        toast.success("Order status updated successfully");
        refetch();
      }
    } catch (error) {
      console.log("UPDATE ORDER API ERROR", error);
    }
  };

  const openDeleteDialog = (orderId) => {
    setOrderIdToDelete(orderId);
    setIsOpen(true);
  };

  const openUpdateDialog = (orderId) => {
    setOrderIdToUpdate(orderId);
    setIsOpenUpdate(true);
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
              {order?.items?.map((p) => (
                <div key={p._id}>
                  <TableCell className="font-medium">
                    {p?.product?.productName}
                  </TableCell>
                </div>
              ))}
              <TableCell className="font-medium text-green-500/80">
                ${order?.total}
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{order?.status}</Badge>{" "}
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
                    <DropdownMenuItem
                      // onClick={() => handleUpdateOrder(order.orderId)}
                      onClick={() => openUpdateDialog(order?.orderId)}
                    >
                      Update Order
                    </DropdownMenuItem>
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

      <AlertDialog open={isOpenUpdate} onOpenChange={setIsOpenUpdate}>
        <AlertDialogTrigger asChild></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Update order status</AlertDialogTitle>
            <AlertDialogDescription>
              <Select
                value={status}
                onValueChange={(value) => setStatus(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Update Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Object.values(CART_ITEM_STATUS).map((statusOption) => (
                      <SelectItem key={statusOption} value={statusOption}>
                        {statusOption}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleUpdateOrder(orderIdToUpdate)}
              className="bg-green-500/80 hover:bg-green-500"
            >
              Update
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
              className="bg-red-500/80 hover:bg-red-500"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default ManageOrders;
