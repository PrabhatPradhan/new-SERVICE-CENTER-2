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
  <div className="cursor-pointer bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between shadow-md hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative h-full">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 text-orange-500 text-3xl">
        <Icon className="w-full h-full" />
      </div>
      <div>
        <p className="text-[10px] sm:text-xs text-orange-500 font-semibold uppercase">{label}</p>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
      </div>
    </div>

    <hr className="my-4 border-gray-200" />

    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-6 leading-relaxed h-[72px] overflow-hidden">
      {description}
    </p>

    <button className="text-sm font-semibold text-gray-900 flex items-center gap-2">
      Read more <FaPlus className="text-xs" />
    </button>

    <span className="absolute bottom-0 right-0 w-4 h-4 bg-orange-500 rounded-tr-xl"></span>
  </div>
);

// ✅ Main Card Component
export default function Card() {
  const cardData = [
    {
      Icon: FaSnowflake,
      label: "Feature One",
      title: "REFRIGERATOR",
      description:
        "Quick and reliable repair for your refrigerator, including gas refill, compressor issue, and cooling problems.",
      path: "/services/refrigerator",
    },
    {
      Icon: FaTachometerAlt,
      label: "Feature Two",
      title: "WASHING MACHINE",
      description:
        "Professional repair for all types of washing machines: front load, top load, and semi-automatic.",
      path: "/services/washing-machine",
    },
    {
      Icon: FaWind,
      label: "Feature Three",
      title: "AIR CONDITIONER",
      description:
        "AC installation, servicing, and gas refill solutions at the best price with quick turnaround.",
      path: "/services/air-conditioner",
    },
    {
      Icon: MdMicrowave,
      label: "Feature Four",
      title: "MICROWAVE OVEN",
      description:
        "Fix heating issues, glass rotation problems, or any internal faults in your microwave oven.",
      path: "/services/microwave-oven",
    },
    {
      Icon: FaTv,
      label: "Feature Five",
      title: "TELEVISION",
      description:
        "Screen issues, sound problems, or motherboard repairs for your LED or LCD TVs.",
      path: "/services/television",
    },
    {
      Icon: FaFire,
      label: "Feature Six",
      title: "GEYSER",
      description:
        "Electric and gas geyser servicing, including heating coil replacement and leakage fix.",
      path: "/services/geyser",
    },
    {
      Icon: FaWater,
      label: "Feature Seven",
      title: "RO WATER PURIFIER",
      description:
        "Filter change, water flow issues, and complete RO system servicing at home.",
      path: "/services/ro-water-purifier",
    },
    {
      Icon: FaSink,
      label: "Feature Eight",
      title: "KITCHEN CHIMNEY",
      description:
        "Chimney cleaning, suction motor repair, and installation service by experts.",
      path: "/services/kitchen-chimney",
    },
  ];

  return (
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
  );
}
