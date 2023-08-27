import React from "react";
import DocSmile from "../assets/img/open.e85a115bc1d5d0aada4f.png";
import MainButton from "./repeatable/mainButton";

export default function HomeApponiment() {
  return (
    <div className="w-full relative after:h-[85%] sm:after:h-[80%] after:w-[100%] after:absolute after:bottom-0 after:left-0 after:bg-[#0E264F] mt-10">
      <div className="max-w-screen-xl max-md:space-y-8 md:space-x-7 mx-auto flex flex-col items-center md:flex-row max-xl:px-8">
        <div className="relative z-50 md:w-1/2">
          <img src={DocSmile} className="" alt="" />
        </div>
        <div className="flex flex-col max-md:items-center md:w-1/2 z-50">
          <p className="font-bold text-main2-color text-md font-pop md:mb-5">
            Book Dentail Appointment
          </p>
          <h1 className="max-md:text-center font-bold text-white font-pop text-xl sm:text-3xl lg:text-5xl">
            We Are open And Welcoming Patients
          </h1>
          <div className="mt-5 max-md:mb-5">
            <MainButton
              buttonText="Book Apponiment"
              buttonStyle="py-4 shadow-lg shadow-blue-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
