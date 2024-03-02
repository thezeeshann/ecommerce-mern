import { HiChevronDown } from "react-icons/hi";
import { useSelector } from "react-redux";
import { DropdownMenu, Text } from "@radix-ui/themes";
import {Link} from "react-router-dom"
import UserMenu from "./UserMenu";
const Welcome = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      {user ? (
        <UserMenu />
      ) : (
        <>
          <DropdownMenu.Root align="center">
            <DropdownMenu.Trigger>
              <div className="flex flex-row items-center cursor-pointer">
                {" "}
                <Text as="p" weight="medium" >Welcome! </Text>  <HiChevronDown
                  className="font-semibold text-gray-500"
                  size={"1rem"}/>
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item color="gray"><Link to="/register"><Text as="p" weight="medium"> Sign Up</Text></Link> </DropdownMenu.Item>
              <DropdownMenu.Item color="gray"><Link to="/login"><Text as="p" weight="medium"> Login</Text></Link></DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </>
      )}
    </>
  );
};

export default Welcome;
