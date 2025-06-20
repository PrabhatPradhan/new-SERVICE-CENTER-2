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
            src="https://blog.sfapp.magefan.top/media/glen-india.myshopify.com/images/0001step/image2.jpg"
            alt="Cleaning Kitchen Chimney"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Cleaning Your Kitchen Chimney – Step-by-Step Guide
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Oil, grease, and smoke can clog your chimney. Follow this simple step-by-step guide to clean your chimney effectively at home.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/52.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Rahul Iyer</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                A kitchen chimney plays a vital role in keeping your cooking area clean and smoke-free. But over time, oil and grease can build up, reducing its efficiency. Regular cleaning can extend its life and maintain healthy air inside your kitchen.
              </p>

              <h2 className="text-2xl font-semibold mt-6">🧽 Step-by-Step Chimney Cleaning Guide</h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>🔌 <strong>Turn off and unplug</strong> the chimney before starting.</li>
                <li>🧼 <strong>Remove the filters</strong> carefully. Most chimneys have baffle or mesh filters.</li>
                <li>💧 <strong>Soak the filters</strong> in hot water mixed with baking soda, dish soap, and vinegar.</li>
                <li>🧽 <strong>Scrub gently</strong> with a soft brush to remove stuck-on grease.</li>
                <li>🌬️ <strong>Dry the filters</strong> completely before reattaching.</li>
                <li>🧹 <strong>Wipe the outer body</strong> with a damp cloth and mild cleaner. Avoid harsh chemicals.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6">🕒 How Often Should You Clean It?</h2>
              <p>
                For Indian-style cooking, it’s ideal to clean the chimney filters every 2–3 weeks. Deep clean the unit at least once every 3 months or as per the manufacturer’s instructions.
              </p>

              <p className="font-semibold">
                Regular maintenance not only enhances performance but also reduces the chances of expensive repairs or fire hazards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
