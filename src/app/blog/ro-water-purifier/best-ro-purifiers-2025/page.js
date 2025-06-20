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
            src="https://www.inventiva.co.in/wp-content/uploads/2024/12/Top-10-Best-Water-Purifiers-in-India-2025-780x470.webp"
            alt="Top 5 RO Water Purifiers in 2025"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Top 5 RO Water Purifiers in 2025 – Expert Review
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We reviewed over 20 models to bring you the top 5 RO purifiers you can buy in 2025. Compare their features, price, and purification quality.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Ravi Deshmukh</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Choosing the best RO water purifier can be tricky with so many brands and features. We’ve done the hard work for you by testing over 20 models for performance, maintenance, water quality, and cost.
              </p>

              <h2 className="text-2xl font-semibold mt-6">Here Are Our Top Picks for 2025:</h2>

              <ol className="list-decimal ml-6 space-y-3">
                <li>
                  <strong>Kent Grand Plus</strong> – Known for its strong purification and mineral RO technology.
                </li>
                <li>
                  <strong>Aquaguard Aura UV+UF</strong> – Sleek design with active copper and UV e-boiling.
                </li>
                <li>
                  <strong>HUL Pureit Copper+ RO</strong> – Adds copper to purified water for additional health benefits.
                </li>
                <li>
                  <strong>Livpure Zinger Copper</strong> – Affordable with 7-stage purification and smart indicators.
                </li>
                <li>
                  <strong>AO Smith Z9 Green RO</strong> – Hot water dispensing and energy-efficient design.
                </li>
              </ol>

              <h2 className="text-2xl font-semibold mt-6">Things We Considered</h2>
              <ul className="list-disc ml-6">
                <li>Water purification quality (TDS levels)</li>
                <li>Filter change alerts & maintenance</li>
                <li>Electricity usage and water wastage</li>
                <li>Price vs features balance</li>
              </ul>

              <p className="font-semibold">
                Conclusion: Whether you're looking for advanced features or budget options, these purifiers meet different needs. Be sure to consider your water source and daily usage before choosing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
