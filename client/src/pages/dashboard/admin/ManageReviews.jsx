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
import {
  useGetReviewsQuery,
  useDeleteReviewMutation,
} from "@/redux/api/reviewApiSlice";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa6";

const ManageReviews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reviewIdToDelete, setReviewIdToDelete] = useState(null);
  const { data, refetch } = useGetReviewsQuery();
  const [deleteReview] = useDeleteReviewMutation();

  const openDeleteDialog = (reviewId) => {
    setReviewIdToDelete(reviewId);
    setIsOpen(true);
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await deleteReview(reviewId);
      if (response.error) {
        console.log("DELETE REVIEW API ERROR", response.error);
      } else {
        console.log("DELETE REVIEW API RESPONSE", response);
        toast.success("Review deleted successfully");
        refetch();
      }
    } catch (error) {
      console.log("DELETE REVIEW API ERROR", error);
    }
  };

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-row items-center justify-between">
        <p className="text-lg font-medium">Manage Reviwes</p>
      </div>
      <hr />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20%]">User</TableHead>
            <TableHead className="w-[15%]">Product</TableHead>
            <TableHead className="w-[15%]">Rating</TableHead>
            <TableHead className="w-[15%]">Tilte</TableHead>
            <TableHead className="w-[15%]">Review</TableHead>
            <TableHead className="w-[15%]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((review) => (
            <TableRow key={review._id}>
              <TableCell className="">
                <div className="flex flex-row items-center gap-x-2">
                  <img
                    src={review.user.image}
                    alt="user Image"
                    className="w-[15%] h-[15%]"
                  />
                  <p className="font-medium text-blue-500 cursor-pointer">
                    {review.user.firstName + " " + review.user.lastName}
                  </p>
                </div>
              </TableCell>
              <TableCell>{review?.product?.productName}</TableCell>
              <TableCell>
                <div className="flex flex-row items-center gap-x-1">
                  <p>{review?.rating}</p>
                  <p>
                    <FaStar className="text-[#FFD700]" size={"1.1rem"} />
                  </p>
                </div>
              </TableCell>
              <TableCell>{review?.review}</TableCell>
              <TableCell>{review?.title}</TableCell>
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
                      onClick={() => openDeleteDialog(review?._id)}
                    >
                      Delete Review
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
              onClick={() => handleDeleteReview(reviewIdToDelete)}
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

export default ManageReviews;
