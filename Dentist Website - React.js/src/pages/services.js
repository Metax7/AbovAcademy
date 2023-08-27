import React from "react";
import ServicesProvide from "./components/servicesProvide";
import Canal from "../assets/img/canal.png";
import Alignment from "../assets/img/alignment.png";
import Cosmetic from "../assets/img/cosmetic.png";
import OralHyg from "../assets/img/oralhyg.png";
import Advisory from "../assets/img/advisory.png";
import Cavity from "../assets/img/cavity.png";
import ServiceImg from "../assets/img/services-img.png";
import { FormattedMessage } from "react-intl";

export default function Services() {
  const serviceList1 = [
    {
      title: <FormattedMessage id="service_rootCanal" />,
      description:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: Canal,
    },
    {
      title: <FormattedMessage id="service_alignmentTeeth" />,
      description:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: Alignment,
    },
    {
      title: <FormattedMessage id="service_cosmeticTeeth" />,
      description:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: Cosmetic,
    },
  ];

  const serviceList2 = [
    {
      left: "text-start",
      reverse: "flex-row-reverse",
      title: <FormattedMessage id="service_oralHygiene" />,
      description:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: OralHyg,
    },
    {
      left: "text-start",
      reverse: "flex-row-reverse",
      title: <FormattedMessage id="service_liveAdvisory" />,
      description:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: Advisory,
    },
    {
      left: "text-start",
      reverse: "flex-row-reverse",
      title: <FormattedMessage id="service_cavityInspection" />,
      description:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: Cavity,
    },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center md:flex-row mt-16 px-5 md:space-x-3 max-md:space-y-5">
          <div className="flex">
            <ul className="space-y-3 flex flex-col">
              {serviceList1 &&
                serviceList1.map((item, index) => {
                  return (
                    <li>
                      <ServicesProvide
                        title={item.title}
                        description={item.description}
                        img={item.img}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="hidden lg:block w-[550px]">
            <img src={ServiceImg} className="" alt="" />
          </div>

          <div className="flex">
            <ul className="flex flex-col space-y-3">
              {serviceList2 &&
                serviceList2.map((item, index) => {
                  return (
                    <li>
                      <ServicesProvide
                        left={item.left}
                        reverse={item.reverse}
                        title={item.title}
                        description={item.description}
                        img={item.img}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
