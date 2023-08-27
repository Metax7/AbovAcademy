import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/react-1-logo-png-transparent-removebg-preview.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Lang from "../multiLanguage/setLang";
import { FormattedMessage } from "react-intl";
import { Context } from "../multiLanguage/wrapper";

function Header() {
  const [open, setOpen] = useState(false);
  const { locale } = useContext(Context);
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex py-6 justify-between items-center max-sm:px-5 sm:px-14 xl:px-0">
        <Link to={""}>
          <img src={Logo} className="w-40" alt="" />
        </Link>
        <div className="hidden md:block">
          <ul
            className={`${
              locale === "am"
                ? "flex items-center font-extrabold md:space-x-1 xl:space-x-2 md:text-md lg:font-bold text-main-color"
                : "flex items-center font-extrabold md:space-x-2 xl:space-x-6 lg:text-xl lg:font-bold text-main-color"
            }`}
          >
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={""}
              >
                <FormattedMessage id="nav_home" />
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"about"}
              >
                <FormattedMessage id="nav_about" />
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"services"}
              >
                <FormattedMessage id="nav_service" />
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"opinion"}
              >
                <FormattedMessage id="nav_opinion" />
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"pricing"}
              >
                <FormattedMessage id="nav_pricing" />
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"our-team"}
              >
                <FormattedMessage id="nav_ourTeam" />
              </Link>
            </li>
            <li>
              <Link
                className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
                to={"blog"}
              >
                <FormattedMessage id="nav_blog" />
              </Link>
            </li>
            <div>
              <Lang />
            </div>
          </ul>
        </div>
        <div className="md:hidden z-10 text-3xl">
          {open ? (
            <FaTimes
              className="text-slate-950"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <FaBars onClick={() => setOpen(!open)} />
          )}
        </div>
        <ul
          className={
            open
              ? "text-slate-950 font-bold items-center py-12 px-10 flex flex-col space-y-5 absolute w-full bg-sky-300 left-0 top-0 transition-all duration-200 ease-linear overflow-hidden h-full"
              : "text-slate-950 font-bold absolute w-full items-center flex flex-col space-y-5 bg-sky-300 left-0 top-0 transition-all duration-200 ease-linear overflow-hidden h-0"
          }
        >
          <li>
            <Link
              className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
              to={""}
            >
              <FormattedMessage id="nav_home" />
            </Link>
          </li>
          <li>
            <Link
              className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
              to={"about"}
            >
              <FormattedMessage id="nav_about" />
            </Link>
          </li>
          <li>
            <Link
              className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
              to={"service"}
            >
              <FormattedMessage id="nav_service" />
            </Link>
          </li>
          <li>
            <Link
              className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
              to={"opinion"}
            >
              <FormattedMessage id="nav_opinion" />
            </Link>
          </li>
          <li>
            <Link
              className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
              to={"pricing"}
            >
              <FormattedMessage id="nav_pricing" />
            </Link>
          </li>
          <li>
            <Link
              className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
              to={"our-team"}
            >
              <FormattedMessage id="nav_ourTeam" />
            </Link>
          </li>
          <li>
            <Link
              className="font-fair transition-all duration-200 ease-linear hover:text-blue-500 font-extrabold"
              to={"blog"}
            >
              <FormattedMessage id="nav_blog" />
            </Link>
          </li>
          <div>
            <Lang />
          </div>
        </ul>
      </div>
    </>
  );
}

export default Header;
