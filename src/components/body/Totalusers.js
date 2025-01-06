import React from "react";

function Totalusers() {
  return (
    <section>
      <div className="bg-[url('/banner/banner_bg.png')] ">
        <div>
          <div className="p-12 text-center font-serif text-white ">
            <h3 className="text-2xl ">About Our TravelMates</h3>
            <h1 className="text-4xl font-bold ">It All Starts With A Date</h1>
          </div>
          <div>
            <div className="grid-cols-12 text-white" >
            {/* card  */}
          <div className="col-span-4 border-2">
            <div className="p-3 ">
            <img src="banner/new.png" />
            </div>

          </div>
          <div className="col-span-4 border-2">
            <div className="p-3 ">
            <img src="banner/new.png" />
            </div>
            
          </div>
          <div className="col-span-4 border-2">
            <div className="p-3 ">
            <img src="banner/new.png" />
            </div>
            
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Totalusers;
