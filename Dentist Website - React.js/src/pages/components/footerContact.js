import React from "react";

export default function FooterContact(props) {
  return (
    <div className="flex items-center space-x-5">
      <div className="p-2 text-white text-md bg-sky-500 rounded-full">
        {props.icon}
      </div>
      <div className="text-white font-pop text-xs">
        <p>{props.contact1}</p>
        <p>{props.contact2}</p>
      </div>
    </div>
  );
}
