"use client";
import Footer from "../../../Componets/Footer/Footer";
import Navbar from "../../../Componets/Navbar/Navbar";
import Image from "next/image";

export default function BlogDetailPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12 px-6 mt-12 lg:px-24">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
          <img
            src="https://www.livemint.com/lm-img/img/2024/12/02/1600x900/water_heater_1733131125491_1733131136054.jpg"
            alt="Instant vs. Storage Geyser"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Instant vs. Storage Geyser – Which One Should You Buy?
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Choosing between instant and storage geysers? Here's a detailed comparison of cost, efficiency, and best use cases to help you decide.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Ritika Jain</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                When choosing a water heater, one of the most common dilemmas is between an instant geyser and a storage geyser. Each comes with its own pros and cons. Your decision should depend on your household needs, budget, and usage frequency.
              </p>

              <h2 className="text-2xl font-semibold mt-6">1. Heating Time</h2>
              <p>
                Instant geysers heat water quickly as it flows through the unit, making them ideal for small families or single users. Storage geysers take a few minutes to heat a full tank but provide a steady supply of hot water once ready.
              </p>

              <h2 className="text-2xl font-semibold mt-6">2. Capacity</h2>
              <p>
                Instant geysers typically offer 1-3 liters of capacity, whereas storage geysers can go up to 25 liters or more — perfect for large families or high-demand bathrooms.
              </p>

              <h2 className="text-2xl font-semibold mt-6">3. Space Requirements</h2>
              <p>
                Instant geysers are compact and fit well in small bathrooms or kitchens. Storage geysers need more wall space due to their tank size.
              </p>

              <h2 className="text-2xl font-semibold mt-6">4. Energy Efficiency</h2>
              <p>
                Instant geysers are generally more energy-efficient as they heat water only when needed. However, modern storage geysers now include insulation and timers to reduce energy consumption.
              </p>

              <h2 className="text-2xl font-semibold mt-6">5. Cost</h2>
              <p>
                Instant geysers are usually more affordable upfront. Storage geysers cost more but may offer better long-term performance for households with higher usage.
              </p>

              <p className="font-semibold">
                Conclusion: If you have limited space and low usage, go for an instant geyser. For larger families or multiple bathroom use, a storage geyser is a smarter investment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
