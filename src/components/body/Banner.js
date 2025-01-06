import React from "react";

function Banner() {
  return (
    <section>
      <div className="container ">
        <div className="grid h-full grid-cols-12 bg-[url('/banner/banner_bg.png')] ">
          <div className="col-span-4 py-12 flex items-center justify-end ">
            <div className="border-4 rounded-2xl border-white p-8 text-white ">
              <div>
                <h1 className="text-3xl font-bold py-3">Introducing TuruLav</h1>
                <p className="py-2 font-serif">
                  Serious Dating With TuruLav Your Perfect
                </p>
                <p className="pb-2 font-serif">Match is Just a Click Away.</p>
                <div>
                  <div>
                    <from>
                      <div className="flex items-center font-serif justify-between pb-2">
                        <label>I am a </label>
                        <select className="border w-[65%] border-white/10 rounded-lg p-2.5 px-3.5 outline-none bg-transparent">
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="flex font-serif pb-2 items-center justify-between">
                        <label>Looking for </label>
                        <select className="border w-[65%] rounded-lg border-white/10  p-2.5 px-3.5 outline-none bg-transparent">
                          <option className="text-pink-600 ">
                            Select Gender
                          </option>
                          <option className="text-pink-600 ">Male</option>
                          <option className="text-pink-600">Female</option>
                          <option className="bg-pink-600 text-white">
                            Other
                          </option>
                        </select>
                      </div>
                      <div className="flex pb-2 items-center font-serif justify-between">
                        <label> From </label>
                        <input className="border rounded-lg w-[65%] border-white/10  p-2.5 px-3.5 outline-none bg-transparent"></input>
                      </div>

                      <div className="flex pb-2 items-center font-serif justify-between">
                        <label> To </label>
                        <input className="border rounded-lg w-[65%] border-white/10  p-2.5 px-3.5 outline-none bg-transparent"></input>
                      </div>
                      <div className="flex  pb-2 items-center font-serif justify-between">
                        <label> City </label>
                        <input className="border rounded-lg w-[65%] border-white/10  p-2.5 px-3.5 outline-none bg-transparent"></input>
                      </div>
                    </from>
                    <div className="p-2 my-4 rounded-lg bg-pink-600">
                      <button className="w-full">SignUp</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8 px-10 w-full">
            <div className="grid h-full justify-items-end items-end">
              <img className="relative w-[65%]" src="banner/banner.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
