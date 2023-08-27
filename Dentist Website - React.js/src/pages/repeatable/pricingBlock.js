import MainButton from "./mainButton";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function PricingBlock(props) {
  return (
    <>
      <div className="lg:w-1/3 bg-white p-6 sm:px-14 xl:px-16 sm:py-8 shadow-lg">
        <div className="flex flex-col items-center space-y-2">
          <div className="">
            <img src={props.pricingImg} className="w-11" alt="" />
          </div>

          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-main-color font-bold text-2xl lg:text-3xl text-center">{props.plan}</h1>
            <p className="text-main2-color text-4xl font-extrabold lg:text-5xl">
              {props.price}
              <span className="text-xl text-black font-semibold">/ Montly</span>
            </p>
          </div>
        </div>
        <hr className="mt-4" />

        <div className="mt-11">
          <ul className="space-y-3 text-md text-[#777]">
            <li className="flex">
              <span className="text-main2-color mr-2 text-2xl">
                <AiOutlineCheckCircle />
              </span>
              {props.li1}
            </li>
            <li className="flex">
              <span className="text-main2-color mr-2 text-2xl">
                <AiOutlineCheckCircle />
              </span>
              {props.li2}
            </li>
            <li className="flex">
              <span className="text-main2-color mr-2 text-2xl">
                <AiOutlineCheckCircle />
              </span>
              {props.li3}
            </li>
            <li className="flex">
              <span className="text-main2-color mr-2 text-2xl">
                <AiOutlineCheckCircle />
              </span>
              {props.li4}
            </li>
            <li className="flex">
              <span className="text-main2-color mr-2 text-2xl">
                <AiOutlineCheckCircle />
              </span>
              {props.li5}
            </li>
          </ul>

          <div className="flex justify-center">
            <MainButton buttonText="CHOOSE PLAN" buttonStyle="max-sm:w-full mt-10" />
          </div>
        </div>
      </div>
    </>
  );
}
