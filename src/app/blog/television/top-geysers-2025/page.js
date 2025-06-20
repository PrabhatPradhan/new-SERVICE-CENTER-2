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
            src="https://images.herzindagi.info/img-affiliate/2025/Apr/904976.webp"
            alt="Top 5 Geysers in India – 2025 Review"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Top 5 Geysers in India – 2025 Review
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Looking to buy a new geyser? Check out our 2025 list of the best-performing geysers available in India with energy efficiency ratings.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/52.jpg"
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
                Buying a geyser in 2025? We've reviewed the best models available in India considering energy efficiency, capacity, features, and price. Whether you need one for your home, PG, or office – there's an option for every need.
              </p>

              <h2 className="text-2xl font-semibold mt-6">1. AO Smith HSE-VAS-X-025</h2>
              <p>
                Capacity: 25L | BEE Rating: 5 Star | Features: Glass-coated heating element, temperature control knob, blue diamond glass lining.
              </p>

              <h2 className="text-2xl font-semibold mt-6">2. Bajaj New Shakti Neo 15L</h2>
              <p>
                Capacity: 15L | BEE Rating: 4 Star | Features: Titanium Armor Technology, swirl flow, PUF insulation, and compact design.
              </p>

              <h2 className="text-2xl font-semibold mt-6">3. Crompton Arno Neo 15L</h2>
              <p>
                Capacity: 15L | BEE Rating: 5 Star | Features: Advanced 3-level safety, anti-rust coating, energy-efficient design.
              </p>

              <h2 className="text-2xl font-semibold mt-6">4. Havells Adonia R 25L</h2>
              <p>
                Capacity: 25L | BEE Rating: 5 Star | Features: Color-changing LED indicator, Feroglas technology, digital display.
              </p>

              <h2 className="text-2xl font-semibold mt-6">5. Racold Andris Slim 20L</h2>
              <p>
                Capacity: 20L | BEE Rating: 4 Star | Features: Titanium enamel heating element, compact horizontal design, Italian aesthetics.
              </p>

              <p className="font-semibold">
                Final Tip: Always check your water hardness, space availability, and daily usage pattern before choosing a geyser. These top picks offer great balance between performance, reliability, and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
