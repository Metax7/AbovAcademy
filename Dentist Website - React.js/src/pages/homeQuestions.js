import React from "react";
import { AccordionCustomStyles } from "./components/accordion";
import qqDentist from "../assets/img/qq.3c4cba4b5f2f09d93f49.png";

export default function HomeQuestions() {
  return (
    <div className="bg-main-color flex flex-col md:flex-row max-md:px-5 max-md:py-4 max-md:space-y-14">
      <div className="md:w-1/2 flex justify-center md:justify-end py-10">
        <div className="max-w-2xl md:space-y-24 flex flex-col md:px-10">
          <div className="md:mt-16">
            <h1 className="text-white font-bold font-pop text-xl max-md:py-14 lg:text-5xl xl:text-6xl">
              Frequently Asked Question
            </h1>
          </div>
          <div className="">
            <AccordionCustomStyles />
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <img src={qqDentist} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
