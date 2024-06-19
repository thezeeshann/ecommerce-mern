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
import { Button } from "@radix-ui/themes";
import { useGetAllUsersQuery } from "@/redux/api/profileApiSlice";


const ManageUser = () => {
  const { data } = useGetAllUsersQuery();
  console.log(data, "all users");
  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-row items-center justify-between">
        <p className="text-lg font-medium">Manage Users</p>
        <p className="text-lg font-medium cursor-pointer">Add User</p>
      </div>
      <hr />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[25%]">Name</TableHead>
            <TableHead className="w-[15%]">Email</TableHead>
            <TableHead className="w-[15%]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="">
                <div className="flex flex-row items-center gap-x-2">
                  <img
                    src={user.image}
                    alt="user Image"
                    className="w-[15%] h-[15%]"
                  />
                  <p className="font-medium text-blue-500 cursor-pointer">
                    {user.firstName + " " + user.lastName}
                  </p>
                </div>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-8 h-8 p-0 cur">
                      <span className="sr-only">Open menu</span>
                      <DotsHorizontalIcon className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    <DropdownMenuItem>Delete User</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default ManageUser;
