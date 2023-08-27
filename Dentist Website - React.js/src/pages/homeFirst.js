import React, { useContext } from "react";
import goodDoc from "../assets/img/good-doc.png";
import MainButton from "./repeatable/mainButton";
import { FormattedMessage } from "react-intl";
import { Context } from "../pages/multiLanguage/wrapper";

export default function HomeFirst() {
  const { locale } = useContext(Context);
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 mx-auto mt-12 md:flex-row lg:max-w-screen-xl md:justify-between sm:px-16 xl:px-0">
        <div className="w-full md:w-1/2">
          <div>
            <p className="text-lg font-fair text-main2-color font-bold sm:text-xl lg:text-2xl">
              <FormattedMessage id="homeFirst_title" />
            </p>
            <h1
              className={`${
                locale === "am" || "ru"
                  ? "text-main-color font-bold font-fair text-xl my-4 sm:text-4xl lg:text-5xl xl:text-6xl"
                  : "text-main-color font-bold font-fair text-2xl my-4 sm:text-5xl lg:text-6xl xl:text-7xl"
              }`}
            >
              <FormattedMessage id="homeFirst_bigTitle" />
            </h1>
            <p
              className={`${
                locale === "am"
                  ? "text-xs text-gray-500 font-lato sm:font-bold"
                  : "text-sm text-gray-500 font-lato sm:font-bold"
              }`}
            >
              <FormattedMessage id="homeFirst_description" />
            </p>
          </div>

          <div className="mt-16 flex flex-col p-4 shadow-xl sm:flex-row sm:space-x-2">
            <input
              className="px-2 max-md:py-5 bg-slate-100 max-sm:w-full sm:w-2/3 rounded-md"
              type="email"
              placeholder="Your Email Address..."
            />

            <MainButton
              buttonText={<FormattedMessage id="homeFirst_button" />}
              buttonStyle="mt-3 py-5 max-sm:w-full sm:w-2/6 sm:mt-0"
            />
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-end md:w-1/2">
          <div className="w-[80%]">
            <img className="" src={goodDoc} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
