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
            src="/Images/wasing-Card.jpg"
            alt="Refrigerator Repair Guide"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Refrigerator Repair Guide
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              A comprehensive guide to diagnosing and fixing common issues with household refrigerators. From faulty thermostats to broken door seals, this guide covers all the basics you need to get your fridge running efficiently again.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/42.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Arjun Verma</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Refrigerators are one of the most essential appliances in every household. But like any machine, they can develop issues over time. This guide helps you troubleshoot and repair the most common refrigerator problems.
              </p>

              <h2 className="text-2xl font-semibold mt-6">1. Not Cooling Properly</h2>
              <p>
                A common issue caused by dirty condenser coils, faulty thermostats, or a broken compressor. Start by cleaning the coils and checking temperature settings.
              </p>

              <h2 className="text-2xl font-semibold mt-6">2. Water Leakage</h2>
              <p>
                Often caused by a blocked defrost drain or damaged water line. Clearing the drain and inspecting the water supply line can usually fix this.
              </p>

              <h2 className="text-2xl font-semibold mt-6">3. Excessive Frost Buildup</h2>
              <p>
                This may indicate a malfunctioning defrost timer or heater. Manually defrost and monitor if the issue returns; if so, replacement parts might be needed.
              </p>

              <h2 className="text-2xl font-semibold mt-6">4. Noisy Operation</h2>
              <p>
                Buzzing or rattling sounds could stem from a faulty evaporator fan, condenser fan motor, or an unlevel fridge. Check internal fans and fridge placement.
              </p>

              <h2 className="text-2xl font-semibold mt-6">5. Door Not Sealing Properly</h2>
              <p>
                Inspect door gaskets for cracks or looseness. Replacing a faulty gasket is easy and helps maintain energy efficiency.
              </p>

              <p className="font-semibold">
                Safety First: Always unplug your refrigerator before performing any repairs. If the issue persists after troubleshooting, consult a certified appliance technician.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
