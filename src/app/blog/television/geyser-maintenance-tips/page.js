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
            src="https://www.livemint.com/lm-img/img/2024/11/12/1600x900/geyser_service_1731411775096_1731411775384.jpeg"
            alt="How to Maintain Your Geyser"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              How to Maintain Your Geyser for Long Life
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Regular maintenance is key to keeping your geyser working efficiently. Follow these expert maintenance tips to extend its lifespan.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/65.jpg"
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
                Like any home appliance, your geyser requires regular care to perform optimally and last longer. With simple maintenance, you can avoid costly repairs and improve safety.
              </p>

              <h2 className="text-2xl font-semibold mt-6">1. Check the Thermostat Settings</h2>
              <p>
                Ensure your geyser is set to an optimal temperature (between 50°C to 60°C). This reduces strain on the heating element and avoids overheating.
              </p>

              <h2 className="text-2xl font-semibold mt-6">2. Flush the Tank Regularly</h2>
              <p>
                Sediment builds up inside the tank over time, which can affect efficiency. Drain the geyser once every 6 months to flush out mineral deposits.
              </p>

              <h2 className="text-2xl font-semibold mt-6">3. Inspect for Leaks</h2>
              <p>
                Check for water dripping from pipes, joints, or the geyser base. Early leak detection prevents bigger problems like tank corrosion or wall damage.
              </p>

              <h2 className="text-2xl font-semibold mt-6">4. Check the Pressure Valve</h2>
              <p>
                Test the pressure relief valve periodically by lifting the lever. Replace it if water doesn’t flow out or if it appears clogged.
              </p>

              <h2 className="text-2xl font-semibold mt-6">5. Turn Off When Not in Use</h2>
              <p>
                Save energy and reduce wear by turning off the geyser when it's not in use, especially during long holidays or warmer months.
              </p>

              <p className="font-semibold">
                Conclusion: These basic maintenance tips can significantly extend the life of your geyser. A little attention now can save you money and hassle later.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
