import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
const header = () => {
  return (
    <div className=" h-screen w-full">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/pexels-marcus-herzberg-1058277.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white "> WELCOME TO <br/> Mario Restaurant</p>
                <p className="text-2xl font-light text-white ">
                  A Rooftop Italian Restaurant
                </p>
                <button
                  type="button"
                  className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/pexels-eneida-nieves-905847.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white "> Healthy Homemade Cuisine</p>
                <p className="text-2xl font-light text-white ">
                  Come and taste our fantastic cuisine!
                </p>
                <button
                  type="button"
                  className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/pexels-adrienn-1537635.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white "> Book a Table Online</p>
                <p className="text-2xl font-light text-white ">
                  We look forward to seeing you!
                </p>
                <button
                  type="button"
                  className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default header;
