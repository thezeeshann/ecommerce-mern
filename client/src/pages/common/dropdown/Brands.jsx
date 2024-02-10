import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { Fragment } from "react";

const Brands = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center c">
        {/* <p className="font-semibold text-gray-600 text-sm">Brands </p> */}
        <div className="">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md  text-sm font-semibold text-gray-600  ">
                Brands
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
              <Menu.Items className=" z-10 absolute right-0 mt-2 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg  ">
                <div className="px-3 py-3 ">
                  <div className="px-1 py-1">
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-lg font-semibold">shop By Brands</p>
                      <p className="text-sm text-sky-500 cursor-pointer hover:text-gray-900">
                        See All
                      </p>
                    </div>
                    <hr className="mt-2" />
                  </div>

                  <div className="flex flex-row items-center justify-between w-[80%]">
                    <div>
                      <Menu.Item>
                        <span
                          className={` text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                          Gucci
                        </span>
                      </Menu.Item>
                      <Menu.Item>
                        <span
                          className={` text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                          Polo
                        </span>
                      </Menu.Item>
                      <Menu.Item>
                        <span
                          className={` text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                          Polo
                        </span>
                      </Menu.Item>
                    </div>
                    <div>
                      <Menu.Item>
                        <span
                          className={`text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                          calvin klein
                        </span>
                      </Menu.Item>
                      <Menu.Item>
                        <span
                          className={`text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                          Tommy Hilfiger
                        </span>
                      </Menu.Item>
                      <Menu.Item>
                        <span
                          className={` text-gray-900 group flex w-full items-center rounded-md px-[6px] py-[6px] text-sm cursor-pointer hover:text-sky-500`}
                        >
                          Polo
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
            className="text-gray-500 font-semibold"
            size={"1rem"}
          />
        </div>
      </div>
    </>
  );
};

export default Brands;
