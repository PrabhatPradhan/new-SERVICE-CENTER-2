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
            src="https://images.unsplash.com/photo-1592502712785-9cca412cac87?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Washing Machine Buying Guide"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Washing Machine Buying Guide
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Not sure which washing machine to buy? This detailed guide compares
              top brands, types (top-load vs front-load), capacities, and features
              to help you make the right choice.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/22.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Ravi Kumar</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Buying a washing machine is a long-term investment. It's
                important to choose a model that fits your household size,
                laundry habits, and space constraints.
              </p>
              <p>
                **Top-load machines** are generally easier to use and more
                affordable, but **front-load machines** are more efficient,
                gentler on clothes, and use less water.
              </p>
              <p>
                Consider the **capacity** based on your family size — 6–7 kg for
                couples, 8–9 kg for families. Look for features like **inverter
                motors**, **quick wash**, **steam clean**, and **auto drum
                clean**.
              </p>
              <p>
                Brands like LG, Samsung, Whirlpool, and Bosch offer competitive
                models in various price ranges. Compare **energy ratings** and
                **warranty** before finalizing.
              </p>
              <p className="font-semibold">
                A smart choice now ensures you save on maintenance, electricity,
                and water bills in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
