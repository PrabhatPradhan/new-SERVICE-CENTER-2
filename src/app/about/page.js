"use client";
import React from "react";
import Footer from "../Componets/Footer/Footer";
import Navbar from "../Componets/Navbar/Navbar";
import EnquiryForm from "../Componets/EnquiryForm/EnquiryForm";
import StatsOfNumbers from "../Componets/StatsOfNumbers/StatsOfNumbers";
import "../about/about.css";
import Link from "next/link";
import Image from "next/image";
import InfiniteSlider from '../Componets/InfiniteSlider/InfiniteSlider'
import ServiceCenterCard from "../Componets/ServiceCenterCard/ServiceCenterCard";

export default function Page() {
  return (
    <>
      <div className=" overflow-hidden">
        <Navbar />
        <ServiceCenterCard />
        <EnquiryForm />
        <section
          style={{
            backgroundImage: `url('Images/about-top.avif')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
        >
          <div>
            <h1 className="text-4xl mt-10 md:text-5xl font-bold text-[#0f172a] mb-2">
              {" "}
              About
            </h1>
            <p className="text-[#666] text-base">
              <Link href="/">Home</Link> / About
            </p>
          </div>
        </section>

        <section className="px-4 py-10 md:py-16 lg:py-20 bg-amber-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div className="animate-fadeInUp">
              {/* Header inside left side */}
              <div className="mb-6">
                <h3 className="text-orange-600 font-semibold text-xl">
                  OUR INTRODUCTION
                </h3>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
                  Welcome To Cooling & Heating Service Center
                </h2>
              </div>

              {/* Paragraph */}
              <p className="text-gray-600 mb-4">
                Long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using it is that it has a more-or-less normal distribution.
              </p>

              {/* Stats */}
              <div className="flex   sm:flex-row gap-6 mt-6">
                {/* Stat 1 */}
                <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                  <Image
                    src="https://cdn-icons-png.freepik.com/256/9540/9540741.png?semt=ais_hybrid"
                    alt="Worker Icon"
                    width={40}
                    height={40}
                    className="transition-transform duration-300 hover:rotate-6"
                  />
                  <div>
                    <p className="text-2xl font-bold text-green-800">250+</p>
                    <p className="text-gray-700 text-sm">Services we provide</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/9727/9727444.png"
                    alt="Experience Icon"
                    width={40}
                    height={40}
                    className="transition-transform duration-300 hover:rotate-6"
                  />
                  <div>
                    <p className="text-2xl font-bold text-green-800">
                      15+ years
                    </p>
                    <p className="text-gray-700 text-sm">of Experience</p>
                  </div>
                </div>
              </div>

              {/* Bottom Paragraph */}
              <p className="text-gray-600 mt-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="relative animate-fadeInUp">
              <div className="relative z-10 rounded-md shadow-lg overflow-hidden" style={{ width: 600, height: 400 }}>
                <Image
                  src="/Images/about-girl-img.jpg"
                  alt="AC Repair"
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute top-4 left-4 w-full h-full border-[20px] border-blue-700 z-0 rounded-md"></div>

              {/* Play Button (Non-functional) */}
              <button className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-orange-500 text-white w-10 h-10 rounded-full shadow-lg z-20 animate-pulse" />
            </div>
          </div>

          {/* Animation styles */}
          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeInUp {
              animation: fadeInUp 0.8s ease-out forwards;
            }
          `}</style>
        </section>

        <section className="relative bg-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://img.freepik.com/free-photo/electrician-working-electric-car_53876-124171.jpg"
              alt="background"
              width={1200}
              height={675}
              className="object-cover opacity-30 w-full h-full"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">
            {/* Left Text Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Need An Air Conditioner <br /> Technician
              </h1>
              <p className="mt-4 text-lg opacity-90">
                Kula kacuse every reson credit to develop level works.
              </p>

              {/* Red Line Decoration */}
              <div className="mt-6 w-48 h-1 bg-orange-600 relative">
                <div className="w-4 h-4 bg-white rounded-full absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
              </div>

              {/* Phone Row */}
              <div className="mt-6 flex items-center gap-4">
                <a href="tel:+6845550102">
                  <div className="text-3xl cursor-pointer">📞</div>
                </a>
                <div>
                  <p className="text-sm">Call anytime</p>
                  <p className="text-xl font-semibold">+000-987458741</p>
                </div>
              </div>
            </div>

            {/* Right Play Button */}
            <div className="relative mt-12 lg:mt-0 flex flex-col items-center justify-center text-center">
              {/* Play Button */}
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center relative z-10">
                <a
                  href="https://www.youtube.com/watch?v=sQ22pm-xvrE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-orange-600 text-3xl">▶</div>
                </a>
              </div>

              {/* Pulsing Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="absolute w-32 h-32 border-2 border-white rounded-full animate-ping opacity-20"></span>
                <span className="absolute w-40 h-40 border-2 border-white rounded-full animate-ping delay-200 opacity-10"></span>
              </div>

              {/* Caption Text */}
              <p className="mt-4 text-sm tracking-widest uppercase text-white opacity-70">
                Watch How We Work
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white mt-10">
          <div className=" ">
            {/* Section Header */}
            <div className="text-center mb-12">
              <p className="text-orange-600 font-semibold text-sm sm:text-base">
                WORKING PROCESS
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
                Solve Your Issues In 3 Easy Steps
              </h2>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2  gap-8  w-full">
              {/* Left side Steps */}
              <div id="cards-3-steps" className="space-y-10 mt-9 ml-16   px-4 sm:px-6 lg:px-24">
                {/* Step 1 */}
                <div className="flex flex-col sm:flex-row sm:items-center   gap-4">
                  <div className="border p-4 shadow-sm flex-1 max-w-80 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
                    <h4 className="text-base sm:text-lg font-semibold">
                      Make an Appointment
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores harum velit doloremque molestias.
                    </p>
                  </div>
                  <span className="text-orange-600 text-4xl sm:text-5xl font-bold">
                    1<sup>st</sup>
                  </span>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="text-orange-600 text-4xl sm:text-5xl font-bold order-1 sm:order-none">
                    2<sup>nd</sup>
                  </span>
                  <div className="border p-4 shadow-sm flex-1 max-w-80 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
                    <h4 className="text-base sm:text-lg font-semibold">
                      Confirm for Services
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores harum velit doloremque molestias.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="border p-4 shadow-sm flex-1 max-w-80 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
                    <h4 className="text-base sm:text-lg font-semibold">
                      Solve your Problem
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores harum velit doloremque molestias.
                    </p>
                  </div>
                  <span className="text-orange-600 text-4xl sm:text-5xl font-bold">
                    3<sup>rd</sup>
                  </span>
                </div>
              </div>

              {/* Right Side Image - Fully Right-Aligned */}
              <div className="relative flex right-0 justify-end">
                <img
                  src="Images/about-boy.png"
                  alt="Technician"
                  className="w-[35rem]  ml-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <StatsOfNumbers />
        <InfiniteSlider />
        <Footer />
      </div>
    </>
  );
}
