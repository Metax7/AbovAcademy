import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="mb-4 bg-white"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`transition-colors bg-slate-50 px-4 ${
            open === 1
              ? "hover:!text-blue-700 text-md font-bold text-main-color font-pop p-6"
              : "p-6 text-md font-bold text-main-color font-pop"
          }`}
        >
          Vivamus rhoncus ante a ipsum imperdiet ?
        </AccordionHeader>
        <AccordionBody className="pt-3 text-base font-normal px-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          laudantium dignissimos excepturi quaerat, eveniet quia culpa quo
          dolores velit neque minima facilis! Alias exercitationem nobis,
          aspernatur minima quae expedita omnis!
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="mb-4 bg-white"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`transition-colors bg-slate-50 px-4 ${
            open === 2
              ? "hover:!text-blue-700 text-md font-bold text-main-color font-pop p-6"
              : "p-6 text-md font-bold text-main-color font-pop"
          }`}
        >
          Vivamus rhoncus ante a ipsum imperdiet ?
        </AccordionHeader>
        <AccordionBody className="pt-3 text-base font-normal px-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          laudantium dignissimos excepturi quaerat, eveniet quia culpa quo
          dolores velit neque minima facilis! Alias exercitationem nobis,
          aspernatur minima quae expedita omnis!
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="mb-4 bg-white"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`transition-colors bg-slate-50 px-4 ${
            open === 3
              ? "hover:!text-blue-700 text-md font-bold text-main-color font-pop p-6"
              : "p-6 text-md font-bold text-main-color font-pop"
          }`}
        >
          Vivamus rhoncus ante a ipsum imperdiet ?
        </AccordionHeader>
        <AccordionBody className="pt-3 text-base font-normal px-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          laudantium dignissimos excepturi quaerat, eveniet quia culpa quo
          dolores velit neque minima facilis! Alias exercitationem nobis,
          aspernatur minima quae expedita omnis!
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        icon={<Icon id={4} open={open} />}
        className="mb-4 bg-white"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`transition-colors bg-slate-50 px-4 ${
            open === 1
              ? "hover:!text-blue-700 text-md font-bold text-main-color font-pop p-6"
              : "p-6 text-md font-bold text-main-color font-pop"
          }`}
        >
          Vivamus rhoncus ante a ipsum imperdiet ?
        </AccordionHeader>
        <AccordionBody className="pt-3 text-base font-normal px-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          laudantium dignissimos excepturi quaerat, eveniet quia culpa quo
          dolores velit neque minima facilis! Alias exercitationem nobis,
          aspernatur minima quae expedita omnis!
        </AccordionBody>
      </Accordion>
    </>
  );
}
