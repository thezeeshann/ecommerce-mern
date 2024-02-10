import { HiChevronDown } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/api/apiSlice";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row items-center justify-center ">
        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className="inline-flex w-full justify-center gap-x-1.5  text-sm font-semibold text-gray-600  "
              >
                {user?.firstName || "Welcome!"}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ">
                <div className="py-1">
                  {user ? (
                    <>
                      <Menu.Item>
                        <Link
                          onClick={() => dispatch(logout(navigate))}
                          className={
                            "text-gray-900 block w-full px-4 py-2 text-left text-sm hover:text-sky-500"
                          }
                        >
                          Logout
                        </Link>
                      </Menu.Item>
                    </>
                  ) : (
                    <>
                      <Menu.Item>
                        <Link
                          to="/register"
                          className={
                            "text-gray-900 block w-full px-4 py-2 text-left text-sm hover:text-sky-500"
                          }
                        >
                          Sign Up
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="/login"
                          className={
                            "text-gray-900 block px-4 py-2 text-sm hover:text-sky-500"
                          }
                        >
                          Login
                        </Link>
                      </Menu.Item>
                    </>
                  )}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div>
          <div>
            <HiChevronDown
              className="font-semibold text-gray-500"
              size={"1rem"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
