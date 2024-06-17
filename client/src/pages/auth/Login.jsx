import loginImg from "../../assets/login_register/undraw_secure_login_pdn4.svg";
import { useLoginMutation } from "../../redux/api/authApiSlice";
import { useDispatch } from "react-redux";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { setLoading, setToken } from "../../redux/features/authSlice";
import { setUser } from "../../redux/features/profileSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useGetSingleUserQuery } from "../../redux/api/profileApiSlice";
import { useGetCartsQuery } from "../../redux/api/cartApiSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispath = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { refetch: refetchSingleUser } = useGetSingleUserQuery();
  const [login, { isLoading }] = useLoginMutation();
  const { refetch: refetchCart } = useGetCartsQuery();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    dispath(setLoading(true));
    try {
      const response = await login({ email, password });
      if (response.error) {
        toast.error(response.error.data.message);
      } else {
        dispath(setToken(response.data.token));
        dispath(setUser(response.data.existUser));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.existUser));
        toast.success("Login successful");
        refetchSingleUser();
        refetchCart();
        navigate("/dashboard");
        console.log("LOGIN API RESPONSE...", response.data);
      }
    } catch (error) {
      console.log("LOGIN API ERROR...", error);
      toast.error(error.data.message);
    }
    dispath(setLoading(false));
    toast.dismiss(toastId);
  };

  return (
    <section className="w-[80%] mx-auto mt-7 mb-10">
      <p className="text-base font-bold">Login</p>
      <hr className="mt-3" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row w-full mt-10">
          <div className="flex flex-col w-3/6 gap-y-2">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-xs">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Please Enter your email"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
              />
            </div>
            <div className="relative flex flex-col gap-y-1">
              <label htmlFor="email" className="text-xs">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Please Enter your email"
                className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none"
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
          </div>
          <div className="flex items-center justify-center w-3/6 ">
            <img src={loginImg} alt="" width={"50%"} />
          </div>
        </div>
        <hr className="mt-6" />
        <div className="flex flex-row w-full">
          <div className="flex flex-row items-center w-3/6 mt-3">
            <button
              disabled={isLoading}
              type="submit"
              className="text-xs border-[1px] border-gray-200 px-8 py-2 hover:bg-blue-500 hover:text-white"
            >
              {isLoading ? "Login...." : "Login"}
            </button>
          </div>
          <div className="w-3/6 mt-3">
            <Link to="/register" className="text-xs text-center cursor-pointer">
              <p className="text-sm cursor-pointer text-sky-500 text-end">
                {" "}
                Create An Account
              </p>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
