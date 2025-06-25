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
            src="/Images/wasing-4.jpg" 
            alt="Microwave Oven Safety Practices"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Microwave Oven Safety Practices
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Avoid microwave hazards with our safety checklist. We explain the do's and don'ts of microwave use and share tips to extend its lifespan and avoid unnecessary repairs.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/34.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Rajiv Sinha</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Microwave ovens make cooking fast and convenient, but improper use can lead to fire hazards or internal damage. Knowing how to use them safely is crucial.
              </p>

              <h2 className="text-2xl font-semibold mt-6">1. Use Microwave-Safe Containers</h2>
              <p>
                Always use glass, ceramic, or microwave-safe plastic containers. Avoid using metal, aluminum foil, or thin plastic wraps.
              </p>

              <h2 className="text-2xl font-semibold mt-6">2. Don’t Run Empty</h2>
              <p>
                Running a microwave empty can cause damage to the magnetron. Always ensure something is inside before starting the appliance.
              </p>

              <h2 className="text-2xl font-semibold mt-6">3. Avoid Superheating Liquids</h2>
              <p>
                Liquids can get superheated and explode. Let the container rest before removing and stir the liquid before consuming.
              </p>

              <h2 className="text-2xl font-semibold mt-6">4. Clean Regularly</h2>
              <p>
                Food spills and grease can absorb microwaves and reduce efficiency. Clean the interior weekly using a lemon-vinegar steam method.
              </p>

              <h2 className="text-2xl font-semibold mt-6">5. Keep Children Supervised</h2>
              <p>
                Teach children how to safely use the microwave and supervise younger ones to avoid mishandling or burns.
              </p>

              <p className="font-semibold">
                Tip: Follow the manufacturer’s manual for specific safety guidelines related to your microwave model.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
