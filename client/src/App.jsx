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
          <Route path="/category" element={<ProductsCategory />} />
          <Route path="*" element={<Error />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashborad" element={<Dashboard />} />
            {/* <Route path="/dashboard" element={<Dashboard />}>
            <Route path="order" element={<Order />} />
            <Route path="account-details" element={<AccountDetails />} />
            <Route path="address" element={<Address />} />
          </Route> */}
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
