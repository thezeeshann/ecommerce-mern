import { Tabs, Box, Badge, Flex } from "@radix-ui/themes";
import { useSelector } from "react-redux";
import { useChangePasswordMutation } from "../../redux/api/authApiSlice";
import { IoLocation } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  useUpdateProfileMutation,
  useUpdateUsernameMutation,
} from "../../redux/api/profileApiSlice";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPasswpord] = useState(false);
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [address, setAddress] = useState();
  const [country, setCountry] = useState();
  const [zipCode, setZipCode] = useState();
  const [changePassword, { isLoading: loadingChangePassword }] =
    useChangePasswordMutation();
  const [updateUsername, { isLoading: loadingUpdateUsername }] =
    useUpdateUsernameMutation();
  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useUpdateProfileMutation();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!oldPassword || !newPassword) {
      return toast.error("Please enter both old and new passwords");
    }
    try {
      const response = await changePassword({ oldPassword, newPassword });
      if (response.error) {
        toast.error(response.error.data.message);
      } else {
        setOldPassword("");
        setNewPassword("");
        console.log("CHAGNE PASSWORD API RESPONSE...", response);
        toast.success("password updated successfully");
      }
    } catch (error) {
      console.log("CHANGE PASSWORD API ERROR RESPONSE...", error);
    }
  };

  const handleUpdateUsername = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUsername({ firstName, lastName });
      if (response.error) {
        toast.error(response.error.data.messsage);
      } else {
        console.log("UPDATE USERNAME API RESPONSE...", response);
        toast.success("username updated successfully");
      }
    } catch (error) {
      console.log("UPDATE USERNAME API ERROR RESPONSE...", error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    try {
      const response = await updateProfile({address,city,state,zipCode,country});
      if(response.error){
        toast.error(response.error.data.message)
      }else{
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
                <form onSubmit={handleUpdateUsername}>
                  <div className="flex flex-row w-full mt-5 gap-x-5">
                    <div className="flex flex-col w-1/2 gap-y-1">
                      <label htmlFor="email" className="text-xs">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
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
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Please Enter your Last Name"
                        className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loadingUpdateUsername}
                    className="text-sm border-[1px] px-4 py-2 mt-3 hover:bg-blue-500 hover:text-white w-max"
                  >
                    Save Change
                  </button>
                </form>
              </div>
            </Tabs.Content>

            <Tabs.Content value="account-security">
              <div>
                <p>Account Security</p>
                <hr />

                <form onSubmit={handleChangePassword}>
                  <div className="mt-5">
                    <p>Change Password</p>
                    <div className="flex flex-row w-full mt-5 mb-5 gap-x-5">
                      <div className="relative flex flex-col w-1/2 gap-y-1">
                        <label htmlFor="oldPassword" className="text-xs">
                          Password
                        </label>
                        <input
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}
                          type={showOldPassword === true ? "text" : "password"}
                          name="oldPassword"
                          placeholder="Old Password"
                          className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                        />
                        <span
                          className="absolute right-4 top-[28px] z-[10] cursor-pointer"
                          onClick={() => setShowOldPassword((value) => !value)}
                        >
                          {showOldPassword ? (
                            <IoMdEyeOff
                              size={"1.5rem"}
                              className="cursor-pointer"
                            />
                          ) : (
                            <IoMdEye
                              size={"1.5rem"}
                              className="cursor-pointer"
                            />
                          )}
                        </span>
                      </div>
                      <div className="relative flex flex-col w-1/2 gap-y-1">
                        <label htmlFor="newPassword" className="text-xs">
                          New Password
                        </label>
                        <input
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          type={showNewPassword === true ? "text" : "password"}
                          name="newPassword"
                          placeholder="Confirm Password"
                          className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                        />
                        <span
                          className="absolute right-4 top-[28px] z-[10] cursor-pointer"
                          onClick={() => setShowNewPasswpord((value) => !value)}
                        >
                          {showNewPassword ? (
                            <IoMdEyeOff
                              size={"1.5rem"}
                              className="cursor-pointer"
                            />
                          ) : (
                            <IoMdEye
                              size={"1.5rem"}
                              className="cursor-pointer"
                            />
                          )}
                        </span>
                      </div>
                    </div>
                    <hr />
                    <button
                      disabled={loadingChangePassword}
                      type="submit"
                      className="text-sm border-[1px] px-4 py-2 mt-3 hover:bg-blue-500 hover:text-white"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </Tabs.Content>

            <Tabs.Content value="address">
              <div>
                <p>Addresses</p>
                <hr />

                {user?.additionalDetails?.status === true ? (
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
                          {user?.additionalDetails?.address} -{" "}
                          {user?.additionalDetails?.city},{" "}
                          {user?.additionalDetails?.country},{" "}
                          {user?.additionalDetails?.zipCode}
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
