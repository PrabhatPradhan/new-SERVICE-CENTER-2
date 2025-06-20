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
            src="https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/11/24104944/Geyser-Maintenance-Valve-Leakage.jpg"
            alt="Common Geyser Problems"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Common Geyser Problems & Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Facing no hot water or water leakage from your geyser? Learn the most frequent geyser issues and how to resolve them effectively at home.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/46.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Raj Mehta</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Geysers are essential appliances for daily comfort, especially during winter. But like all electrical devices, they can face issues over time. Let’s look at some of the most common geyser problems and how to fix them.
              </p>

              <h2 className="text-2xl font-semibold mt-6">1. No Hot Water</h2>
              <p>
                This can be due to a faulty thermostat or heating element. Reset the thermostat or replace the element. If it's a gas geyser, check for pilot light failure.
              </p>

              <h2 className="text-2xl font-semibold mt-6">2. Water Leakage</h2>
              <p>
                Water around the geyser could indicate a valve leak or tank corrosion. Tighten the inlet/outlet connections or consult a technician if the tank is rusted.
              </p>

              <h2 className="text-2xl font-semibold mt-6">3. Strange Noises</h2>
              <p>
                Rumbling or popping sounds can result from sediment build-up. Flushing the tank regularly prevents this and extends the life of your geyser.
              </p>

              <h2 className="text-2xl font-semibold mt-6">4. Discolored or Smelly Water</h2>
              <p>
                This could be due to rusting inside the tank or bacterial growth. Flush the tank and consider replacing the anode rod inside.
              </p>

              <h2 className="text-2xl font-semibold mt-6">5. Geyser Trips MCB</h2>
              <p>
                Short circuits or faulty wiring may trip your circuit breaker. Turn off the geyser and call a licensed electrician to inspect the wiring.
              </p>

              <p className="font-semibold">
                Conclusion: Regular maintenance and timely checks can prevent most geyser issues. For persistent problems, always consult a certified professional to ensure safety.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
