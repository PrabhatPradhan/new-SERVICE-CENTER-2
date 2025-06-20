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
            src="https://roservice.center/wp-content/uploads/2024/10/Replace-RO-Filters.jpg"
            alt="When to Change RO Filters"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              When to Change RO Filters – Signs & Tips
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Not sure when to replace your RO filters? Here are common signs of filter degradation and recommended schedules for each stage.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Ankit Sharma</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                RO purifiers go through multiple stages of filtration, and each filter has a different life span. If you miss the right time to change them, the water quality drops and the system can get damaged.
              </p>

              <h2 className="text-2xl font-semibold mt-6">Signs You Need to Replace Filters</h2>
              <ul className="list-disc ml-6">
                <li>Drop in water flow or pressure</li>
                <li>Unpleasant taste or odor in water</li>
                <li>Visible sediment in output</li>
                <li>Water TDS levels are unusually high</li>
                <li>Filter change alert (if your purifier has one)</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6">Recommended Filter Change Schedule</h2>
              <ul className="list-disc ml-6">
                <li><strong>Pre-Filter:</strong> Every 3–6 months</li>
                <li><strong>Carbon Filter:</strong> Every 6–12 months</li>
                <li><strong>RO Membrane:</strong> Every 2–3 years</li>
                <li><strong>Post-Carbon Filter:</strong> Once a year</li>
              </ul>

              <p className="font-semibold">
                Tip: Always get filters changed by an authorized technician to ensure proper fitting and warranty protection.
              </p>

              <p>
                Keeping up with filter maintenance helps in saving electricity, reducing repair costs, and maintaining your family's health with clean, safe water.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
