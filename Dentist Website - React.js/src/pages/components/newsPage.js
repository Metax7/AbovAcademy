import React from "react";
import { Link, useParams } from "react-router-dom";
import listNews from "./listNews";
import Title from "../repeatable/title";

export default function NewsPage() {
  const { href } = useParams();
  const { category } = useParams();

  return (
    <div className="max-w-screen-xl py-10 max-sm:px-6 sm:px-16 xl:px-0 mx-auto font-pop space-y-20">
      <div className="">
        {listNews &&
          listNews.map((item, index) => {
            if (item.href === href) {
              return (
                <div className="space-y-5" key={index}>
                  <div>
                    <img
                      className="rounded-lg w-full lg:h-[500px] object-cover"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="py-2 font-bold text-main2-color text-3xl">
                    {item.title}
                  </div>
                  <div className="space-y-5">
                    {item.description &&
                      item.description.map((x, y) => {
                        return (
                          <p className="text-xl text-slate-500 font-normal">
                            {x.text}
                          </p>
                        );
                      })}
                  </div>
                  <div className="flex max-sm:flex-col justify-center max-md:flex-wrap max-sm:space-y-5 md:space-x-3">
                    {item.images &&
                      item.images.map((a, b) => {
                        return (
                          <img
                            className="sm:w-1/2 sm:mb-4 md:w-1/4 shadow-xl rounded-lg object-cover"
                            src={a}
                            alt=""
                          />
                        );
                      })}
                  </div>
                </div>
              );
            }
          })}
      </div>
      
      <div className="space-y-10">
        <Title bigTitle="Recommended" />
        <div className="max-w-screen-xl mx-auto flex max-md:flex-col max-md:space-y-5 lg:w-1/2 md:space-x-5">
          {listNews &&
            listNews.map((item, index) => {
              if (item.category === category && item.href !== href) {
                return (
                  <div key={index} className="relative  group overflow-hidden">
                    <Link to={`/news-page/${item.href}/${item.category}`}>
                      <img src={item.image} className="shadow-2xl group-hover:scale-110 duration-200 transition-all ease-linear" alt="" />
                      <div className="absolute bg-main2-color text-white py-1 px-2 bottom-5 left-5 rounded-md">
                      {item.title}
                    </div>
                    </Link>
                    
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}
