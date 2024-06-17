import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "react-hot-toast";
import { useChangePasswordMutation } from "../../../redux/api/authApiSlice";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPasswpord] = useState(false);
  const [changePassword, { isLoading: loadingChangePassword }] =
    useChangePasswordMutation();

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

  return (
    <section className="flex flex-col gap-y-4">
      <p className="text-lg font-medium">Account Security</p>
      <hr />
      <form onSubmit={handleChangePassword}>
        <div className="">
          <p>Change Password</p>
          <div className="flex flex-row w-full mt-5 mb-5 gap-x-5">
            <div className="relative flex flex-col w-1/2 gap-y-1">
              <label htmlFor="oldPassword" className="text-sm">
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
                  <IoMdEyeOff size={"1.5rem"} className="cursor-pointer" />
                ) : (
                  <IoMdEye size={"1.5rem"} className="cursor-pointer" />
                )}
              </span>
            </div>
            <div className="relative flex flex-col w-1/2 gap-y-1">
              <label htmlFor="newPassword" className="text-sm">
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
                  <IoMdEyeOff size={"1.5rem"} className="cursor-pointer" />
                ) : (
                  <IoMdEye size={"1.5rem"} className="cursor-pointer" />
                )}
              </span>
            </div>
          </div>
          <hr />
          <button
            disabled={loadingChangePassword}
            type="submit"
            className="text-sm border-[1px] px-4 py-2 mt-5 hover:bg-blue-500 hover:text-white"
          >
            Reset Password
          </button>
        </div>
      </form>
    </section>
  );
};

export default ChangePassword;
