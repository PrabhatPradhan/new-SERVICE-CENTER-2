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
            src="/Images/wasing-card-2.jpg"
            alt="Air Conditioner Maintenance Tips"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Air Conditioner Maintenance Tips
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Keep your AC running like new with our expert maintenance tips. Learn how to clean filters, check refrigerant levels, and avoid common issues that reduce performance and raise electricity bills.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/37.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Ravi Singh</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                An air conditioner is an investment in comfort, but to get the most out of it, regular maintenance is essential. Neglect can lead to reduced efficiency and higher electricity bills.
              </p>

              <h2 className="text-2xl font-semibold mt-6">1. Clean or Replace Filters</h2>
              <p>
                Dirty filters restrict airflow and reduce cooling. Clean them every 2 weeks in summer or replace them monthly if your AC has disposable filters.
              </p>

              <h2 className="text-2xl font-semibold mt-6">2. Check the Refrigerant</h2>
              <p>
                Low refrigerant levels can indicate leaks. If your AC isn’t cooling properly, have a technician check the refrigerant and recharge it if necessary.
              </p>

              <h2 className="text-2xl font-semibold mt-6">3. Clean the Coils</h2>
              <p>
                Over time, the evaporator and condenser coils collect dirt. Cleaning them annually ensures efficient heat exchange and keeps your AC running smoothly.
              </p>

              <h2 className="text-2xl font-semibold mt-6">4. Inspect the Thermostat</h2>
              <p>
                Make sure your thermostat is working correctly and placed away from heat sources. Consider upgrading to a programmable thermostat for better efficiency.
              </p>

              <h2 className="text-2xl font-semibold mt-6">5. Clear the Drain Line</h2>
              <p>
                A blocked condensate drain can cause water damage and humidity issues. Flush it with a mix of bleach and water every few months.
              </p>

              <p className="font-semibold">
                Pro Tip: Schedule a professional service once a year before summer to check components and prevent costly repairs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
