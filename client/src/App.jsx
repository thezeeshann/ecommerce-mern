import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/core/auth/Login"
import SignUp from "./components/core/auth/Signup";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Error from "./components/common/Error";
import Shop from "./components/core/shop/Shop";
import SingleProduct from "./components/core/shop/SingleProduct";
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
