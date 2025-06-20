"use client";
import Footer from "../../../Componets/Footer/Footer";
import Navbar from "../../../Componets/Navbar/Navbar";

export default function BlogDetailPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12 px-6 mt-12 lg:px-24">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
          <img
            src="https://i.ytimg.com/vi/XRYjFJa6HEI/hq720.jpg"
            alt="Air Conditioner Maintenance"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Air Conditioner Maintenance Tips
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Learn to keep your AC running smoothly with expert tips. Proper maintenance extends lifespan, saves energy,
              and prevents breakdowns. Clean filters monthly, check for coolant leaks, and schedule annual professional
              inspections.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Ravi Technician</p>
                <p>Published on June 5, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>Regular AC maintenance is crucial to ensure optimal performance and energy efficiency.</p>
              <p>Start by cleaning or replacing the filters every 30–60 days, especially during peak usage.</p>
              <p>Check for blocked vents and ensure no furniture or curtains are obstructing airflow.</p>
              <p>A professional servicing once a year can help detect early signs of wear or leaks.</p>
              <p>Make sure the outdoor unit is free from debris and has enough clearance for proper ventilation.</p>
              <p className="font-semibold">
                Preventive care can save money on costly repairs and extend the lifespan of your air conditioner.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
