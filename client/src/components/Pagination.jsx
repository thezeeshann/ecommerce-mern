import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const ProductsPagination = ({
  currentPage,
  handlePageChange,
  totalNumberOfPages
}) => {
  return (
    <div className="flex items-center justify-between">
        <nav
          className="inline-flex -space-x-px bg-white rounded-md shadow-sm isolate"
        >
          <button
            onClick={() => handlePageChange("previous")}
            className={`relative inline-flex items-center px-2 py-1 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300  ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon aria-hidden="true" className="w-4 h-4" />
            <span className="text-sm">Previous</span>
          </button>

          <span
            aria-current="page"
            className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-500"
          >
            {currentPage} 
          </span>

          <button
            onClick={() => handlePageChange("next")}
            className={`relative inline-flex items-center px-2 py-1 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
              currentPage === totalNumberOfPages
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentPage === totalNumberOfPages}
          >
            <span className="text-sm">Next</span>
            <ChevronRightIcon aria-hidden="true" className="w-4 h-4" />
          </button>
        </nav>
    </div>
  );
};

export default ProductsPagination;
