"use client";
import Footer from "../../../Componets/Footer/Footer";
import Navbar from "../../../Componets/Navbar/Navbar";

export default function BlogDetailPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12 px-6 mt-12 lg:px-24">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/2/GE/JW/SY/25289616/front-loading-washing-machine-repair-service.png"
            alt="Refrigerator Repair"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Refrigerator Repair Guide</h1>
            <p className="text-lg text-gray-600 mb-6">
              A comprehensive guide to fixing common fridge issues efficiently.
            </p>
            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">John Mechanic</p>
                <p>Published on May 31, 2025</p>
              </div>
            </div>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                If your refrigerator is not cooling properly, making strange noises, or leaking water, you’re not alone.
                Many common fridge issues can be resolved at home with a little guidance and the right tools.
              </p>
              <p>
                This guide walks you through step-by-step troubleshooting tips, from checking the thermostat and cleaning
                the condenser coils to diagnosing a faulty compressor or motor.
              </p>
              <p>
                Learn how to handle freezer frost build-up, unusual vibrations, and water accumulation in crispers.
                Whether you're a DIY enthusiast or just want to avoid costly repairs, this article gives you the confidence
                to act.
              </p>
              <p className="font-semibold">
                Always unplug your appliance before doing any internal inspection or repairs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
