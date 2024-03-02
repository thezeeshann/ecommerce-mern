import { setUser } from "../features/profileSlice";
import { setToken } from "../features/authSlice";
import { toast } from "react-hot-toast";

export const logout = (navigate) => {
    return (dispatch) => {
      dispatch(setUser(null));
      dispatch(setToken(null));
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged Out");
      navigate("/login");
    };
  };
  