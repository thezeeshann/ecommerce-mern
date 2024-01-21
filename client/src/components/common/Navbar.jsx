import { Link } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Dialog } from "@headlessui/react";
import { RxCross1 } from "react-icons/rx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [arrow, setArrow] = useState();
  const toggle = () => {
    setArrow((c) => !c);
  };

  return (
    <header className="w-full font-Poppins">
      {/* top level headers */}
      <div className="bg-black ">
        <div className="w-[70%] mx-auto flex flex-row py-2 justify-between">
          <div className="flex flex-row justify-center items-center gap-x-3">
            <div>
              {" "}
              <MdLocalShipping className="text-white" size={"1rem"} />
            </div>
            <p className="text-white font-semibold text-sm">Free Shipping</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-3">
            <div>
              <MdPayment className="text-white" size={"1rem"} />
            </div>
            <p className="text-white font-semibold text-sm">Payment Methods</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-3">
            <div>
              <IoCall className="text-white" size={"1rem"} />
            </div>
            <p className="text-white font-semibold text-sm">
              Call us 951-999-9999
            </p>
          </div>
        </div>
      </div>

      {/* headers */}
      <nav className="w-[80%] mx-auto py-5  flex flex-row justify-between items-center">
        {/* shop name          */}
        <div>
          <Link to={"/"}>
            {" "}
            <p className="font-semibold text-2xl text-gray-600 cursor-pointer">
              MERN Store
            </p>
          </Link>
        </div>
        {/* search input */}
        <div className="border-[1px] border-gray-200 w-2/5 py-1 px-3 rounded-sm">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search products"
            className="placeholder:text-gray-500 text-base focus:border-none outline-none"
          />
        </div>
        {/* nav */}
        <div className="flex flex-row items-center gap-x-5 ">
          <div>
            <RiShoppingBagLine
              size={"1.5rem"}
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>

          <div className="flex flex-row gap-x-3  items-center justify-evenly ">
            {/* brands */}
            <div className="flex flex-row justify-center items-center cursor-pointer">
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
                    <Menu.Items className="z-10 absolute right-0 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <div className="px-3 py-3 ">
                        <Menu.Item>
                          <div>
                          <div className="flex flex-row justify-between">
                            
                            <p className="text-sm">SHOP BY BRAND</p>
                            <p className="text-sm">See All</p>
                            </div>
                            <hr />
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Edit
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Duplicate
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Archive
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Move
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Delete
                            </button>
                          )}
                        </Menu.Item>
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
            {/* shop */}
            <div className="cursor-pointer">
              <Link to="/shop">
                <p className="font-semibold text-gray-600 text-sm">Shop</p>
              </Link>
            </div>
            {/* welcome */}
            <div className="flex flex-row justify-center items-center cursor-pointer">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button
                    onClick={toggle}
                    className="inline-flex w-full justify-center gap-x-1.5  text-sm font-semibold text-gray-600  "
                  >
                    Welcome!
                    {arrow ? (
                      <HiChevronUp
                        className="text-gray-500 -mr-1 h-5 w-5  font-semibold"
                        size={"1rem"}
                      />
                    ) : (
                      <HiChevronDown
                        className="text-gray-500 -mr-1 h-5 w-5  font-semibold"
                        size={"1rem"}
                      />
                    )}
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/login"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Login
                          </Link>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/register"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign Up
                            </Link>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </nav>

      <hr />

      {/* shopping cart */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <RxCross1
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>
                                            {product.name}
                                          </a>
                                        </h3>
                                        <p className="ml-4">{product.price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {product.quantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{" "}
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default Navbar;
