import { Tabs, Box, Badge, Flex } from "@radix-ui/themes";
import { IoLocation } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  useUpdateProfileMutation,
  useGetSingleUserQuery,
} from "../../redux/api/profileApiSlice";
import ChangePassword from "./user/ChangePassword";
import AccountDetails from "./user/AccountDetails";
import WishList from "./user/WishList";

const Dashboard = () => {
  const { data } = useGetSingleUserQuery();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [address, setAddress] = useState();
  const [country, setCountry] = useState();
  const [zipCode, setZipCode] = useState();
  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useUpdateProfileMutation();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile({
        address,
        city,
        state,
        zipCode,
        country,
      });
      if (response.error) {
        toast.error(response.error.data.message);
      } else {
        console.log("UPDATE PROFILE API RESPONSE...", response);
        toast.success("Address Added successfully");
      }
    } catch (error) {
      console.log("UPDATE USERNAME API ERROR RESPONSE...", error);
    }
  };

  return (
    <section className="flex flex-col w-[80%] mx-auto gap-y-5 py-6 ">
      <div className="flex flex-row items-center justify-center gap-x-5">
        <p>{data?.user?.email}</p>
        <Badge size={"2"} color="gray">
          Member
        </Badge>
      </div>
      <div className="border-[1px] ">
        <Tabs.Root defaultValue="account-details">
          <Tabs.List>
            <Flex
              width="100%"
              display="flex"
              direction="row"
              align="center"
              justify="between"
            >
              <Tabs.Trigger value="account-details"  >
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
              <AccountDetails/>
            </Tabs.Content>

            <Tabs.Content value="account-security">
              <ChangePassword />
            </Tabs.Content>

            <Tabs.Content value="address">
              <div>
                <p>Addresses</p>
                <hr />

                {data?.user?.additionalDetails?.status === true ? (
                  <>
                    <div className="flex flex-row items-center p-5 mt-3 gap-x-5">
                      <div>
                        <IoLocation size={"2rem"} />
                      </div>
                      <div>
                        <span className="text-lg font-semibold">
                          Delivery Address
                        </span>
                        <p className="text-sm">
                          {data?.user?.additionalDetails?.address} -{" "}
                          {data?.user?.additionalDetails?.city},{" "}
                          {data?.user?.additionalDetails?.country},{" "}
                          {data?.user?.additionalDetails?.zipCode}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col justify-center p-5 mt-5 gap-y-5">
                      <p className="text-sm font-semibold ">Add you address</p>
                      <form onSubmit={handleUpdateProfile}>
                        <div className="flex flex-col w-full gap-y-2">
                          <div className="flex flex-col gap-y-1">
                            <label htmlFor="address" className="text-xs">
                              Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              placeholder="Address: Street, House No / Apartment No"
                              className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                            />
                          </div>

                          <div className="flex flex-row items-center justify-between w-full gap-x-3">
                            <div className="flex flex-col w-1/2 gap-y-1">
                              <label htmlFor="city" className="text-xs">
                                City
                              </label>
                              <input
                                type="text"
                                name="city"
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                                placeholder="City"
                                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                              />
                            </div>
                            <div className="flex flex-col w-1/2 gap-y-1">
                              <label htmlFor="state" className="text-xs">
                                State
                              </label>
                              <input
                                type="text"
                                name="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                placeholder="State"
                                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                              />
                            </div>
                          </div>

                          <div className="flex flex-row items-center justify-between w-full gap-x-3">
                            <div className="relative flex flex-col w-1/2 gap-y-1">
                              <label htmlFor="country" className="text-xs ">
                                Country
                              </label>
                              <input
                                type="text"
                                name="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="Enter Your country"
                                className=" px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                              />
                            </div>

                            <div className="relative flex flex-col w-1/2 gap-y-1 ">
                              <label htmlFor="zipCode" className="text-xs ">
                                Zipcode
                              </label>
                              <input
                                type="text"
                                name="zipCode"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                                placeholder="Enter Your zip code"
                                className=" px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                              />
                            </div>
                          </div>

                          <button
                            disabled={loadingUpdateProfile}
                            type="submit"
                            className="text-sm w-max border-[1px] px-4 py-2 mt-3 hover:bg-blue-500 hover:text-white"
                          >
                            Add Address
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
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
              <WishList />
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
