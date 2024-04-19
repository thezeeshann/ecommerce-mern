import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center sm:flex sm:flex-1 sm:items-center sm:justify-between ">
      <div className="mx-auto bg-white ">
        <nav
          className="inline-flex -space-x-px rounded-md shadow-sm isolate"
          aria-label="Pagination"
        >
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 text-gray-400 gap-x-1 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <FaChevronLeft className="w-3 h-3" aria-hidden="true" />
            <p className="text-xs">Previous</p>
          </a>
          <a
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            2
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 text-gray-400 gap-x-1 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only"></span>
            <p className="text-xs">Next</p> 
            <FaChevronRight className="w-3 h-3" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
