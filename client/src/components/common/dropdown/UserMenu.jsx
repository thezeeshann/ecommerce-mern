import { DropdownMenu, Text, Avatar } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/api/authApi";

const UserMenu = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <DropdownMenu.Root align="center">
      <DropdownMenu.Trigger>
        <div>
          <Avatar
            size="2"
            src={user.image}
            radius="full"
            className="cursor-pointer"
          />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item color="gray">
          <Text as="p" weight="medium">
            {" "}
            My Profile
          </Text>
        </DropdownMenu.Item>
        <DropdownMenu.Item color="gray">
          <Text as="p" weight="medium">
            {" "}
            Edit Profle
          </Text>{" "}
        </DropdownMenu.Item>
        <DropdownMenu.Item
          color="red"
          onClick={() => dispatch(logout(navigate))}
        >
          <Text as="p" weight="medium">
            {" "}
            Logout
          </Text>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default UserMenu;
