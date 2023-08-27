import Slider from "react-slick";
import team2 from "../assets/img/team2.png";
import team1 from "../assets/img/team1.png";
import team3 from "../assets/img/team3.png";
import TeamCard from "./components/teamCard";
import {FaFacebookF, FaGooglePlus, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaVk, FaYoutube} from "react-icons/fa"

export default function DentistSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const list = [
    {
      cardImg: team1,
      name: "Vincent Cooper",
      profession: "Dentist",
      social1: <FaFacebookF />,
      social2: <FaTwitter />,
      social3: <FaInstagram />,
    },
    {
      cardImg: team2,
      name: "Danielle Bryant",
      profession: "Dentist",
      social1: <FaLinkedin />,
      social2: <FaYoutube />,
      social3: <FaInstagram />,
    },
    {
      cardImg: team3,
      name: "Danielle Bryant",
      profession: "Dentist",
      social1: <FaGooglePlus />,
      social2: <FaPinterest />,
      social3: <FaInstagram />,
    },
    {
      cardImg: team2,
      name: "Danielle Bryant",
      profession: "Dentist",
      social1: <FaFacebookF />,
      social2: <FaTwitter />,
      social3: <FaVk />,
    },
  ];

  return (
    <>
      <div className="">
      <Slider {...settings}>
              {list &&
                list.map((item, index) => {
                  return (
                    <TeamCard
                      cardImg={item.cardImg}
                      name={item.name}
                      profession={item.profession}
                      social1={item.social1}
                      social2={item.social2}
                      social3={item.social3}
                      key={index}
                    />
                  );
                })}
            </Slider>
      </div>
    </>
  );
}
