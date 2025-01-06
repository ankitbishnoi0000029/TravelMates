"use client";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(watch("name"), ">>>>>>>>>>>>"); 

  return (
    <div>
      {/* Header Section */}
      <div className="w-full bg-[url('/banner/banner_bg.png')] text-white mx-auto flex justify-center items-center">
        <div className="text-3xl max-w-fit text-center p-10">
          <h3 className="font-medium">Create your Account</h3>
          <p className="text-lg text-slate-400">
            Create an account and find your mate with us!
          </p>
        </div>
      </div>

      <div className="bg-[#391965] md:grid-cols-2 items-center text-white p-6">
        <div className="max-w-xl mx-auto border-4 rounded-lg border-white p-6 mt-4 md:mt-0">
          <h1 className="text-2xl font-semibold mb-4">
            Fill out the form to get started
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-center justify-between">
                <label>Enter Your Name</label>
                <input
                  {...register("name",{required :true })}
                  name="name"
                  placeholder="Enter Your Name"
                  type="text"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>

              {/* Email */}
              <div className="flex items-center justify-between">
                <label>Enter your Email</label>
                <input
                  {...register("email")}
                  placeholder="Enter Your Email"
                  type="email"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>

              {/* Mobile */}
              <div className="flex items-center justify-between">
                <label>Enter Mobile Number</label>
                <input
                 {...register("number")}
                  placeholder="Enter Your Number"
                  type="text"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>

              {/* Username */}
              <div className="flex items-center justify-between">
                <label>Create Username</label>
                <input
                  {...register("username")}
                  placeholder="Create Your UserName"
                  type="text"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>

              {/* Gender */}
              <div className="flex items-center justify-between">
                <label>Select Your Gender</label>
                <select
                  {...register("gender")}
                className="border w-[65%] border-white/10 rounded-lg p-2.5 px-3.5 outline-none bg-transparent">
                  <option className="text-pink-600 ">Select Gender</option>
                  <option className="text-pink-600 ">Male</option>
                  <option className="text-pink-600 ">Female</option>
                  <option className="text-pink-600 ">Other</option>
                </select>
              </div>

              {/* Country */}
              <div className="flex items-center justify-between">
                <label>Select Your Country</label>

                <select
                  {...register("country")}
                className="border w-[65%] border-white/10 rounded-lg p-2.5 px-3.5 outline-none bg-transparent">
                  <option className="text-pink-600 ">Select Gender</option>
                  <option className="text-pink-600 ">Male</option>
                  <option className="text-pink-600 ">Female</option>
                  <option className="text-pink-600 ">Other</option>
                </select>
              </div>

              {/* State */}
              <div className="flex items-center justify-between">
                <label>Select Your State</label>
                <select
                  {...register("state")}
                
                className="border w-[65%] border-white/10 rounded-lg p-2.5 px-3.5 outline-none bg-transparent">
                  <option className="text-pink-600 ">Select Gender</option>
                  <option className="text-pink-600 ">Male</option>
                  <option className="text-pink-600 ">Female</option>
                  <option className="text-pink-600 ">Other</option>
                </select>
              </div>

              {/* City */}
              <div className="flex items-center justify-between">
                <label>Select Your City</label>
                <select
                  {...register("city")}
                className="border w-[65%] border-white/10 rounded-lg p-2.5 px-3.5 outline-none bg-transparent">
                  <option className="text-pink-600 ">Select Gender</option>
                  <option className="text-pink-600 ">Male</option>
                  <option className="text-pink-600 ">Female</option>
                  <option className="text-pink-600 ">Other</option>
                </select>
              </div>

              {/* Full Address */}
              <div className="flex items-center justify-between">
                <label>Enter Your Full Address</label>
                <input
                {...register("addresh")}
                  placeholder="Enter Your Addresh"
                  type="text"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>

              {/* Password */}
              <div className="flex items-center justify-between">
                <label>Create Password</label>
                <input
                {...register("password")}
                  placeholder="Enter Your Password"
                  type="password"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>

              {/* Confirm Password */}
              <div className="flex items-center justify-between">
                <label>Confirm Password</label>
                <input
                {...register("confirmPassword")}
                  placeholder="Enter Confirm password"
                  type="password"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="p-2 my-4 rounded-lg bg-pink-600">
              <button className="w-full p-2 text-white font-semibold rounded-lg">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
