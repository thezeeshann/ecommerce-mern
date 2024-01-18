import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    
    <hr />
      <footer className="w-[80%] mx-auto  flex flex-col mt-10 mb-5 font-Poppins">
        <div className="flex flex-row justify-between items-center ">
          <div>
            <p className="text-base font-semibold">CUSTOMER SERVICE</p>
            <div className="flex flex-col mt-3">
              <a href="" className="text-gray-500">
                Contact Us
              </a>
              <a href="" className="text-gray-500">
                Sell With Us
              </a>
              <a href="" className="text-gray-500">
                Shipping
              </a>
            </div>
          </div>

          <div className="flex flex-row gap-x-3 items-center">
            <span className="h-32 border-r-[1px]"></span>
            <div>
              <p className="text-base font-semibold">LINKS</p>
              <div className="flex flex-col mt-3">
                <a href="" className="text-gray-500">
                  Contact Us
                </a>
                <a href="" className="text-gray-500">
                  Sell With Us
                </a>
                <a href="" className="text-gray-500">
                  Shipping
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-3 items-center">
            <span className="h-32 border-r-[1px]"></span>
            <div>
              <p className="text-base font-semibold">NEWSLETTER</p>
              <div className="flex flex-col mt-3">
                <p className="text-gray-800 text-sm">
                  Sign Up for Our Newsletter
                </p>
                <div className="flex flex-row ">
                <div className="border-[1px] border-gray-200 rounded-sm mt-2 ">
                  <input
                    
                    type="text"
                    placeholder="Please Enter Your Email"
                    className="border-none outline-none placeholder:text-sm px-2"
                  />
                                    <button className="py-1.5 px-5 border-[1px] border-gray-200 text-sm font-semibold hover:bg-blue-500 hover:text-white text-center">Subscribe</button>
                </div>
              
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  mt-5">
          <p className="text-center text-sm">© 2024 MERN Storeasd </p>

          <div className="flex flex-row justify-center items-center mt-2 gap-x-1">
            <BsFacebook size={"2rem"} className="text-sky-700" />
            <AiFillInstagram size={"2.4rem"} className="text-red-500" />
            <AiFillTwitterCircle size={"2.4rem"} className="text-blue-500" />
            <BsPinterest size={"2rem"} className="text-red-700" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
