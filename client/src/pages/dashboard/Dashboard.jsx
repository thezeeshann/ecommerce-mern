import { Tabs, Box, Badge, Flex } from "@radix-ui/themes";
import {useSelector} from "react-redux"

const Dashboard = () => {

  const { user } = useSelector((state) => state.user);

  return (
    <section className="flex flex-col w-[80%] mx-auto gap-y-5 py-6 ">
      <div className="flex flex-row items-center justify-center gap-x-5">
        <p>{user?.email}</p>
        <Badge size={"2"} color="gray">
          Member
        </Badge>
      </div>
      <div className="border-[1px]">
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
              <div className="flex flex-col ">
                <p className="">Account Details</p>
                <hr />
                <div className="flex flex-row w-full mt-5 gap-x-5">
                  <div className="flex flex-col w-1/2 gap-y-1">
                    <label htmlFor="email" className="text-xs">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      defaultValue={user?.firstName}
                      placeholder="Please Enter your First Name"
                      className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                    />
                  </div>
                  <div className="flex flex-col w-1/2 gap-y-1">
                    <label htmlFor="email" className="text-xs">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      defaultValue={user?.lastName}
                      placeholder="Please Enter your Last Name"
                      className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                    />
                  </div>
                </div>
                <button className="text-sm border-[1px] px-4 py-2 mt-3 hover:bg-blue-500 hover:text-white w-max">
                  Save Change
                </button>
              </div>
            </Tabs.Content>

            <Tabs.Content value="account-security">
              <div>
                <p>Account Security</p>
                <hr />
                <div className="mt-5">
                  <p>Reset Password</p>
                  <div className="flex flex-row w-full mt-5 mb-5 gap-x-5">
                    <div className="flex flex-col w-1/2 gap-y-1">
                      <label htmlFor="email" className="text-xs">
                        Password
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Old Password"
                        className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                      />
                    </div>
                    <div className="flex flex-col w-1/2 gap-y-1">
                      <label htmlFor="email" className="text-xs">
                        Confirm Password
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Confirm Password"
                        className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                      />
                    </div>
                  </div>
                  <hr />
                  <button className="text-sm border-[1px] px-4 py-2 mt-3 hover:bg-blue-500 hover:text-white">
                    Reset Password
                  </button>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="address">
              <div>
                <p>Addresses</p>
                <hr />
                <div className="flex flex-row items-center justify-between mt-5">
                <p className="text-sm">No addresses found.</p>
                <button className="text-sm border-[1px] px-4 py-2 mt-3 hover:bg-blue-500 hover:text-white">
                    Add
                  </button>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="orders">
              <div>
                <p>Your Orders</p>
                <hr />
                <div className="flex flex-row items-center gap-x-5 border-[1px] p-3 mt-5">
                  <img
                    src="https://mernstore-bucket.s3.us-east-2.amazonaws.com/pexels-ready-made-3987280.jpg"
                    className="w-[90px] h-[90px]"
                    alt=""
                  />
                  <div className="flex flex-col text-sm gap-y-1">
                    <div>
                      <span>Status</span>
                      <span> Not processed</span>
                    </div>
                    <div>
                      <span>Order #</span>
                      <span className="font-semibold">
                        {" "}
                        65afc7c3b930e2000ff17c0e
                      </span>
                    </div>
                    <div>
                      <span>Ordered on</span>
                      <span className="font-semibold">
                        {" "}
                        Tuesday, Jan 23, 2024
                      </span>
                    </div>
                    <div>
                      <span>Order Total</span>
                      <span className="font-semibold"> $40</span>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content value="wishlist">
              <div className="flex flex-col mt-3">
                <p>Your Wishlist</p>
                <hr />
                <div className="flex flex-row gap-x-4 border-[1px] mt-5">
                  <img
                    src="https://mernstore-bucket.s3.us-east-2.amazonaws.com/pexels-ready-made-3987280.jpg"
                    className="w-[90px] h-[90px]"
                    alt=""
                  />
                  <div className="flex flex-col gap-y-1 ">
                    <p className="font-semibold">Converse All Star</p>
                    <p className="text-sm">$40</p>
                    <p className="text-sm">
                      Wishlist Added on Monday, Mar 4, 2024
                    </p>
                  </div>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content value="support">
              <div className="flex flex-col mt-3">
                <p>Support</p>
                <hr />
                <p className="p-5 text-sm text-center">No users connected.</p>
              </div>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </section>
  );
};

export default Dashboard;
