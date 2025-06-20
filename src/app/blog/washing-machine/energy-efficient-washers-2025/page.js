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
            src="https://images.unsplash.com/photo-1621084846468-578db1e93b4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Energy-Efficient Washing Machine"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Energy-Efficient Washing Machines in 2025
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Explore the most energy-efficient washing machines of 2025. We
              cover features, pros, cons, and tips to save electricity and water
              with smart laundry choices.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/women/28.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Sneha Sharma</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                With rising electricity costs and environmental awareness,
                energy-efficient washing machines are in high demand in 2025.
              </p>
              <p>
                Models now come with inverter motors, low water usage modes, and
                smart sensors that adjust cycles based on load size.
              </p>
              <p>
                Leading brands like LG, Samsung, and Bosch offer 5-star rated
                washers with EcoBubble and AI wash technology that clean
                effectively while using less power.
              </p>
              <p>
                When shopping for one, look for the BEE energy rating label and
                features like delay timers, automatic load sensing, and eco
                rinse options.
              </p>
              <p>
                While the upfront cost may be slightly higher, the long-term
                savings in your utility bill make them a smart investment.
              </p>
              <p className="font-semibold">
                Making the switch to an energy-efficient washer not only lowers
                your bills but also helps reduce your environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
