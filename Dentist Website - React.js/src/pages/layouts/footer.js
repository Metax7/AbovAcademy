import React from "react";
import FooterLogo from "../../assets/img/footerLogo.png";
import { BiAlarm, BiLocationPlus, BiPhone, BiEnvelope } from "react-icons/bi";
import FooterList from "../components/footerList";
import FooterContact from "../components/footerContact";

export default function Footer() {
  const list = [
    {
      title: "Other Links",
      li1: "About",
      li2: "Services",
      li3: "Opinions",
      li4: "Pricing",
      li5: "Our Team",
      li6: "blog",
    },
    {
      title: "Our Services",
      li1: "Root Canal",
      li2: "Alignment Teeth",
      li3: "Cosmetic Teeth",
      li4: "Oral Hygiene",
      li5: "Live Advisory",
      li6: "Cavity Inspection",
    },
  ];

  const contactList = [
    {
      icon: <BiLocationPlus />,
      contact1: "1247/Plot No. 39, 15th Phase:",
      contact2: "LHB Colony, Kanpur",
    },
    {
      icon: <BiPhone />,
      contact1: "1800-121-3637",
      contact2: "+91-7052-101-786",
    },
    {
      icon: <BiEnvelope />,
      contact1: "info@example.com",
      contact2: "help@example.com",
    },
  ];

  return (
    <>
      <div className="w-full bg-main-color py-16">
        <div className="max-w-screen-xl mx-auto flex max-lg:flex-col font-pop max-sm:px-5 max-xl:px-12 max-lg:space-y-10 lg:space-x-5">
          <div className="space-y-7 lg:w-1/3">
            <div>
              <img src={FooterLogo} className="w-52" alt="" />
            </div>
            <p className="text-xs text-[#b2c0d8]">
              Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur
              sagittis libero tincidunt tempor finibus. Mauris at dignissim
              ligula, nec tristique orci.Quisque vitae metus.
            </p>
            <div className="flex items-center space-x-7">
              <div className="text-white p-2 rounded-full bg-sky-500">
                <BiAlarm />
              </div>
              <div className="text-white text-sm">
                <p>Monday - Saturday:</p>
                <p>9:00am - 10:00Pm</p>
              </div>
            </div>
          </div>
          <div className="max-sm:space-y-5 sm:flex lg:w-1/3">
            {list &&
              list.map((item, index) => {
                return (
                  <FooterList
                    title={item.title}
                    li1={item.li1}
                    li2={item.li2}
                    li3={item.li3}
                    li4={item.li4}
                    li5={item.li5}
                    li6={item.li6}
                    key={index}
                  />
                );
              })}
          </div>
          <div className="space-y-6 lg:w-1/3">
            {contactList &&
              contactList.map((item, index) => {
                return (
                  <FooterContact
                    icon={item.icon}
                    contact1={item.contact1}
                    contact2={item.contact2}
                    key={index}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
