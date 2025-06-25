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
            src="/Images/ac-blog-3.jpeg"
            alt="Best Energy-Efficient Air Conditioners 2025"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Best Energy-Efficient Air Conditioners 2025
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Explore top-rated energy-efficient ACs for 2025. We compare models,
              power usage, features, and give recommendations for different budgets
              and room sizes.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Ravi Sharma</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Choosing an energy-efficient air conditioner can drastically reduce
                your electricity bills and carbon footprint. In 2025, manufacturers
                have released a new wave of eco-friendly, power-saving models
                designed for modern homes.
              </p>
              <p>
                Let’s take a look at the top contenders this year across various
                price points and room sizes.
              </p>

              <p>
                <strong>1. LG Dual Inverter AC (1.5 Ton, 5 Star)</strong> <br />
                Ideal for medium-sized rooms, this AC uses dual inverter
                technology to ensure faster cooling and minimal energy use.
              </p>

              <p>
                <strong>2. Daikin FTKM Series (1.8 Ton, 5 Star)</strong> <br />
                Known for quiet operation and excellent dehumidification, Daikin’s
                new range performs well in both cooling and power-saving.
              </p>

              <p>
                <strong>3. Voltas Adjustable Inverter AC (1.4 Ton, 3/4.5 Star)</strong> <br />
                Great for smaller rooms and budget buyers, with flexible power
                consumption settings.
              </p>

              <p>
                <strong>Why Energy Rating Matters:</strong> Higher ISEER ratings
                (Indian Seasonal Energy Efficiency Ratio) indicate better
                performance per unit of power consumed. Always look for the
                latest BEE star labels before buying.
              </p>

              <p className="font-semibold">
                Final Tip: Match your AC size with room dimensions, and ensure
                regular maintenance to get the most out of your investment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
