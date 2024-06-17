import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const OrderSuccess = () => {
  const { orderId } = useParams();

  return (
    <div className=" flex flex-col w-[80%] h-60 mx-auto gap-y-2 py-6 justify-center items-center ">
      <p className="font-bold">Thank you for your order.</p>
      <p>
        Order <span className="font-semibold"> # {orderId}</span> is complete.
      </p>
      <div className="space-x-3">
        <Link to="/dashboard/order" >
          <button className="border-[1px] py-2 px-3 text-sm hover:bg-blue-500 hover:text-white">
            Manage Orders
          </button>
        </Link>
        <Link to="/shop">
          <button className="border-[1px] py-2 px-3 text-sm hover:bg-blue-500 hover:text-white">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
