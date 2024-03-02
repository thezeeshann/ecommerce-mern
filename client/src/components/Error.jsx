import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="w-[80%] mx-auto p-24 mt-7 mb-10 h-[50%] flex flex-col gap-y-2">
        <p className="text-center text-gray-500">
          The page you are looking for was not found.
        </p>
        <Link to="/">
          <p className="text-center text-gray-500 underline cursor-pointer">
            Back to home!
          </p>
        </Link>
      </div>
    </>
  );
};

export default Error;
