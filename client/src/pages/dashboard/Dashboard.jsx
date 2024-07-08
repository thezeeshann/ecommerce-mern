import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return (
    <section className="flex flex-col w-[80%] mx-auto py-6 ">
      <div className="flex flex-row gap-x-6">
        <div className="w-[25%] border text-center ">
          <div className="py-2">
            <p className="text-lg font-medium">Account</p>
          </div>
          <hr />
          <div className="flex flex-col ">
            <Link to="/dashboard">
              <p
                className={`${
                  location.pathname === "/dashboard"
                    ? "bg-white"
                    : "bg-[#F8F9FA]"
                } cursor-pointer py-2`}
              >
                Account Details
              </p>
            </Link>
            <hr />
            <Link to="/dashboard/security">
              <p
                className={`${
                  location.pathname === "/dashboard/security"
                    ? "bg-white"
                    : " bg-[#F8F9FA]"
                } cursor-pointer py-2`}
              >
                Account Security
              </p>
            </Link>
            {user.role === "Admin" && (
              <>
                <hr />
                <Link to="/dashboard/products">
                  <p
                    className={`${
                      location.pathname === "/dashboard/products"
                        ? "bg-white"
                        : "bg-[#F8F9FA]"
                    } cursor-pointer py-2`}
                  >
                    Manage Products
                  </p>
                </Link>
                <hr />
                <Link to="/dashboard/brand">
                  <p
                    className={`${
                      location.pathname === "/dashboard/brand"
                        ? "bg-white"
                        : "bg-[#F8F9FA]"
                    } cursor-pointer py-2`}
                  >
                    Manage Brand
                  </p>
                </Link>
                <hr />
                <Link to="/dashboard/orders">
                  <p
                    className={`${
                      location.pathname === "/dashboard/orders"
                        ? "bg-white"
                        : " bg-[#F8F9FA]"
                    } cursor-pointer py-2`}
                  >
                    Manage Orders
                  </p>
                </Link>
                <hr />
                <Link to="/dashboard/reviews">
                  <p
                    className={`${
                      location.pathname === "/dashboard/reviews"
                        ? "bg-white"
                        : " bg-[#F8F9FA]"
                    } cursor-pointer py-2`}
                  >
                    Manage Reivews
                  </p>
                </Link>
                <hr />

                <Link to="/dashboard/users">
                  <p
                    className={`${
                      location.pathname === "/dashboard/users"
                        ? "bg-white"
                        : " bg-[#F8F9FA]"
                    } cursor-pointer py-2`}
                  >
                    Manage User
                  </p>
                </Link>
              </>
            )}
            <hr />
            <Link to="/dashboard/address">
              <p
                className={`${
                  location.pathname === "/dashboard/address"
                    ? "bg-white"
                    : " bg-[#F8F9FA]"
                } cursor-pointer py-2`}
              >
                Address
              </p>
            </Link>
            <hr />
            <Link to="/dashboard/order">
              <p
                className={`${
                  location.pathname === "/dashboard/order"
                    ? "bg-white"
                    : " bg-[#F8F9FA]"
                } cursor-pointer py-2`}
              >
                Orders
              </p>
            </Link>
            <hr />
            <Link to="/dashboard/wishlist">
              <p
                className={`${
                  location.pathname === "/dashboard/wishlist"
                    ? "bg-white"
                    : " bg-[#F8F9FA]"
                } cursor-pointer py-2`}
              >
                WishList
              </p>
            </Link>
            <hr />
            <Link to="/dashboard/support">
              <p
                className={`${
                  location.pathname === "/dashboard/support"
                    ? "bg-white"
                    : " bg-[#F8F9FA]"
                } cursor-pointer py-2`}
              >
                Support
              </p>
            </Link>
          </div>
        </div>
        <div className="w-[75%]">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
