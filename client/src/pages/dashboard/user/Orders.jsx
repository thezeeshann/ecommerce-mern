
import { useGetOrdersQuery } from "../../../redux/api/orderApiSlice";
import { Link } from "react-router-dom";

const Orders = () => {
  const { data } = useGetOrdersQuery();

  return (
    <section className="flex flex-col gap-y-4">
      <p className="text-lg font-medium">
        {data ? data?.data?.length : 0} Your Orders
      </p>
      <hr />

      {data ? (
        <>
          {data?.data?.map((order, index) => (
            <Link to={`/order/details/${order.orderId}`} key={index}>
              <div className="flex hover:bg-[#F6F7F8] cursor-pointer  flex-row items-center gap-x-5 border-[1px] p-3 mt-5">
                {order?.items?.map((p) => (
                  <div key={p._id}>
                    <img
                      src={p.product?.image}
                      className="w-[90px] h-[90px]"
                      alt="product image"
                    />
                  </div>
                ))}

                <div className="flex flex-col text-sm gap-y-1">
                  <div>
                    <span>Status</span>
                    <span className="font-semibold">
                      {" "}
                      {order?.status}
                    </span>
                  </div>
                  <div>
                    <span>Order #</span>
                    <span className="font-semibold"> {order.orderId}</span>
                  </div>
                  <div>
                    <span>Ordered on</span>
                    <span className="font-semibold">
                      {" "}
                      {new Date(order.orderDate).toLocaleDateString("en-Us", {
                        weekday: "long",
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div>
                    <span>Order Total</span>
                    <span className="font-semibold">
                      {" "}
                      ${order?.total}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <p className="mt-3 text-sm text-center">You have no orders yet.</p>
      )}
    </section>
  );
};

export default Orders;
