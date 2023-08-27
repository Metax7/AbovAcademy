import React from "react";
import HomeFirst from "./homeFirst";
import HomeServices from "./HomeServices";
import HomeTestimonials from "./homeTestimonials";
import HomeAbout from "./homeAbout";
import HomePricing from "./homePricing";
import HomeQuestions from "./homeQuestions";
import HomeDentist from "./HomeDentist";
import HomeApponiment from "./homeApponiment";
import HomeBlog from "./homeBlog";

export default function Home() {
  return (
    <>
      <HomeFirst />
      <HomeServices />
      <HomeAbout />
      <HomeTestimonials />
      <HomePricing />
      <HomeQuestions />
      <HomeDentist />
      <HomeApponiment />
      <HomeBlog />
    </>
  );
}
