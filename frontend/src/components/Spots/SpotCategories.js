import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Home from "../../images/places/home.png";
import Apartment from "../../images/places/apartment.png";
import Barn from "../../images/places/barn.png";
import BnB from "../../images/places/bnb.png";
import Boat from "../../images/places/boat.png";
import Cabin from "../../images/places/cabin.png";
import Camper from "../../images/places/camper.png";
import Casa from "../../images/places/casa.png";
import Castle from "../../images/places/castle.png";
import Cave from "../../images/places/cave.png";
import Container from "../../images/places/container.jpg";
import Cycladic from "../../images/places/cycladic.jpg";
import Dome from "../../images/places/dome.jpg";
import Dammuso from "../../images/places/dammuso.jpg";
import EarthHome from "../../images/places/earth-home.jpg";
import Farm from "../../images/places/farm.jpg";
import Guesthouse from "../../images/places/guesthouse.png";
import Hotel from "../../images/places/hotel.png";
import Houseboat from "../../images/places/houseboat.png";
import Mansion from "../../images/places/mansion.png";
import Minsu from "../../images/places/minsu.jpg";
import Riad from "../../images/places/riad.jpg";
import Ryokan from "../../images/places/ryokan.jpg";
import ShepherdsHut from "../../images/places/shepherds-hut.jpg";
import Tent from "../../images/places/tent.png";
import TinyHome from "../../images/places/tiny-home.jpg";
import Tower from "../../images/places/tower.png";
import Treehouse from "../../images/places/treehouse.png";
import Trullo from "../../images/places/trullo.jpg";
import Windmill from "../../images/places/windmill.png";
import Yurt from "../../images/places/yurt.png";
import "./Spots.css";
import CategoryBtn from "./CategoryBtn";

const categories = [
  {
    category: "New",
    img: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
  },
  { category: "Houses", img: Home },
  { category: "Apartments", img: Apartment },
  { category: "Barns", img: Barn },
  { category: "Bed & breakfasts", img: BnB },
  { category: "Boats", img: Boat },
  { category: "Cabins", img: Cabin },
  { category: "Campers", img: Camper },
  { category: "Casa particulares", img: Casa },
  { category: "Castles", img: Castle },
  { category: "Caves", img: Cave },
  { category: "Containers", img: Container },
  { category: "Cycladic homes", img: Cycladic },
  { category: "Dammusos", img: Dammuso },
  { category: "Domes", img: Dome },
  { category: "Earth homes", img: EarthHome },
  { category: "Farms", img: Farm },
  { category: "Guesthouses", img: Guesthouse },
  { category: "Hotels", img: Hotel },
  { category: "Houseboats", img: Houseboat },
  { category: "Mansions", img: Mansion },
  { category: "Minsus", img: Minsu },
  { category: "Riads", img: Riad },
  { category: "Ryokans", img: Ryokan },
  { category: "Shepherd's huts", img: ShepherdsHut },
  { category: "Tents", img: Tent },
  { category: "Tiny homes", img: TinyHome },
  { category: "Towers", img: Tower },
  { category: "Treehouses", img: Treehouse },
  { category: "Trullos", img: Trullo },
  { category: "Windmills", img: Windmill },
  { category: "Yurts", img: Yurt },
];

export default function SpotCategories({ activeCategory, setActiveCategory }) {
  const [activeBtn, setActiveBtn] = useState();

  console.log(activeCategory);
  return (
    <div className="spot-categories">
      {categories.map((category) => (
        <CategoryBtn
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
          category={category.category}
          img={category.img}
        />
      ))}
    </div>
  );
}
