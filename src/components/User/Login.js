import React from "react";
import Image from "next/image"; // You can use this if you want to add images

function Login() {
  return (
    <div>
      {/* Header Section */}
      <div className="w-full bg-[url('/banner/banner_bg.png')] text-white mx-auto flex justify-center items-center">
        <div className="text-3xl max-w-fit text-center p-10">
          <h3 className="font-medium pb-2">Login your Account</h3>
          <p className="text-lg text-slate-400">
            Login an account and find your mate with us!
          </p>
        </div>
      </div>

      {/* Form and Image Section */}
      <div className="bg-[#391965] md:grid-cols-2 items-center text-white p-6">
        <div className="max-w-xl mx-auto  rounded-lg  p-6 mt-4 md:mt-0">
          <form>
            <div className="space-y-4">
          
    

              {/* Email */}
              <div className="flex items-center justify-between">
                <label>Enter your Email</label>
                <input
                placeholder="Enter Your Email"
                  type="email"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center justify-between">
                <label>Enter Your Password</label>
                <input
                placeholder="Enter Your Password"
                  type="password"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>
            <div className="p-2 my-4 rounded-lg bg-pink-600">
              <button className="w-full p-2 text-white font-semibold rounded-lg">
                Sign In
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
