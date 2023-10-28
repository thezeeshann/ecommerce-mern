import registerImg from "../../../assets/login_register/undraw_authentication_re_svpt.svg"

const SignUp = () => {
  return (
    <section className="w-[80%] mx-auto mt-7 mb-10">
      <p className="text-base font-bold">Sign Up</p>
      <hr className="mt-3" />
      <div className="flex flex-row mt-10 w-full">
        <div className="flex flex-col w-3/6 gap-y-2">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email" className="text-xs">First Name</label>
            <input type="email" name="" id="" placeholder="Please Enter your First Name" className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none" />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email" className="text-xs">Last Name</label>
            <input type="email" name="" id="" placeholder="Please Enter your Last Name" className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none" />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email" className="text-xs">Email Address</label>
            <input type="email" name="" id="" placeholder="Please Enter your Email" className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none" />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email" className="text-xs">Password</label>
            <input type="email" name="" id="" placeholder="Please Enter your Password" className="px-3 py-1.5 rounded-sm placeholder:text-xs border-[1px] border-gray-200  outline-none" />
          </div>
        </div>
        <div className=" w-3/6 flex justify-center items-center">
        <img src={registerImg} alt="" width={"45%"} />
        </div>
      </div>
      <hr className="mt-6" />
      <div className="flex flex-row w-full">
        <div className="w-3/6 flex flex-row gap-x-5 mt-3 items-center">
          <button className="text-xs border-[1px] border-gray-200 px-8 py-2 hover:bg-blue-500 hover:text-white">Sign Up</button>
          {/* <p className="text-xs text-center cursor-pointer">Create An Account</p> */}
        </div>
        <div className="w-3/6 mt-3">
          <p className="text-sky-500 text-sm text-end cursor-pointer">Back to Login?</p> 
        </div>
      </div>
    </section>
  )
}

export default SignUp