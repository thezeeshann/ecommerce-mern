import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useGetSingleUserQuery,
  useUpdateUsernameMutation,
} from "../../../redux/api/profileApiSlice";

const AccountDetails = () => {
  const { data, refetch } = useGetSingleUserQuery();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [updateUsername, { isLoading }] = useUpdateUsernameMutation();

  const handleUpdateUsername = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUsername({ firstName, lastName }).unwrap();
      if (response.error) {
        toast.error(response.error.data.messsage);
      } else {
        console.log("UPDATE USERNAME API RESPONSE...", response);
        toast.success("username updated successfully");
        refetch();
      }
    } catch (error) {
      console.log("UPDATE USERNAME API ERROR RESPONSE...", error);
    }
  };

  useEffect(() => {
    if (data && data.user) {
      setFirstName(data.user.firstName);
      setLastName(data.user.lastName);
    }
  }, [data]);

  return (
    <section className="flex flex-col ">
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
          disabled={isLoading}
          className="text-sm border-[1px] px-4 py-2 mt-3 hover:bg-blue-500 hover:text-white w-max"
        >
          Save Change
        </button>
      </form>
    </section>
  );
};

export default AccountDetails;
