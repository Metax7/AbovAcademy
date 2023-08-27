import React from "react";

export default function FooterList(props) {
  return (
    <div className="sm:w-1/2">
      <h1 className="text-white text-xl xl:text-2xl font-pop font-bold">{props.title}</h1>
      <ul className="text-main2-color">
        <li className="text-md">
          + <a href="/" className="text-slate-300 hover:text-white transition-all duration-200 ease-linear text-sm ml-2" >{props.li1}</a>
        </li>
        <li className="text-md">
          + <a href="/" className="text-slate-300 hover:text-white transition-all duration-200 ease-linear text-sm ml-2" >{props.li2}</a>
        </li>
        <li className="text-md">
          + <a href="/" className="text-slate-300 hover:text-white transition-all duration-200 ease-linear text-sm ml-2" >{props.li3}</a>
        </li>
        <li className="text-md">
          + <a href="/" className="text-slate-300 hover:text-white transition-all duration-200 ease-linear text-sm ml-2" >{props.li4}</a>
        </li>
        <li className="text-md">
          + <a href="/" className="text-slate-300 hover:text-white transition-all duration-200 ease-linear text-sm ml-2" >{props.li5}</a>
        </li>
        <li className="text-md">
          + <a href="/" className="text-slate-300 hover:text-white transition-all duration-200 ease-linear text-sm ml-2" >{props.li6}</a>
        </li>
      </ul>
    </div>
  );
}
