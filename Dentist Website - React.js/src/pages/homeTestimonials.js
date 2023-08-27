import React from "react";
import Title from "./repeatable/title";
import DocSlider from "./components/sslider";

export default function HomeTestimonials() {
  return (
    <>
      <div className="w-full bg-[#f6f8fc] py-28 mt-20 border">
        <div className="max-w-screen-xl mx-auto px-8">
          <Title title="Testimonials" bigTitle="What Our Clients Says" />
          <DocSlider />
        </div>
      </div>
    </>
  );
}
