import React from "react";
import Footer from "../Componets/Footer/Footer";
import Navbar from "../Componets/Navbar/Navbar";
import { FaSnowflake } from "react-icons/fa";
import Link from "next/link";
 

export default function Page() {
  const links = [
    "Bosch Fridge Service Center Kolkata",
    "BPL Fridge Service Center Kolkata",
    "Croma Fridge Service Center Kolkata",
    "Electrolux Fridge Service Center Kolkata",
    "Godrej Fridge Service Center Kolkata",
    "Haier Fridge Service Center Kolkata",
  ];

  return (
    <div>
      <Navbar />

      <section className="px-6 mt-12 py-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Quick Links</h2>
      <p className="text-2xl font-semibold text-gray-700 mb-6">
        Also available in
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <Link
            key={link} // ✅ Use the link string as key if unique
            href="/home-appliance-service-kolkata" // You can make this dynamic if needed
          >
            <div className="bg-white p-4 rounded-lg border shadow hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-xl text-orange-500">
                  <FaSnowflake />
                </div>
                <h3 className="text-base font-semibold text-gray-800">
                  {link}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>

      <Footer />
    </div>
  );
}
