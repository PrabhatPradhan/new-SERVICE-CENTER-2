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
            src="https://cdn.thewirecutter.com/wp-content/media/2024/08/microwaves-2048px-2-4.jpg?auto=webp&quality=75&width=1024"
            alt="Microwave Oven Buying Guide 2025"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Microwave Oven Buying Guide 2025
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Looking for a new microwave oven? We compare the best models of
              2025 for solo, grill, and convection categories. Get expert
              recommendations for every budget.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Amit Verma</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Choosing the right microwave oven can be tricky with so many
                models and features on the market. Whether you're a solo user,
                small family, or a cooking enthusiast, 2025 brings plenty of
                options for every need.
              </p>

              <p><strong>Here’s a quick breakdown of the types:</strong></p>

              <ul className="list-disc list-inside ml-4">
                <li><strong>Solo Microwave:</strong> Basic reheating and cooking, ideal for singles or students.</li>
                <li><strong>Grill Microwave:</strong> Adds grilling functionality – perfect for kebabs and toast.</li>
                <li><strong>Convection Microwave:</strong> Bakes, grills, and reheats – an all-rounder for small kitchens.</li>
              </ul>

              <p>
                Top brands in 2025 include Samsung, LG, Panasonic, IFB, and
                Whirlpool. Each offers unique features like auto-cook menus, child
                locks, inverter technology, and smart controls.
              </p>

              <p><strong>Buying Tips:</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Choose 20–25L for 2-3 members, 28L+ for families.</li>
                <li>Look for stainless steel cavity for durability.</li>
                <li>Energy-efficient models save electricity long-term.</li>
              </ul>

              <p>
                No matter your budget, there's a microwave out there with the
                right mix of power, features, and convenience. Be sure to check
                for warranty and after-sales service in your area.
              </p>

              <p className="font-semibold">
                Final Verdict: Go for a convection model if you cook and bake
                frequently. Otherwise, a solo microwave is perfect for daily
                reheating and simple meals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
