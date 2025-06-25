"use client";
import React from "react";
import Link from "next/link";
import {
  FaPlus,
  FaSnowflake,
  FaTv,
  FaWater,
  FaWind,
  FaTachometerAlt,
  FaFire,
  FaSink,
  
} from "react-icons/fa";
import { MdMicrowave } from "react-icons/md";

// ✅ Card Item Component
const CardItem = ({ Icon, label, title, description }) => (
  <div className="cursor-pointer bg-white border border-gray-200 rounded-md p-6 flex flex-col justify-between shadow-md hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative h-[300px] overflow-hidden">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 text-orange-500 text-3xl">
        <Icon className="w-full h-full" />
      </div>
      <div>
        <p className="text-xs text-orange-500 font-semibold uppercase">{label}</p>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
    <hr className="my-4 border-gray-200" />
    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
      {description}
    </p>
    <button className="text-sm font-semibold text-gray-900 flex items-center gap-2">
      Readmore <FaPlus className="text-xs" />
    </button>
    <span className="absolute bottom-0 right-0 w-4 h-4 bg-orange-500"></span>
  </div>
);

// ✅ Main Component
export default function Card() {
  const cardData = [
    {
      Icon: FaSnowflake,
      label: "Feature One",
      title: "REFRIGERATOR",
      description:
        "Quick and reliable repair for your mobile devices with quality assurance and expert technicians.",
      path: "/services/refrigerator",
    },
    {
      Icon: FaTachometerAlt,
      label: "Feature Two",
      title: "WASHING MACHINE",
      description:
        "Professional washing machine repair services at your doorstep with top-notch care and support.",
      path: "/services/washing-machine",
    },
    {
      Icon: FaWind,
      label: "Feature Three",
      title: "AIR CONDITIONER",
      description:
        "Expert AC diagnostics, gas refilling, and cooling maintenance for all brands and models.",
      path: "/services/air-conditioner",
    },
    {
      Icon: MdMicrowave,
      label: "Feature Four",
      title: "MICROWAVE OVEN",
      description:
        "Fast microwave repairs, including magnetron and heating issues, with doorstep service.",
      path: "/services/microwave-oven",
    },
    {
      Icon: FaTv,
      label: "Feature One",
      title: "TELEVISION",
      description:
        "Quick and reliable TV repair for your LED, LCD, and Smart TVs across all major brands.",
      path: "/services/television",
    },
    {
      Icon: FaFire,
      label: "Feature Two",
      title: "GEYSER",
      description:
        "Instant geyser repair and installation with energy-saving tips and expert assistance.",
      path: "/services/geyser",
    },
    {
      Icon: FaWater,
      label: "Feature Three",
      title: "RO WATER PURIFIER",
      description:
        "Water purifier servicing, filter change, and RO/UV system maintenance.",
      path: "/services/ro-water-purifier",
    },
    {
      Icon: FaSink,
      label: "Feature Four",
      title: "KITCHEN CHIMNEY",
      description:
        "Chimney repair, deep cleaning, motor fixing, and installation for all kitchen types.",
      path: "/services/kitchen-chimney",
    },
  ];

  return (
    <>
      {/* Cards Grid */}
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 mb-6 md:mb-4 lg:mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {cardData.map((card, i) => (
            <Link href={card.path} key={i}>
              <CardItem
                Icon={card.Icon}
                label={card.label}
                title={card.title}
                description={card.description}
              />
            </Link>
          ))}
        </div>
      </div>

     
       
    </>
  );
}
