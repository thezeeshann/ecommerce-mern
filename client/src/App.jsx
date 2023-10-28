import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/core/auth/Login"
import SignUp from "./components/core/auth/Signup";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Error from "./components/common/Error";
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
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
