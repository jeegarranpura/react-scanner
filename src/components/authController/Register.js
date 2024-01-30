import React from "react";

const Register = () => {
  const inputClasses =
    "border-solid border-[1px] border-black rounded-[5px] border-opacity-50 p-[3px] ";
  return (
    <div className="h-full flex justify-center items-center">
      <div
        className="h-auto w-[350px] rounded-[12px] border-1 shadow shadow-2xl relative flex flex-col"
        id="card"
      >
        <div
          id="cardHeader"
          className="m-1 font-semibold text-xl border-solid border-b-[1px] border-[black] border-opacity-10 p-3"
        >
          <h2>Register</h2>
        </div>
        <div id="cardBody" className="flex flex-col items-center py-[20px]">
          <div className="p-[0.5rem] flex flex-col justify-start w-full">
            <div className="text-lg font-normal flex">
              <label>Name</label>
            </div>
            <input
              type="text"
              className={inputClasses}
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="p-[0.5rem] flex flex-col justify-start w-full">
            <div className="text-lg font-normal flex">
              <label>Email</label>
            </div>
            <input
              type="email"
              className={inputClasses}
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="p-[0.5rem] flex flex-col justify-start w-full">
            <div className="text-lg font-normal flex">
              <label>Mobile No.</label>
            </div>
            <input
              type="text"
              className={inputClasses}
              name="mobile_no"
              id="mobile_no"
              placeholder="Enter yout mobile no."
            />
          </div>
          <div className="p-[0.5rem] flex flex-col justify-start w-full">
            <div className="text-lg font-normal flex">
              <label>Password</label>
            </div>
            <input
              type="password"
              className={inputClasses}
              name="password"
              id="password"
              placeholder="password"
            />
          </div>

          <div className="w-full flex justify-end px-5 absolute bottom-[70px]">
            <a
              className="underline text-blue-700 hover:text-black  cursor-pointer"
              href="/login"
            >
              Already have an account?
            </a>
          </div>
        </div>
        <div
          id="cardFooter"
          className="border-t-[1px] border-solid border-opacity-10 border-black m-1 p-3"
        >
          {/* <div className="flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-[5px] font-semibold">Register</button>
            
          </div> */}
          <div>
            <button className=" w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-[5px] font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Register);
