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
            src="/Images/chimney-1.jpg"
            alt="Kitchen Chimney"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              How to Choose the Right Kitchen Chimney
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Choosing the right kitchen chimney can be confusing. Learn how to pick one based on suction power, filter type, and kitchen size.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/36.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Ravi Malhotra</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                A kitchen chimney plays a vital role in removing smoke, grease, and odors from your cooking area. But with so many models in the market, it can be overwhelming to choose the right one.
              </p>

              <h2 className="text-2xl font-semibold mt-6">1. Understand Suction Power</h2>
              <p>
                The suction power of a chimney determines how efficiently it can pull in smoke and oil particles. For Indian kitchens, a suction power of 1000 m³/hr or higher is usually recommended.
              </p>

              <h2 className="text-2xl font-semibold mt-6">2. Choose the Right Filter Type</h2>
              <p>
                Chimneys come with three types of filters: cassette, baffle, and charcoal. Baffle filters are ideal for Indian cooking due to their better oil separation capability and easier cleaning.
              </p>

              <h2 className="text-2xl font-semibold mt-6">3. Consider Your Kitchen Size</h2>
              <p>
                Match the chimney size to your kitchen size and stove width. A 60 cm chimney is suitable for 2-burner stoves, while 90 cm works best for 3-4 burner setups.
              </p>

              <h2 className="text-2xl font-semibold mt-6">4. Ducted vs. Ductless</h2>
              <p>
                Ducted chimneys are more effective in venting out smoke, whereas ductless ones are easier to install but require frequent filter changes.
              </p>

              <h2 className="text-2xl font-semibold mt-6">5. Look for Smart Features</h2>
              <p>
                Auto-clean, touch controls, and motion sensing are features that make chimneys more user-friendly and easier to maintain.
              </p>

              <p className="font-semibold">
                Final Tip: Always check user reviews and brand warranty when making a purchase. A well-chosen chimney can greatly improve your kitchen experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
