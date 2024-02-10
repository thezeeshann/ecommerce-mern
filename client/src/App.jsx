import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp";
import Footer from "./pages/common/Footer";
import Navbar from "./pages/common/Navbar";
import Error from "./components/Error";
import Shop from "./pages/shop/Shop";
import SingleProduct from "./pages/shop/SingleProduct";
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
          <Route path="/shop" element={<Shop/>} />
          <Route path="shop/single-product" element={<SingleProduct/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
