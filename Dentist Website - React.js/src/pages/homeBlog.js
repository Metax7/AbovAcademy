import React from "react";
import Title from "./repeatable/title";
import BlogCard from "./repeatable/BlogCard";
import listNews from "./components/listNews";

export default function HomeBlog() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-20">
        <Title title="OUR BLOG" bigTitle="Latest Blog & News" />

        <div className="flex max-md:flex-col md:space-x-6 mt-16  max-md:space-y-8 items-center justify-center px-4 sm:px-16 xl:px-0">
          {listNews &&
            listNews.map((item, index) => {
              return (
                <BlogCard
                  title={item.title}
                  image={item.image}
                  text={item.text}
                  key={index}
                  date={item.date}
                  href={item.href}
                  category={item.category}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
