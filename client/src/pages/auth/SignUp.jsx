import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { setLoading, setSignUpData } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import registerImg from "../../assets/login_register/undraw_authentication_re_svpt.svg";
import { useRegisterMutation } from "../../redux/api/authApiSlice";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;
  const [register, { isLoading }] = useRegisterMutation();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitSignupForm = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await register({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      if (response.error) {
        toast.error(response.error.data.message);
      } else {
        dispatch(setSignUpData(response));
        console.log("SIGN API RESPONSE...", response);
        toast.success("Singup successfull");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.log("SIGN API ERROR RESPONSE...", error);
      navigate("/register");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };

  return (
    <section className="w-[80%] mx-auto mt-7 mb-10">
      <p className="text-base font-bold">Sign Up</p>

      <hr className="mt-3" />
      <form onSubmit={submitSignupForm}>
        <div className="flex flex-row w-full mt-10">
          <div className="flex flex-col w-3/6 gap-y-2">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-xs">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="Please Enter your First Name"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-xs">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={lastName}
                placeholder="Please Enter your Last Name"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-xs">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Please Enter your Email"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
              />
            </div>

            <div className="flex flex-row items-center justify-between w-full gap-x-1">
              <div className="relative flex flex-col w-1/2 gap-y-1">
                <label htmlFor="email" className="text-xs ">
                  Password
                </label>
                <input
                  type={showPassword === true ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className=" px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                />
                <span
                  className="absolute right-4 top-[28px] z-[10] cursor-pointer"
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? (
                    <IoMdEyeOff size={"1.5rem"} className="cursor-pointer" />
                  ) : (
                    <IoMdEye size={"1.5rem"} className="cursor-pointer" />
                  )}
                </span>
              </div>

              <div className="relative flex flex-col w-1/2 gap-y-1">
                <label htmlFor="email" className="text-xs ">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword === true ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className=" px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
                />
                <span
                  className="absolute right-4 top-[28px] z-[10] cursor-pointer"
                  onClick={() => setShowConfirmPassword((value) => !value)}
                >
                  {showConfirmPassword ? (
                    <IoMdEyeOff size={"1.5rem"} className="cursor-pointer" />
                  ) : (
                    <IoMdEye size={"1.5rem"} className="cursor-pointer" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-3/6 ">
            <img src={registerImg} alt="" width={"45%"} />
          </div>
        </div>
        <hr className="mt-6" />
        <div className="flex flex-row w-full">
          <div className="flex flex-row items-center w-3/6 mt-3 gap-x-5">
            <button
              disabled={isLoading}
              type="submit"
              className="text-xs border-[1px] border-gray-200 px-8 py-2 hover:bg-blue-500 hover:text-white"
            >
              {isLoading ? "Sign...." : "Sign Up"}
            </button>
          </div>
          <div className="w-3/6 mt-3">
            <Link to="/login">
              <p className="text-sm cursor-pointer text-sky-500 text-end">
                Back to Login?
              </p>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
