import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const ManageProducts = () => {
  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-row items-center justify-between">
        <p className="text-lg font-medium">Manage Products</p>
        <p className="text-lg font-medium cursor-pointer">Add Products</p>
      </div>
      <hr />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[25%]">Product</TableHead>
            <TableHead className="w-[15%]">Price</TableHead>
            <TableHead className="w-[15%]">Quantity</TableHead>
            <TableHead className="w-[15%]">Stock</TableHead>
            <TableHead className="w-[15%]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="">
                <div className="flex flex-row items-center gap-x-2">
                  <img
                    src={
                      "https://res.cloudinary.com/dwhf51atn/image/upload/v1715583166/Ecommerce/ub9xg7dpggdrlqv5zskv.jpg"
                    }
                    alt=""
                    className="w-[15%] h-[15%]"
                  />
                  <p className="font-medium text-blue-500 cursor-pointer">
                    Mens Cotton Jacket
                  </p>
                </div>
              </TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
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
                    <DropdownMenuItem>Delete Product</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          {/* <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow> */}
        </TableFooter>
      </Table>
    </section>
  );
};

export default ManageProducts;
