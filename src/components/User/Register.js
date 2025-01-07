"use client";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                  name="name"
                  placeholder="Enter Your Name"
                  type="text"
                  className={`
                    border
                    rounded-lg
                    w-[65%]
                    border-white/10
                    p-2.5
                    px-3.5
                    outline-none
                    bg-transparent
                    ${errors.name ? "border-red-600" : ""}
                  `}
                />
              </div>
              <div>
                {errors.name?.type === "required" && (
                  <p
                    className="text-red-700 font-serif text-sm text-end "
                    role="alert">
                    name is required
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex items-center justify-between">
                <label>Enter your Email</label>
                <input
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  type="email"
                  className={`
                    border
                    rounded-lg
                    w-[65%]
                    border-white/10
                    p-2.5
                    px-3.5
                    outline-none
                    bg-transparent
                    ${errors.email ? "border-red-600" : ""}
                  `}
                />
              </div>
              <div>
                {errors.email?.type === "required" && (
                  <p
                    className="text-red-700 font-serif text-sm text-end "
                    role="alert">
                    Email is required
                  </p>
                )}
              </div>

              {/* Mobile */}
              <div className="flex items-center justify-between">
                <label>Enter Mobile Number</label>
                <input
                  {...register("number", { required: true })}
                  placeholder="Enter Your Number"
                  type="text"
                  className={`
                    border
                    rounded-lg
                    w-[65%]
                    border-white/10
                    p-2.5
                    px-3.5
                    outline-none
                    bg-transparent
                    ${errors.number ? "border-red-600" : ""}
                  `}
                />
              </div>
              <div>
                {errors.number?.type === "required" && (
                  <p
                    className="text-red-700 font-serif text-sm text-end "
                    role="alert">
                    Mobile number is required
                  </p>
                )}
              </div>
              {/* Username */}
              <div className="flex items-center justify-between">
                <label>Create Username</label>
                <input
                  {...register("username", { required: true })}
                  placeholder="Create Your UserName"
                  type="text"
                  className={`
                    border
                    rounded-lg
                    w-[65%]
                    border-white/10
                    p-2.5
                    px-3.5
                    outline-none
                    bg-transparent
                    ${errors.username ? "border-red-600" : ""}
                  `}
                />
              </div>
              <div>
                {errors.username?.type === "required" && (
                  <p
                    className="text-red-700 font-serif text-sm text-end "
                    role="alert">
                    username is required
                  </p>
                )}
              </div>
              {/* Gender */}
              <div className="flex items-center justify-between">
                <label htmlFor="city">Select Your gender</label>
                <select
                  id="city"
                  {...register("gender", { required: "gender is required" })} // Optionally add validation rule
                  className={`
      border
      rounded-lg
      w-[65%]
      border-white/10
      p-2.5
      px-3.5
      outline-none
      bg-transparent
      ${errors.gender ? "border-red-600" : ""}
    `}>
                  <option value="" className="text-pink-600">
                    Select Your gender
                  </option>
                  {/* Replace these options with actual gender options */}
                  <option className="text-pink-600" value="male">
                    Male
                  </option>
                  <option className="text-pink-600" value="female">
                    Female
                  </option>
                  <option className="text-pink-600" value="other">
                    Other
                  </option>
                </select>
              </div>

              {errors.gender && (
                <p
                  className="text-red-700 font-serif text-sm text-end "
                  role="alert">
                  gender is required
                </p>
              )}

              {/* Country */}
              <div className="flex items-center justify-between">
                <label htmlFor="city">Select Your countery</label>
                <select
                  id="city"
                  {...register("countery", {
                    required: "countery is required",
                  })} // Optionally add validation rule
                  className={`
      border
      rounded-lg
      w-[65%]
      border-white/10
      p-2.5
      px-3.5
      outline-none
      bg-transparent
      ${errors.countery ? "border-red-600" : ""}
    `}>
                  <option value="" className="text-pink-600">
                    Select Your countery
                  </option>
                  {/* Replace these options with actual countery options */}
                  <option className="text-pink-600" value="male">
                    Male
                  </option>
                  <option className="text-pink-600" value="female">
                    Female
                  </option>
                  <option className="text-pink-600" value="other">
                    Other
                  </option>
                </select>
              </div>

              {errors.countery && (
                <p
                  className="text-red-700 font-serif text-sm text-end "
                  role="alert">
                  countery is required
                </p>
              )}

              {/* State */}
              <div className="flex items-center justify-between">
                <label htmlFor="city">Select Your State</label>
                <select
                  id="city"
                  {...register("state", { required: "state is required" })} // Optionally add validation rule
                  className={`
      border
      rounded-lg
      w-[65%]
      border-white/10
      p-2.5
      px-3.5
      outline-none
      bg-transparent
      ${errors.state ? "border-red-600" : ""}
    `}>
                  <option value="" className="text-pink-600">
                    Select Your state
                  </option>
                  {/* Replace these options with actual state options */}
                  <option className="text-pink-600" value="male">
                    Male
                  </option>
                  <option className="text-pink-600" value="female">
                    Female
                  </option>
                  <option className="text-pink-600" value="other">
                    Other
                  </option>
                </select>
              </div>

              {errors.state && (
                <p
                  className="text-red-700 font-serif text-sm text-end "
                  role="alert">
                  State is required
                </p>
              )}

              {/* City */}
              <div className="flex items-center justify-between">
                <label htmlFor="city">Select Your City</label>
                <select
                  id="city"
                  {...register("city", { required: "City is required" })} // Optionally add validation rule
                  className={`
      border
      rounded-lg
      w-[65%]
      border-white/10
      p-2.5
      px-3.5
      outline-none
      bg-transparent
      ${errors.city ? "border-red-600" : ""}
    `}>
                  <option value="" className="text-pink-600">
                    Select Your City
                  </option>
                  {/* Replace these options with actual city options */}
                  <option className="text-pink-600" value="male">
                    Male
                  </option>
                  <option className="text-pink-600" value="female">
                    Female
                  </option>
                  <option className="text-pink-600" value="other">
                    Other
                  </option>
                </select>
              </div>

              {errors.city && (
                <p
                  className="text-red-700 font-serif text-sm text-end "
                  role="alert">
                  City is required
                </p>
              )}

              {/* Full Address */}
              <div className="flex items-center justify-between">
                <label>Enter Your Full Address</label>
                <input
                  {...register("addresh", { required: true })}
                  placeholder="Enter Your Addresh"
                  type="text"
                  className={`
                    border
                    rounded-lg
                    w-[65%]
                    border-white/10
                    p-2.5
                    px-3.5
                    outline-none
                    bg-transparent
                    ${errors.addresh ? "border-red-600" : ""}
                  `}
                />
              </div>
              {errors.addresh?.type === "required" && (
                <p
                  className="text-red-700 font-serif text-sm text-end "
                  role="alert">
                  full Addresh is required
                </p>
              )}

              {/* Password */}
              <div className="flex items-center justify-between">
                <label>Create Password</label>
                <input
                  {...register("password", { required: true })}
                  placeholder="Enter Your Password"
                  type="password"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>
              <div>
                {errors.password?.type === "required" && (
                  <p
                    className="text-red-700 font-serif text-sm text-end "
                    role="alert">
                    Password is required
                  </p>
                )}
              </div>
              {/* Confirm Password */}
              <div className="flex items-center justify-between">
                <label>Confirm Password</label>
                <input
                  {...register("confirmPassword", { required: true })}
                  placeholder="Enter Confirm password"
                  type="password"
                  className="border rounded-lg w-[65%] border-white/10 p-2.5 px-3.5 outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              {errors.confirmPassword?.type === "required" && (
                <p
                  className="text-red-700 font-serif text-sm text-end "
                  role="alert">
                  confirmPassword is required
                </p>
              )}
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
