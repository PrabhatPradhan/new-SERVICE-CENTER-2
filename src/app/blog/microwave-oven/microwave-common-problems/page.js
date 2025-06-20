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
            src="https://newtackserviceplatform.com/uploads/city/1718050338ApplianceRepairKolkatawebp.webp"
            alt="Common Microwave Oven Problems"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Common Microwave Oven Problems
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              From unresponsive buttons to uneven heating, this guide walks you
              through the most common microwave oven issues and how to fix them
              at home safely.
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
                <p className="font-medium text-gray-700">Priya Sharma</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Microwave ovens are essential appliances in modern kitchens, but
                like any device, they can encounter problems over time. Knowing
                what to look out for can save you time, stress, and money.
              </p>

              <p><strong>Here are some of the most common issues:</strong></p>

              <ul className="list-disc list-inside ml-4">
                <li><strong>Microwave Not Heating:</strong> Often caused by a faulty magnetron or capacitor.</li>
                <li><strong>Unresponsive Buttons:</strong> Keypad membrane may be worn out or disconnected.</li>
                <li><strong>Sparks Inside Microwave:</strong> Usually due to metal inside or a damaged waveguide cover.</li>
                <li><strong>Turntable Not Rotating:</strong> Check for broken motor or misaligned rollers.</li>
                <li><strong>Noisy Operation:</strong> Faulty fan or turntable motor could be the culprit.</li>
              </ul>

              <p>
                Most minor issues like cleaning contacts or resetting the fuse can
                be done at home. However, for electrical parts like the magnetron,
                always consult a technician.
              </p>

              <p className="font-semibold">
                Safety Tip: Never try to open the microwave’s casing unless you're
                trained. Even unplugged, capacitors inside can hold lethal charge.
              </p>

              <p>
                Regular maintenance — like keeping it clean and ensuring you never
                run it empty — can help extend the life of your microwave.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
