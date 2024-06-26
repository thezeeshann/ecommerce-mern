import { IoLocation } from "react-icons/io5";
import {
  useGetSingleUserQuery,
  useUpdateProfileMutation,
} from "../../../redux/api/profileApiSlice";
import { useState } from "react";
import toast from "react-hot-toast";

const Address = () => {
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
    <section className="flex flex-col gap-y-4">
      <p className="text-lg font-medium">Addresses</p>
      <hr />

      {data?.user?.additionalDetails?.status === true ? (
        <>
          <div className="flex flex-row items-center gap-x-5">
            <div>
              <IoLocation size={"2rem"} />
            </div>
            <div>
              <span className="text-lg font-semibold">Delivery Address</span>
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
          <div className="flex flex-col justify-center gap-y-5">
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
    </section>
  );
};

export default Address;
