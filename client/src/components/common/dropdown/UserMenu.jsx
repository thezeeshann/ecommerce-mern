import {
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/api/apiSlice";

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler className="cursor-pointer">
        <Avatar
          variant="circular"
          size="sm"
          alt="tania andrew"
          className="border border-gray-900 p-0.5"
          src={user?.image}
        />
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <p className="block w-full text-sm text-left text-gray-900 hover:text-sky-500">
            My Profile
          </p>
        </MenuItem>
        <MenuItem>
          <p className="block w-full text-sm text-left text-gray-900 hover:text-sky-500">
            Edit Profle
          </p>
        </MenuItem>
        <MenuItem onClick={()=>dispatch(logout(navigate))}>
          <p className="block w-full text-sm text-left text-red-500 hover:text-sky-500">
            Logout
          </p>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
