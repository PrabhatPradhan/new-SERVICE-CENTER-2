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
            src="https://plus.unsplash.com/premium_photo-1664443944828-2cdb401f0e18?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Washing Machine Issues"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Top 5 Washing Machine Issues and Fixes
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              From drainage problems to spinning failures, this guide helps you
              identify and fix the most common washing machine issues without
              needing a technician.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />

              <div>
                <p className="font-medium text-gray-700">Amit Engineer</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Washing machines are essential home appliances, but they often
                develop issues due to frequent usage or poor maintenance.
              </p>
              <p>
                One of the most common issues is a washer that won’t drain.
                Check for clogged filters or blocked drain hoses.
              </p>
              <p>
                If your machine won’t spin, inspect the lid switch or drive belt.
                These parts can wear out over time.
              </p>
              <p>
                Excessive vibrations may indicate unbalanced loads or damaged
                shock absorbers.
              </p>
              <p>
                Bad odors are usually caused by trapped lint and detergent
                residue. Regularly run cleaning cycles with baking soda and
                vinegar.
              </p>
              <p>
                Lastly, water leakage may come from loose hoses or worn-out door
                seals.
              </p>
              <p className="font-semibold">
                Most of these issues can be solved at home with simple tools and
                a bit of patience, saving you time and money on technician
                visits.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
