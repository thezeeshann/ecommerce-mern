import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { setLoading, setSignUpData } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import registerImg from "../../assets/login_register/undraw_authentication_re_svpt.svg";
import { useRegisterMutation } from "../../redux/api/authApiSlice";
import {Link} from "react-router-dom"

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;
  const [register] = useRegisterMutation();

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
      const response = await register({ firstName, lastName, email, password });
      console.log(response);
      if (response.error) {
        toast.error(response.error.data.message);
      } else {
        dispatch(setSignUpData({ ...response }));
        console.log("SIGN API RESPONSE...", response);
        toast.success("Singup successfull");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log("SIGN UP API ERROR ...", error);
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
        <div className="flex flex-row mt-10 w-full">
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
              {/* {errors.firstName && (
                <span className="-mt-1 text-[12px] text-red-500">
                  Enter your First Name.
                </span>
              )} */}
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-xs">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                // {...register("lastName", { required: true })}
                onChange={handleChange}
                value={lastName}
                placeholder="Please Enter your Last Name"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
              />
              {/* {errors.lastName && (
                <span className="-mt-1 text-[12px] text-red-500">
                  Enter your Last Name.
                </span>
              )} */}
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-xs">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                // {...register("email", { required: true })}
                value={email}
                onChange={handleChange}
                placeholder="Please Enter your Email"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
              />
              {/* {errors.email && (
                <span className="-mt-1 text-[12px] text-red-500">
                  Enter Email Address.
                </span>
              )} */}
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-xs">
                Password
              </label>
              <input
                type="password"
                name="password"
                // {...register("password", { required: true })}
                value={password}
                onChange={handleChange}
                placeholder="Please Enter your Password"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
              />
              {/* {errors.password && (
                <span className="-mt-1 text-[12px] text-red-500">
                  Enter your password.
                </span>
              )} */}
            </div>
          </div>
          <div className=" w-3/6 flex justify-center items-center">
            <img src={registerImg} alt="" width={"45%"} />
          </div>
        </div>
        <hr className="mt-6" />
        <div className="flex flex-row w-full">
          <div className="w-3/6 flex flex-row gap-x-5 mt-3 items-center">
            <button
              type="submit"
              className="text-xs border-[1px] border-gray-200 px-8 py-2 hover:bg-blue-500 hover:text-white"
            >
              Sign Up
            </button>
            {/* <p className="text-xs text-center cursor-pointer">
              Create An Account
            </p> */}
          </div>
          <div className="w-3/6 mt-3">
            <Link to="/login" >
            <p className="text-sky-500 text-sm text-end cursor-pointer">
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
