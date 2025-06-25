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
            src= "/Images/wasing-3.avif" 
            alt="Washing Machine Troubleshooting"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Washing Machine Troubleshooting
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Understand why your washing machine won’t start, spin, or drain. This guide provides step-by-step fixes for common washer issues and helps you decide when it's time to call a professional.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/women/65.jpg"
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
                Washing machines are essential appliances in modern homes. When they break down, it can be frustrating. Luckily, many common problems can be diagnosed and fixed easily.
              </p>

              <h2 className="text-2xl font-semibold mt-6">1. Washer Won’t Start</h2>
              <p>
                First, check the power connection. Make sure the outlet is working. If everything seems fine, inspect the lid switch, timer knob, or control board.
              </p>

              <h2 className="text-2xl font-semibold mt-6">2. Not Draining Water</h2>
              <p>
                This could be due to a clogged drain hose or pump. Unplug the machine, remove the back panel, and inspect the hose for blockages.
              </p>

              <h2 className="text-2xl font-semibold mt-6">3. Not Spinning</h2>
              <p>
                If your washer fills but doesn’t spin, the motor belt could be broken or the motor itself may be faulty. Inspect the belt and motor assembly.
              </p>

              <h2 className="text-2xl font-semibold mt-6">4. Excessive Vibration</h2>
              <p>
                Ensure the washer is level. Adjust the legs or place it on a vibration pad. Uneven loads can also cause shaking—balance heavy items evenly.
              </p>

              <h2 className="text-2xl font-semibold mt-6">5. Unusual Noises</h2>
              <p>
                Grinding or clicking noises may be caused by foreign objects in the drum or pump. Stop the cycle, unplug the machine, and inspect carefully.
              </p>

              <p className="font-semibold">
                Tip: If you’re unsure or uncomfortable handling parts, call a certified technician to avoid damage or voiding warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
