"use client";
import React, { useState } from "react";
import Footer from "../Componets/Footer/Footer";
import Navbar from "../Componets/Navbar/Navbar";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import {
  FaSnowflake,
  FaTv,
  FaWater,
  FaWind,
  FaTachometerAlt,
  FaFire,
  FaSink,
} from "react-icons/fa";
import { MdMicrowave } from "react-icons/md";
const CardItem = ({ Icon, label, title }) => (
  <Link href="/usefullink">
    <div className="cursor-pointer bg-white border border-gray-200 rounded-md p-6 flex flex-col justify-between shadow-md hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
      <div className="flex items-start gap-4">
        <Icon className="w-12 h-12 text-orange-500" />
        <div>
          <p className="text-xs text-orange-500 font-semibold uppercase">
            {label}
          </p>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
      </div>
      <span className="absolute bottom-0 right-0 w-4 h-4 bg-orange-500"></span>
    </div>
  </Link>
);
export default function Page() {
  const [activeTab, setActiveTab] = useState("Services");

  const services = [
    {
      Icon: FaSnowflake,
      label: "Cooling",
      title: "REFRIGERATOR",
      path: "/blog/refrigerator",
    },
    {
      Icon: FaTachometerAlt,
      label: "Washing",
      title: "WASHINGMACHINE",
      path: "/blog/washing-machine",
    },
    {
      Icon: FaWind,
      label: "Cooling",
      title: "AIR CONDITIONER",
      path: "/blog/air-conditioner",
    },
    {
      Icon: MdMicrowave,
      label: "Heating",
      title: "MICROWAVE OVEN",
      path: "/blog/microwave-oven",
    },
    {
      Icon: FaTv,
      label: "Entertainment",
      title: "TELEVISION",
      path: "/blog/television",
    },
    {
      Icon: FaFire,
      label: "Water Heating",
      title: "GEYSER",
      path: "/blog/geyser",
    },
    {
      Icon: FaWater,
      label: "Purifier",
      title: "RO WATERPURIFIER",
      path: "/blog/ro-water-purifier",
    },
    {
      Icon: FaSink,
      label: "Kitchen",
      title: "KITCHEN CHIMNEY",
      path: "/blog/kitchen-chimney",
    },
  ];

  const brands = [
    { Icon: FaTv, label: "Brand", title: "Samsung", path: "/brand/samsung" },
    { Icon: FaTv, label: "Brand", title: "LG", path: "/brand/lg" },
    {
      Icon: FaTv,
      label: "Brand",
      title: "Whirlpool",
      path: "/brand/whirlpool",
    },
    { Icon: FaTv, label: "Brand", title: "Haier", path: "/brand/haier" },
    { Icon: FaTv, label: "Brand", title: "Voltas", path: "/brand/voltas" },
  ];

  const localities = [
    {
      Icon: FaMapMarkerAlt,
      label: "Location",
      title: "Salt Lake",
      path: "/locality/salt-lake",
    },
    {
      Icon: FaMapMarkerAlt,
      label: "Location",
      title: "Behala",
      path: "/locality/behala",
    },
    {
      Icon: FaMapMarkerAlt,
      label: "Location",
      title: "Dumdum",
      path: "/locality/dumdum",
    },
  ];

  const getCurrentData = () => {
    if (activeTab === "Services") return services;
    if (activeTab === "Brands") return brands;
    if (activeTab === "Localities") return localities;
    return [];
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="bg-orange-200 px-4 py-6 mt-16 md:px-10 md:py-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        {/* Left Section */}
        <div className="space-y-4 w-full md:w-1/2 md:ml-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
            All Appliances Repair Service and Maintenance
          </h2>

          <div className="w-32 md:w-40">
            <Image
              src="https://images.unsplash.com/photo-1613755448170-4310858ddbd5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Kolkata City"
              width={200}
              height={100}
              className="rounded"
            />
          </div>

          <ul className="text-black text-base md:text-xl space-y-2">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-red-600" /> Refrigerator, Washing
              Machine
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-red-600" /> Air Conditioner,
              Microwave Oven
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-red-600" /> RO Water Purifier,
              Kitchen Chimney
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-red-600" /> Geyser, TV
            </li>
          </ul>

          <a
            href="tel:6390137479
"
            className="flex items-center gap-2 text-blue-800 font-bold text-lg md:text-xl"
          >
            <FaPhoneAlt /> 18001201514
          </a>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white w-full md:w-[32rem] rounded-xl p-4 md:p-6 border border-gray-400 shadow-md">
          <h3 className="text-center text-lg font-bold mb-4">SERVICE CENTER</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 border rounded outline-none"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full p-2 border rounded outline-none"
              onChange={handleChange}
            />
            <select
              name="service"
              className="w-full p-2 border rounded outline-none"
              onChange={handleChange}
            >
              <option value="">Select Your Services</option>
              <option value="Refrigerator">Refrigerator</option>
              <option value="Washing Machine">Washing Machine</option>
              <option value="TV">TV</option>
              <option value="Microwave">Microwave</option>
              <option value="Geyser">Geyser</option>
              <option value="Air Conditioner">Air Conditioner</option>
            </select>
            <textarea
              name="address"
              rows="3"
              placeholder="Your Full Address"
              className="w-full p-2 border rounded outline-none"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-orange-600 text-white rounded hover:bg-orange-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mr-10 ml-10  ">
      
        <div className="bg-white   p-2 border border-gray-200">
          {/* Image */}
          
          <div className="w-full flex justify-center mb-6">
            <Image
              src="https://plus.unsplash.com/premium_photo-1749885795369-c8a013958e6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D" // replace with correct image
              alt="Appliances Image"
              width={1400}
              height={10}
              className="rounded h-96"
            />
          </div>
          {/* Text Content */}
          <div className="text-gray-800 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Newtack Service platform is the authorized appliance repair
              service for everyday products in Kolkata.
            </h2>

            <p>
              We have accomplished hundreds of appliance repairs on{" "}
              <strong>
                Air Conditioners, Microwave Oven, Refrigerator Washing Machine
              </strong>{" "}
              and more.
            </p>

            <p>
              Newtack Service Platform is one of the best and authorized
              appliance repair service. We repair most of the major appliance
              brands like{" "}
              <strong>
                Onida, Whirlpool, BPL, Samsung, LG, Bajaj, Panasonic,
                Electrolux, Videocon, IFB, king star models
              </strong>
              , no matter{" "}
              <strong>
                Onida, Whirlpool, BPL, Samsung, LG, Bajaj, Panasonic,
                Electrolux, Videocon, IFB, king star
              </strong>{" "}
              models, no matter where you bought them. Our goal is to provide
              quality repair to help you extend the useful life of your domestic
              appliances.
            </p>

            <p>
              The main motive behind Newtack Service Platform is to address
              these very concerns of customer and act as a solo window solution
              provider in regard to client's decisions on the choice of
              technology, size, installation, maintenance, repair, exchange
              recycle electrical, Appliances, and electronic devices.
            </p>

            <p>
              Our technicians are appliances repair experts who you can trust
              for repair on top appliance brand.
            </p>
          </div>
        </div>
        <div className="bg-white  p-2 border border-gray-200">
          {/* Image */}
          <div className="w-full flex justify-center mb-6">
            <Image
              src="https://images.unsplash.com/photo-1601993198415-19d86ae28424?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with correct image
              alt="Appliances Image"
              width={1400}
              height={10}
              className="rounded h-96"
            />
          </div>

          {/* Text Content */}
          <div className="text-gray-800 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Newtack Service platform is the authorized appliance repair
              service for everyday products in Kolkata.
            </h2>

            <p>
              We have accomplished hundreds of appliance repairs on{" "}
              <strong>
                Air Conditioners, Microwave Oven, Refrigerator Washing Machine
              </strong>{" "}
              and more.
            </p>

            <p>
              Newtack Service Platform is one of the best and authorized
              appliance repair service. We repair most of the major appliance
              brands like{" "}
              <strong>
                Onida, Whirlpool, BPL, Samsung, LG, Bajaj, Panasonic,
                Electrolux, Videocon, IFB, king star models
              </strong>
              , no matter{" "}
              <strong>
                Onida, Whirlpool, BPL, Samsung, LG, Bajaj, Panasonic,
                Electrolux, Videocon, IFB, king star
              </strong>{" "}
              models, no matter where you bought them. Our goal is to provide
              quality repair to help you extend the useful life of your domestic
              appliances.
            </p>

            <p>
              The main motive behind Newtack Service Platform is to address
              these very concerns of customer and act as a solo window solution
              provider in regard to client's decisions on the choice of
              technology, size, installation, maintenance, repair, exchange
              recycle electrical, Appliances, and electronic devices.
            </p>

            <p>
              Our technicians are appliances repair experts who you can trust
              for repair on top appliance brand.
            </p>
          </div>
        </div>
        <section className="max-w-5xl mx-auto px-6 py-12">
      <div>
      <h2 className="text-3xl font-semibold text-center mb-10">
        Frequently Asked Questions
      </h2>
      </div>
      <div>
       <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Refrigerator repair feedback
          </h3>
       </div>

      <div className="flex flex-col md:flex-row  ">
        {/* Left side */}
       
        <div className="flex-1 text-center md:text-left">
          
          <p className="text-4xl font-bold text-gray-900">4.2</p>

          <div className="flex justify-center md:justify-start gap-1 my-2">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStarHalfAlt className="text-orange-500" />
          </div>

          <p className="text-sm text-gray-600">customer review 560</p>
        </div>

        {/* Right side bars */}
        <div className="flex-1 space-y-3 text-sm">
          {/* 5 Star */}
          <div className="flex items-center gap-3">
            <span className="w-5">5</span>
            <FaStar className="text-yellow-400 text-xs" />
            <div className="flex-1 h-3 bg-gray-200 rounded">
              <div className="h-full bg-yellow-400" style={{ width: "60%" }}></div>
            </div>
            <span className="w-10 text-right text-gray-700">60%</span>
          </div>

          {/* 4 Star */}
          <div className="flex items-center gap-3">
            <span className="w-5">4</span>
            <FaStar className="text-yellow-400 text-xs" />
            <div className="flex-1 h-3 bg-gray-200 rounded">
              <div className="h-full bg-yellow-400" style={{ width: "20%" }}></div>
            </div>
            <span className="w-10 text-right text-gray-700">20%</span>
          </div>

          {/* 3 Star */}
          <div className="flex items-center gap-3">
            <span className="w-5">3</span>
            <FaStar className="text-yellow-400 text-xs" />
            <div className="flex-1 h-3 bg-gray-200 rounded">
              <div className="h-full bg-yellow-400" style={{ width: "11%" }}></div>
            </div>
            <span className="w-10 text-right text-gray-700">11%</span>
          </div>

          {/* 2 Star */}
          <div className="flex items-center gap-3">
            <span className="w-5">2</span>
            <FaStar className="text-yellow-400 text-xs" />
            <div className="flex-1 h-3 bg-gray-200 rounded">
              <div className="h-full bg-yellow-400" style={{ width: "5%" }}></div>
            </div>
            <span className="w-10 text-right text-gray-700">5%</span>
          </div>

          {/* 1 Star */}
          <div className="flex items-center gap-3">
            <span className="w-5">1</span>
            <FaStar className="text-yellow-400 text-xs" />
            <div className="flex-1 h-3 bg-gray-200 rounded">
              <div className="h-full bg-yellow-400" style={{ width: "4%" }}></div>
            </div>
            <span className="w-10 text-right text-gray-700">4%</span>
          </div>
        </div>
      </div>
    </section>
        <section className="bg-gray-100 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold underline underline-offset-4 decoration-black">
              Popular Links
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex justify-center space-x-4 mb-6">
            {["Services", "Brands", "Localities"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-semibold border-b-2 ${
                  activeTab === tab
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-600 hover:text-orange-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
            {getCurrentData().map((card, index) => (
              <CardItem
                key={index}
                Icon={card.Icon}
                label={card.label}
                title={card.title}
                path={card.path}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
