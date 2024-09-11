const Footer = () => {
  return (
    <>
      <hr />
      <footer className="w-[80%] mx-auto  flex flex-col mt-10 mb-5 font-Poppins">
        <div className="flex flex-row items-center justify-between ">
          <div>
            <p className="text-base font-semibold">Help</p>
            <div className="flex flex-col mt-3">
              <a href="" className="text-gray-500">
                About
              </a>
              <a href="" className="text-gray-500">
                Contact
              </a>
              <a href="" className="text-gray-500">
                Terms
              </a>
              <a href="" className="text-gray-500">
                Privacy
              </a>
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-3">
            <span className="h-32 border-r-[1px]"></span>
            <div>
              <p className="text-base font-semibold">Social</p>
              <div className="flex flex-col mt-3">
                <a href="" className="text-gray-500">
                  X
                </a>
                <a href="" className="text-gray-500">
                  GitHub
                </a>
                <a href="" className="text-gray-500">
                  Instagram
                </a>
                <a href="" className="text-gray-500">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-3">
            <span className="h-32 border-r-[1px]"></span>
            <div>
              <p className="text-base font-semibold">NEWSLETTER</p>
              <div className="flex flex-col mt-3">
                <p className="text-sm text-gray-800">
                  Sign Up for Our Newsletter
                </p>
                <div className="flex flex-row ">
                  <div className="border-[1px] border-gray-200 rounded-sm mt-2 ">
                    <input
                      type="text"
                      placeholder="Please Enter Your Email"
                      className="px-2 border-none outline-none placeholder:text-sm"
                    />
                    <button className="py-1.5 px-5 border-[1px] border-gray-200 text-sm font-semibold hover:bg-blue-500 hover:text-white text-center">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <p className="text-sm font-medium text-center">© 2024 Store</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
