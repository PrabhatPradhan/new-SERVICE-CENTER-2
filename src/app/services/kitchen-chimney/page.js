"use client";

import React, { useState } from "react";
import Image from "next/image";
import productImage from "../../../../public/Images/kitchen-chimney.jpg"
export default function Page() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const companies = ["NOKIA", "ASUS", "CASIO", "DELL", "Panasonic", "VAIO", "acer"];
  const phoneNumber = "+6390137479";


    
  return (
    <>
      <br />
      <br />

      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-orange-500 p-6 rounded-md w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Book Service</h2>
            <form className="space-y-4 bg-orange-500">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full px-3 py-2 border rounded"
              />
              <textarea
                placeholder="Issue Description"
                className="w-full px-3 py-2 border rounded"
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCloseBooking}
                  className="px-4 py-2 border rounded bg-white hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2  rounded  bg-white text-black  hover:bg-gray-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="px-4 py-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:max-w-sm">
            <h2 className="text-2xl font-bold text-gray-800">Featured Categories</h2>
            <p className="text-gray-600">
              Choose your necessary products from this feature categories.
            </p>
          </div>

          <div className="w-full md:w-[48rem] overflow-hidden bg-white py-4">
            <div className="flex gap-16 animate-scroll whitespace-nowrap text-gray-400 text-lg font-semibold">
              {companies.concat(companies).map((company, index) => (
                <span key={index} className="min-w-fit hover:text-black transition">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 py-6 p-8 gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="border p-4 rounded shadow-md">
            <div className="flex">
              <div>
                <h3 className="font-bold text-lg">Kitchen Chimney Repair</h3>
                <p className="text-sm text-gray-600">
                  Double Door Refrigerator Checkup
                </p>
                <p className="mt-2 text-red-600 line-through">₹ 349</p>
                <p className="text-orange-500 text-xl font-bold">₹ 249/-</p>
                <p className="text-xs mt-2 text-gray-500">
                  Every Spear Parts Repair 3 Month Warranty,
                  <br />
                  Technician Visiting Charge Free 1 Year With AMC,
                  <br />
                  15% Discount on Every Spear Parts With AMC
                </p>
              </div>
              <div>
                <Image
                  src={productImage}
                  alt="Service Center"
                  width={200}
                  height={400}
                  className="rounded"
                />
              </div>
            </div>
            <div className="flex mt-12 justify-between">
              <button
                onClick={handleOpenBooking}
                className="mt-3 px-4 py-1 text-white bg-orange-500 hover:bg-orange-700 rounded"
              >
                Book Now
              </button>
              <a
                href={`tel:${phoneNumber}`}
                className="mt-3 px-4 py-1 text-white bg-orange-500 hover:bg-orange-700 rounded text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={productImage}
              alt="Product Image"
              width={400}
              height={400}
              className="h-auto rounded shadow"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold">
              BEDZY Premium Cotton Blend 180 TC Flat Double Bedsheets with 2
              Pillow Covers | Double Bed Breathable BEDZY | Wrinklefree | 90 x
              100 | 228x254 cm | Multicolour
            </h1>
            <div className="mt-4 text-2xl font-bold text-green-700">
              ₹349.00{" "}
              <span className="text-sm line-through text-gray-500 ml-2">₹999</span>
              <span className="text-orange-500 text-sm ml-2">65% off</span>
            </div>

            <div className="mt-4">
              <label className="font-semibold text-sm">Check Delivery</label>
            </div>

            <div className="mt-6 border p-4 rounded">
              <h2 className="text-md font-semibold mb-2">Description</h2>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetu g ectetu rus. Nulla
                feugiat lectus a nisl fermentum, nec cursus erat vulputate.
                Donec pulvinar, sapien sed imperdiet gravida, urna tortor
                pulvinar neque, ut suscipit augue magna eget magna. Vestibulum
                tincidunt, elit id bibendum hendrerit, turpis odio feugiat
                nulla, in congue erat magna in augue.
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              <button
                onClick={handleOpenBooking}
                className="flex-1 border border-orange-500 text-orange-500 px-4 py-3 rounded hover:bg-orange-50"
              >
                Book Now
              </button>
              <a
                href={`tel:${phoneNumber}`}
                className="flex-1 bg-orange-500 text-white px-4 py-3 rounded hover:bg-orange-700 text-center"
              >
                Call now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
