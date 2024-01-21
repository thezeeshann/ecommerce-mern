import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ProductsDetail from "./ProductsDetail";
import Pagination from "../../common/Pagination";

const Shop = () => {
  const price = [
    { name: "Newest First" },
    { name: "Price High to Low" },
    { name: "Price Low to High" },
  ];

  const [selected, setSelected] = useState(price[0]);

  return (
    <section className=" bg-[#F6F7F8] py-6">
      <div className="flex flex-row w-[80%] mx-auto gap-x-6">
        
        {/* filter products */}
        <aside className="w-[20%] ">
          <div className="bg-white py-1 px-3 border-[1px]">
            <p>Price</p>
            
            <input type="range" id="volume" name="volume" min="0" max="11" />
          </div>
        </aside>

        <div className="flex flex-col w-[80%]">
          {/* short by price */}
          <div className="w-full bg-white py-1 px-3 rounded-md flex flex-row items-center justify-between">
            <p className="w-[60%] text-base">Showing: 1-10 products of 12 products</p>
            <div className="w-[40%] flex flex-row gap-x-2 items-center justify-end ">
              <p>Short By</p>
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1 w-[60%] ">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-1 pl-3 pr-10 text-left  border-[1px]">
                    <span className="block truncate">{selected.name}</span>
                   
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm">
                      {price.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-[#F6F7F8]"
                                : "text-gray-900"
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>

          {/* products list */}
          <div className="mt-5">
            <ProductsDetail/>
          </div>

          <div className="mt-5">
            <Pagination/>
          </div>
        </div>



      </div>
    </section>
  );
};

export default Shop;
