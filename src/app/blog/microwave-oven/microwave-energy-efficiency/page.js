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
            src="https://storage.beko.co.uk/assets/beko/support/faqs/microwaves/how-energy-efficient-is-a-microwave-1.jpg"
            alt="Microwave Energy Efficiency"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Is Your Microwave Energy Efficient?
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Understand how much energy your microwave consumes, and find tips to reduce electricity usage while cooking smartly and safely at home.
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
                <p className="font-medium text-gray-700">Amit Sharma</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Microwaves are a staple in most kitchens, but how efficient are they really? Compared to ovens and stovetops, microwaves can use significantly less energy for quick heating and reheating tasks.
              </p>

              <h2 className="text-2xl font-semibold mt-6">Average Energy Consumption</h2>
              <p>
                A typical microwave oven uses about 600 to 1200 watts, depending on power settings and model efficiency. Unlike traditional ovens, it directly heats food, resulting in faster cooking and less wasted energy.
              </p>

              <h2 className="text-2xl font-semibold mt-6">Tips to Improve Microwave Efficiency</h2>
              <ul className="list-disc ml-6">
                <li>Use microwave-safe lids to trap heat and reduce cooking time.</li>
                <li>Cook in shorter intervals to avoid overheating and wasting power.</li>
                <li>Keep your microwave clean; food splatters can absorb energy and reduce efficiency.</li>
                <li>Unplug the microwave when not in use to prevent standby power draw.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6">Choose Energy Star Models</h2>
              <p>
                Look for Energy Star-rated microwaves. These models are designed to meet high energy-efficiency standards and often include features like smart sensors and inverter technology for optimized power use.
              </p>

              <p className="font-semibold">
                Conclusion: By making small adjustments and being mindful of usage, you can reduce your electricity bills while still enjoying the convenience of your microwave oven.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
