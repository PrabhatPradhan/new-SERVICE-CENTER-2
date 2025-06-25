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
            src=  "/Images/chimne-4.jpg" 
            alt="Kitchen Chimney Problems"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Common Kitchen Chimney Problems & Fixes
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Is your chimney making noise or not sucking smoke? Here are the most common issues users face and how to fix them quickly.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Anjali Sharma</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Kitchen chimneys are essential for removing smoke, grease, and odors. But like any appliance, they can run into issues over time. Recognizing the problem early can save you from costly repairs.
              </p>

              <h2 className="text-2xl font-semibold mt-6">🔊 Problem 1: Excessive Noise</h2>
              <p>
                If your chimney is making loud or unusual noises, it could be due to a loose fan, worn motor bearings, or blocked filters.
              </p>
              <p><strong>Fix:</strong> Clean the filters and check for any loose screws or parts. If the noise continues, the motor may need servicing.</p>

              <h2 className="text-2xl font-semibold mt-6">🌫️ Problem 2: Poor Suction</h2>
              <p>
                If smoke isn't being sucked properly, the issue could be clogged filters or a weak motor.
              </p>
              <p><strong>Fix:</strong> Clean or replace the filters. Ensure there’s no blockage in the duct pipe.</p>

              <h2 className="text-2xl font-semibold mt-6">💡 Problem 3: Lights Not Working</h2>
              <p>
                Non-functional lights could be due to burnt-out bulbs or electrical faults.
              </p>
              <p><strong>Fix:</strong> Replace the bulbs. If the issue persists, check wiring connections or consult an electrician.</p>

              <h2 className="text-2xl font-semibold mt-6">🔥 Problem 4: Buttons or Touch Panel Not Responding</h2>
              <p>
                Control panels can become unresponsive due to moisture, grease buildup, or internal faults.
              </p>
              <p><strong>Fix:</strong> Clean the panel carefully. If it still doesn’t work, the PCB (printed circuit board) may need repair or replacement.</p>

              <p className="font-semibold">
                Regular maintenance is key to avoiding these problems. Clean your chimney every few weeks and service it professionally at least once a year.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
