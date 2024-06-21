import { setUser } from "../redux/features/profileSlice";
import { setToken } from "../redux/features/authSlice";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setUser(null));
    dispatch(setToken(null));
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    toast.success("Logged Out");
    navigate("/login");
  };

  return logout;
}
