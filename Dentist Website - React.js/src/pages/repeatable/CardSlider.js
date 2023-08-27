import React from "react";
import Stars from "../../assets/img/stars.png";
import Chakert from "../../assets/img/chakert.png";

export default function CardSlider(props) {
  return (
    <>
      <div className="bg-white relative p-6 mt-14 max-md:w-full rounded-md md:mx-4 mb-14">
        <div>
          <div className="absolute -top-14 left-0">
            <img src={props.profileImg} alt="" />
          </div>

          <div className="flex flex-wrap max-sm:space-y-5 justify-center sm:justify-between items-center mt-5">
            <div className="">
              <img src={Stars} alt="" />
            </div>
            <div className="max-sm:hidden">
              <img src={Chakert} alt="" />
            </div>
          </div>

          <div className="mt-5 sm:mt-5">
            <p className="text-[#777] font-pop">{props.description}</p>
          </div>

          <div className="mt-6">
            <span className="text-main-color text-xl font-extrabold">
              {props.name}
            </span>
            <p className="text-main2-color">{props.profession}</p>
          </div>
        </div>
      </div>
    </>
  );
}
