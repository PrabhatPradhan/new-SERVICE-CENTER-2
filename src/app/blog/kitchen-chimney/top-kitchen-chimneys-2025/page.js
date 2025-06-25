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
            src= "/Images/chimneys-2.avif" 
            alt="Top Kitchen Chimneys"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Top 5 Kitchen Chimneys in 2025 – Expert Picks
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We've reviewed the top-rated kitchen chimneys for 2025. Find out which brands and models offer the best features for Indian kitchens.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Sneha Deshmukh</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                With so many kitchen chimney options on the market in 2025, it's tough to know which one to choose. We've done the research and testing so you don’t have to. Here's our pick of the top 5 chimneys for Indian households this year.
              </p>

              <h2 className="text-2xl font-semibold mt-6">1. Faber Hood Zenith FL SC AC BK 90</h2>
              <p>
                With auto-clean technology, high suction power (1350 m³/hr), and gesture controls, this model is perfect for large kitchens. The baffle filters handle heavy Indian cooking well.
              </p>

              <h2 className="text-2xl font-semibold mt-6">2. Elica WD HAC TOUCH BF 60</h2>
              <p>
                Compact yet powerful, this model features a sleek design, touch control, and 1200 m³/hr suction. Ideal for medium-sized kitchens with limited space.
              </p>

              <h2 className="text-2xl font-semibold mt-6">3. Hindware Nadia 60</h2>
              <p>
                Known for affordability and performance, the Nadia 60 comes with thermal auto-clean and powerful suction. Its curved glass design adds elegance to modern kitchens.
              </p>

              <h2 className="text-2xl font-semibold mt-6">4. Glen 6054 Auto-Clean 60 cm</h2>
              <p>
                This chimney offers a combination of stainless steel filters, push-button control, and efficient oil collection. It’s ideal for daily cooking and easy maintenance.
              </p>

              <h2 className="text-2xl font-semibold mt-6">5. Bosch Serie 4 DWB098D50I</h2>
              <p>
                Premium design and whisper-quiet operation define this Bosch chimney. Though on the pricier side, it delivers unmatched durability and efficiency for high-end homes.
              </p>

              <p className="font-semibold">
                Final Tip: Look for features that fit your kitchen layout and cooking style—whether it’s heavy frying or minimal oil usage. A good chimney can completely transform your cooking experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
