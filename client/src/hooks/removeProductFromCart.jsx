import { useCallback } from 'react';
import toast from "react-hot-toast";
import {
  useRemoveFromCartMutation,
  useGetCartsQuery,
} from "../redux/api/cartApiSlice";

const useRemoveProductFromCart = () => {
  const [removeFromCart] = useRemoveFromCartMutation();
  const { refetch } = useGetCartsQuery();

  const removeProduct = useCallback(async (pID) => {
    try {
      const productId = { productId: pID };
      const response = await removeFromCart(productId);
      if (response.error) {
        toast.error(response.error.data.message);
        console.log(response.error);
      } else {
        toast.success("Item removed from cart");
        refetch();
      }
      console.log("REMOVE FROM CART API RESPONSE", response);
    } catch (error) {
      console.log("REMOVE ITEM FROM CART API ERROR", error);
    }
  }, [removeFromCart, refetch]);

  return removeProduct;
};

export default useRemoveProductFromCart;
