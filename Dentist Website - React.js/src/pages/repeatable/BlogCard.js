import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  return (
    <div className="shadow-lg group lg:w-1/3 rounded-md">
      <div className="relative overflow-hidden">
        <img
          src={props.image}
          className="group-hover:scale-110 duration-200 transition-all ease-linear w-full h-full"
          alt=""
        />
        <div className="absolute bg-main2-color text-white py-1 px-2 bottom-5 left-5 flex items-center space-x-2 font-pop rounded-md">
          <FaCalendarAlt /> <span>{props.date}</span>
        </div>
      </div>

      <div className="px-3 py-5 space-y-3">
        <h1>
          <a
            href="/"
            className="text-main-color font-pop font-bold md
            text-xl hover:text-main2-color transition-all duration-200 ease-linear"
          >
            {props.title}
          </a>
        </h1>
        <p className="text-[#777]">{props.text}</p>
        <Link to={`/news-page/${props.href}/${props.category}`}>
          <button className="underline decoration-2 underline-offset-4 font-pop font-bold text-main2-color mt-3 hover:text-main-color transition-all duration-200 ease-linear">
            READ MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
