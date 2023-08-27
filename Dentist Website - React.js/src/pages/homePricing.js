import React from "react";
import ToothStar from "../assets/img/tooth-star.png";
import ToothRound from "../assets/img/tooth-round.png";
import ToothShine from "../assets/img/tooth-shine.png";
import Title from "./repeatable/title";
import PricingBlock from "./repeatable/pricingBlock";

export default function HomePricing() {
  const list = [
    {
      pricingImg: ToothStar,
      plan: "Basic Plan",
      price: "$49",
      li1: "Aliquam quis justo at lorem",
      li2: "Aliquam quis justo at lorem",
      li3: "Aliquam quis justo at lorem",
      li4: "Aliquam quis justo at lorem",
      li5: "Aliquam quis justo at lorem",
    },
    {
      pricingImg: ToothRound,
      plan: "Standart Plan",
      price: "$99",
      li1: "Aliquam quis justo at lorem",
      li2: "Aliquam quis justo at lorem",
      li3: "Aliquam quis justo at lorem",
      li4: "Aliquam quis justo at lorem",
      li5: "Aliquam quis justo at lorem",
    },
    {
      pricingImg: ToothShine,
      plan: "Unlimited Plan",
      price: "$149",
      li1: "Aliquam quis justo at lorem",
      li2: "Aliquam quis justo at lorem",
      li3: "Aliquam quis justo at lorem",
      li4: "Aliquam quis justo at lorem",
      li5: "Aliquam quis justo at lorem",
    },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto py-16">
        <div>
          <Title title="Testimonials" bigTitle="Our Pricing" />
        </div>

        <div className="mt-20">
          <div className="flex flex-col items-center lg:flex-row max-lg:space-y-10 lg:space-x-5 lg:px-10 xl:px-0">
            {list &&
              list.map((item, index) => {
                return (
                  <PricingBlock
                    pricingImg={item.pricingImg}
                    plan={item.plan}
                    price={item.price}
                    li1={item.li1}
                    li2={item.li2}
                    li3={item.li3}
                    li4={item.li4}
                    li5={item.li5}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
