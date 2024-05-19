const Order = () => {
  return (
    <div className=" flex flex-col w-[80%] h-60 mx-auto gap-y-2 py-6 justify-center items-center ">
      <p className="font-bold">Thank you for your order.</p>
      <p>
        Order <span className="font-semibold"> #6648d01f02c1940010a1ae92</span>{" "}
        is complete.
      </p>
      <div className="space-x-3">
        <button className="border-[1px] py-2 px-3 text-sm hover:bg-blue-500 hover:text-white">
        Manage Orders
        </button>
        <button className="border-[1px] py-2 px-3 text-sm hover:bg-blue-500 hover:text-white">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Order;
