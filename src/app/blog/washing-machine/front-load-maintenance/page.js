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
            src="https://images.unsplash.com/photo-1662220984920-3bd1f88e846f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Washing Machine"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Front Load Washing Machine Maintenance
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover essential maintenance tips for front-load washing
              machines. Learn how to prevent mold, improve washing efficiency,
              and keep your appliance running longer with proper care routines.
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
                <p className="font-medium text-gray-700">Rahul Technician</p>
                <p>Published on June 5, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Front-load washing machines offer great efficiency, but they
                need regular maintenance to stay in top shape.
              </p>
              <p>
                One of the most important steps is to leave the door slightly
                open after each wash to prevent mold and mildew.
              </p>
              <p>
                Clean the rubber gasket weekly and wipe down any moisture or
                debris, especially in hidden folds.
              </p>
              <p>
                Use the recommended detergent and avoid overloading, which can
                damage the drum and reduce cleaning performance.
              </p>
              <p>
                Run a hot wash cycle with vinegar and baking soda once a month
                to eliminate buildup and odor.
              </p>
              <p className="font-semibold">
                Proper care not only extends the life of your appliance but also
                ensures clothes come out fresher and cleaner.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
