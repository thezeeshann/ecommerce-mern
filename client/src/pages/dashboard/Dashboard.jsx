import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
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

      {/* <div className="border-[1px] ">
        <Tabs.Root defaultValue="account-details">
          <Tabs.List>
            <Flex
              width="100%"
              display="flex"
              direction="row"
              align="center"
              justify="between"
            >
              <Tabs.Trigger value="account-details">
                Account Details
              </Tabs.Trigger>
              <Tabs.Trigger value="account-security">
                Account Security
              </Tabs.Trigger>
              <Tabs.Trigger value="address">Address</Tabs.Trigger>
              <Tabs.Trigger value="orders">Orders</Tabs.Trigger>
              <Tabs.Trigger value="wishlist">WishList</Tabs.Trigger>
              <Tabs.Trigger value="support">Support</Tabs.Trigger>
            </Flex>
          </Tabs.List>

          <Box px="4" pt="3" pb="2">
            <Tabs.Content value="account-details">
              <AccountDetails />
            </Tabs.Content>

            <Tabs.Content value="account-security">
              <ChangePassword />
            </Tabs.Content>

            <Tabs.Content value="address">
              <Address />
            </Tabs.Content>

            <Tabs.Content value="orders">
              <Orders />
            </Tabs.Content>

            <Tabs.Content value="wishlist">
              <WishList />
            </Tabs.Content>

            <Tabs.Content value="support">
              <Support />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div> */}
    </section>
  );
};

export default Dashboard;
