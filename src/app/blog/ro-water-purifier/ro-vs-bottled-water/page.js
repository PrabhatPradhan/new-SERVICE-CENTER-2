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
            src="https://www.freepurity.com/cdn/shop/articles/Freepurity-reverse_osmosis_system-bottled-water_1024x1024.jpg?v=1500446679"
            alt="RO Water vs. Bottled Water"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              RO Water vs. Bottled Water – Which is Better?
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Learn the pros and cons of RO filtered water compared to bottled water in terms of health, cost, and environmental impact.
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
                <p className="font-medium text-gray-700">Priya Deshmukh</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                When it comes to safe drinking water, many people are torn between using an RO purifier or relying on bottled water. Each has its advantages and drawbacks.
              </p>

              <h2 className="text-2xl font-semibold mt-6">Health Benefits</h2>
              <p>
                RO water removes harmful contaminants like heavy metals and bacteria, making it extremely safe. Bottled water is also filtered, but quality varies depending on the brand.
              </p>

              <h2 className="text-2xl font-semibold mt-6">Cost Comparison</h2>
              <p>
                Bottled water may seem affordable short-term, but it’s significantly costlier over time. An RO purifier is a one-time investment with minimal maintenance cost, saving money in the long run.
              </p>

              <h2 className="text-2xl font-semibold mt-6">Environmental Impact</h2>
              <p>
                RO systems produce wastewater, but bottled water creates massive plastic waste. Opting for RO water drastically reduces your carbon footprint and plastic consumption.
              </p>

              <h2 className="text-2xl font-semibold mt-6">Convenience</h2>
              <p>
                Bottled water is portable and ready to use, while RO purifiers offer on-demand clean water at home, which is ideal for families.
              </p>

              <p className="font-semibold">
                Verdict: For long-term health, savings, and sustainability, RO water is generally the better choice—especially if you ensure regular maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
