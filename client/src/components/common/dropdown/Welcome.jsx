import { HiChevronDown } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Welcome = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      {user ? (
        <UserMenu />
      ) : (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex flex-row items-center cursor-pointer">
                {" "}
                <p className="text-sm font-medium text-gray-600">Welcome!</p>
                <HiChevronDown
                  className="font-semibold text-gray-500"
                  size={"1rem"}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/register">
                  <p> Sign Up</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/login">
                  <p> Login</p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </>
  );
};

export default Welcome;
