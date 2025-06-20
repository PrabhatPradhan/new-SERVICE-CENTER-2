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
            src="https://www.kent.co.in/blog/wp-content/uploads/2016/12/how-ro-purifier-works.png"
            alt="How RO Water Purifiers Work"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              How RO Water Purifiers Work – Explained
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover the science behind RO technology and how it removes harmful contaminants from your water to make it safe and healthy.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/women/25.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Dr. Nisha Verma</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Reverse Osmosis (RO) is one of the most advanced water purification methods available today. It works by pushing water through a semipermeable membrane that filters out impurities and contaminants.
              </p>

              <h2 className="text-2xl font-semibold mt-6">1. The Basic Principle of RO</h2>
              <p>
                RO works on the principle of osmosis in reverse. By applying pressure, water is forced through a membrane that blocks larger particles like bacteria, salts, and heavy metals.
              </p>

              <h2 className="text-2xl font-semibold mt-6">2. Key Components in an RO System</h2>
              <ul className="list-disc ml-6">
                <li>Sediment Filter – removes dirt and particles</li>
                <li>Carbon Filter – removes chlorine and bad odor</li>
                <li>RO Membrane – the main filtration barrier</li>
                <li>Post Carbon Filter – polishes the taste of water</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6">3. What RO Removes</h2>
              <p>
                RO filters out dissolved salts (TDS), fluoride, arsenic, lead, nitrates, and more. It's especially helpful in areas with hard or polluted water supplies.
              </p>

              <h2 className="text-2xl font-semibold mt-6">4. Is RO Water Healthy?</h2>
              <p>
                RO removes both harmful substances and some natural minerals. For this reason, many systems include a mineralizer to restore essential minerals like calcium and magnesium.
              </p>

              <p className="font-semibold">
                Final Thought: RO water purifiers are highly effective for household use, especially where water quality is poor. Always maintain your purifier regularly to ensure its performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
