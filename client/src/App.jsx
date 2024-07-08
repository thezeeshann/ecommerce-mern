import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Error from "./components/Error";
import Shop from "./pages/shop/Shop";
import Dashboard from "./pages/dashboard/Dashboard";
import SingleProduct from "./pages/shop/SingleProduct";
import PrivateRoute from "./components/Route/PrivateRoute";
import ProductsCategory from "./pages/shop/ProductCategory";
import OrderDetails from "./pages/order/OrderDetails";
import OrderSuccess from "./pages/order/OrderSuccess";
import "./App.css";
import Orders from "./pages/dashboard/user/Orders";
import Address from "./pages/dashboard/user/Address";
import ChangePassword from "./pages/dashboard/user/ChangePassword";
import WishList from "./pages/dashboard/user/WishList";
import Support from "./pages/dashboard/user/Support";
import AccountDetails from "./pages/dashboard/user/AccountDetails";
import ManageProducts from "./pages/dashboard/admin/ManageProducts";
import ManageOrders from "./pages/dashboard/admin/ManageOrders";
import ManageUser from "./pages/dashboard/admin/ManageUser";
import ManageReviews from "./pages/dashboard/admin/ManageReviews";
import ManageBrand from "./pages/dashboard/admin/ManageBrand";

function App() {
  return (
    <>
      <Navbar />
      <main className="font-Poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:slug" element={<SingleProduct />} />
          <Route path="/shop/brand/:slug" element={<Shop />} />
          <Route path="/shop/category/:categorySlug" element={<Shop />} />
          <Route path="/brands" element={<ProductsCategory />} />
          <Route path="*" element={<Error />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<AccountDetails />} />
              <Route path="security" element={<ChangePassword />} />
              <Route path="products" element={<ManageProducts />} />
              <Route path="orders" element={<ManageOrders />} />
              <Route path="brand" element={<ManageBrand />} />
              <Route path="users" element={<ManageUser />} />
              <Route path="reviews" element={<ManageReviews />} />
              <Route path="address" element={<Address />} />
              <Route path="order" element={<Orders />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="support" element={<Support />} />
            </Route>
            <Route path="/order/success/:orderId" element={<OrderSuccess />} />
            <Route path="/order/details/:orderId" element={<OrderDetails />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
