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
            src="https://hips.hearstapps.com/hmg-prod/images/microwave-oven-6799438f5a779.jpg?crop=0.8177295341474446xw:1xh;center,top&resize=1200:*"
            alt="Microwave Cleaning Tips"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              How to Clean Your Microwave Oven
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Say goodbye to food stains and odors! Learn quick and effective ways to clean your microwave using everyday kitchen items like vinegar and lemon.
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
                <p className="font-medium text-gray-700">Sneha Mehta</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                A dirty microwave not only looks bad but also affects performance and hygiene. Fortunately, cleaning it doesn’t require harsh chemicals. You can do it easily with just vinegar, lemon, and a little water.
              </p>

              <h2 className="text-2xl font-semibold mt-6">Method 1: Vinegar Steam Clean</h2>
              <ul className="list-disc ml-6">
                <li>Fill a microwave-safe bowl with 1 cup of water and 1 tablespoon of white vinegar.</li>
                <li>Microwave on high for 5 minutes.</li>
                <li>Let the steam sit for 2-3 minutes, then wipe down the interior with a clean cloth.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6">Method 2: Lemon Freshness</h2>
              <ul className="list-disc ml-6">
                <li>Cut a lemon in half and squeeze juice into a bowl of water (1 cup).</li>
                <li>Drop the lemon halves into the bowl and microwave for 3–5 minutes.</li>
                <li>Wipe with a microfiber cloth once the steam loosens grime.</li>
              </ul>

              <p>
                Don’t forget to clean the microwave plate and door edges where food splashes usually collect. Use a soft sponge with dish soap and rinse well.
              </p>

              <p className="font-semibold">
                Bonus Tip: Place a microwave cover or paper towel over your food while heating to reduce future mess.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
