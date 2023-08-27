import React from "react";
import DentistSlider from "./DentistSlider";
import Title from "./repeatable/title";

export default function HomeDentist() {
  return (
    <>
      <div className="py-12 mt-16">
        <div className="max-w-screen-xl mx-auto px-8">
          <div>
            <Title title="OUR DOCTORS" bigTitle="Best Expert Dentist" />
          </div>

          <div className="space-x-11 mt-16">
            <DentistSlider />
          </div>
        </div>
      </div>
    </>
  );
}
