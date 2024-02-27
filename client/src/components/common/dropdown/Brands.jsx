import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { Fragment } from "react";

const Brands = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center c">
        {/* <p className="text-sm font-semibold text-gray-600">Brands </p> */}
        <div className="">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full text-sm font-semibold text-gray-600 rounded-md ">
              Category
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
              <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-96">
                <div className="px-3 py-3 ">
                  <div className="px-1 py-1">
                    <div className="flex flex-row items-center justify-between ">
                      <p className="text-lg font-semibold">Shop by Category</p>
                      <p className="text-sm cursor-pointer text-sky-500 hover:text-gray-900">
                        See All
                      </p>
                    </div>
                    <hr className="mt-2" />
                  </div>

                  <div className="flex flex-row items-center justify-between w-[90%]">
                    <div>
                      <Menu.Item>
                        <span
                          className={` text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                          Mobiles, Computers
                        </span>
                      </Menu.Item>
                      <Menu.Item>
                        <span
                          className={` text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                          TV, Electronics
                        </span>
                      </Menu.Item>
                      <Menu.Item>
                        <span
                          className={` text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                          Men&apos;s Fashion
                        </span>
                      </Menu.Item>
                    </div>
                    <div>
                      <Menu.Item>
                        <span
                          className={`text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                           Women&apos;s Fashion
                        </span>
                      </Menu.Item>
                      <Menu.Item>
                        <span
                          className={`text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                          Sports, Fitness
                        </span>
                      </Menu.Item>
                      <Menu.Item>
                        <span
                          className={` text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                          Books
                        </span>
                      </Menu.Item>
                    </div>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div>
          <HiChevronDown
            className="font-semibold text-gray-500"
            size={"1rem"}
          />
        </div>
      </div>
    </>
  );
};

export default Brands;
