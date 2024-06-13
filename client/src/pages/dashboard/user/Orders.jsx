import { useGetOrdersQuery } from "../../../redux/api/orderApiSlice";

const Orders = () => {
  const { data } = useGetOrdersQuery();

  return (
    <section className="space-y-2">
      <p>Your Orders</p>
      <hr />

      {data ? (
        <>
          {data?.data?.map((order, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-x-5 border-[1px] p-3 mt-5"
            >
              {order?.cart?.items?.map((p) => (
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
                  <span className="font-semibold"> {order?.cart?.status}</span>
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
                    ${order?.cart?.totalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-center">You have no orders yet.</p>
      )}
    </section>
  );
};

export default Orders;
