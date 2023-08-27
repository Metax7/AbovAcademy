import React, { useContext } from "react";
import Dental from "../assets/img/about.b1d1a326e20a8e996cc0.png";
import MainButton from "./repeatable/mainButton";
import { FormattedMessage } from "react-intl";
import { Context } from "react-intl/src/components/injectIntl";

export default function HomeAbout() {
  const { locale } = useContext(Context);

  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-20 max-xl:px-5 flex flex-col items-center md:flex-row max-md:space-y-7 md:space-x-6 lg:space-x-0">
        <div className="md:w-1/2">
          <img src={Dental} alt="" />
        </div>

        <div className="sm:px-14 md:w-1/2 md:px-0">
          <h3 className="text-main2-color font-pop font-bold text-lg">
            <FormattedMessage id="about_aboutUs" />
          </h3>
          <h1
            className={`${
              locale === "am" || "ru"
                ? "text-main-color font-bold font-pop text-xl lg:text-3xl xl:text-5xl"
                : "text-main-color font-bold font-pop text-3xl lg:text-5xl xl:text-7xl"
            }`}
          >
            <FormattedMessage id="about_title" />
          </h1>
          <div className="space-y-5 mt-5 text-slate-500">
            <p>
              Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio.
              Nullam quis volutpat est, sed dapibus sapien. Cras condimentum eu
              velit id tempor. Curabitur purus sapien, cursus sed nisl
              tristique, commodo vehicula arcu.
            </p>
            <p>
              Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio.
              Nullam quis volutpat est, sed dapibus sapien. Cras condimentum eu
              velit id tempor. Curabitur purus sapien, cursus sed nisl
              tristique, commodo vehicula arcu.
            </p>
          </div>

          <MainButton buttonText="GET CALL BACK" buttonStyle="mt-10 w-full" />
        </div>
      </div>
    </>
  );
}
