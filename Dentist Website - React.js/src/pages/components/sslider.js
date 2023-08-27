import React from "react";
import Slider from "react-slick";
import CardSlider from "../repeatable/CardSlider";
import profileImg from "../../assets/img/profile.png";

export default function DocSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const list = [
    {
      profileImg: profileImg,
      description:
        "“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”",
      name: "Dose Robert",
      profession: "Doctor",
    },
    {
      profileImg: profileImg,
      description:
        "“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”",
      name: "Dose Robert",
      profession: "Doctor",
    },
    {
      profileImg: profileImg,
      description:
        "“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”",
      name: "Dose Robert",
      profession: "Doctor",
    },
    {
      profileImg: profileImg,
      description:
        "“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”",
      name: "Dose Robert",
      profession: "Doctor",
    },
    {
      profileImg: profileImg,
      description:
        "“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”",
      name: "Dose Robert",
      profession: "Doctor",
    },
    {
      profileImg: profileImg,
      description:
        "“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”",
      name: "Dose Robert",
      profession: "Doctor",
    },
  ];

  return (
    <>
      <div className="mt-16">
        <Slider {...settings}>
          {list &&
            list.map((item, index) => {
              return (
                <CardSlider
                  profileImg={item.profileImg}
                  description={item.description}
                  name={item.name}
                  profession={item.profession}
                />
              );
            })}
        </Slider>
      </div>
    </>
  );
}
