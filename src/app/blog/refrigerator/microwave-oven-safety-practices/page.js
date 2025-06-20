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
            src="https://www.glotechrepairs.co.uk/news/wp-content/uploads/2018/09/1.jpg"
            alt="Microwave Oven Safety"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Microwave Oven Safety Practices
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Use your microwave safely and avoid common hazards. Microwaves are convenient but require proper usage to prevent accidents.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <img
                src="https://randomuser.me/api/portraits/women/48.jpg"
                alt="Author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Priya Engineer</p>
                <p>Published on June 5, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>Always use microwave-safe containers—avoid metal or aluminum foil inside the microwave.</p>
              <p>Do not run the microwave empty, as it may damage the magnetron.</p>
              <p>Allow food to stand for a minute after heating to let the heat distribute evenly.</p>
              <p>Keep the inside of the microwave clean to avoid food residue catching fire.</p>
              <p>Supervise children while they use the microwave and teach them basic safety tips.</p>
              <p className="font-semibold">
                Regular inspection and responsible use go a long way in preventing kitchen accidents.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
