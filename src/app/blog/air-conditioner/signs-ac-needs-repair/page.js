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
            src="https://images.unsplash.com/photo-1695760177249-85c742906940?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Signs Your AC Needs Repair"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Top 5 Signs Your AC Needs Repair
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Is your AC making noise or not cooling enough? Discover the most
              common signs that your air conditioner needs immediate attention
              from a technician.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/40.jpg"
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Manoj Service Expert</p>
                <p>Published on June 20, 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Air conditioners often show signs of trouble before they break
                down completely. Recognizing these early can help you avoid
                expensive repairs or replacements.
              </p>
              <p>
                1. <strong>Warm Air:</strong> If your AC is blowing warm or less
                cool air, it could be a refrigerant issue or compressor failure.
              </p>
              <p>
                2. <strong>Weak Airflow:</strong> Poor airflow could indicate
                blocked vents, dirty filters, or motor problems.
              </p>
              <p>
                3. <strong>Strange Noises:</strong> Grinding, squealing, or
                banging sounds suggest something is wrong with internal
                components.
              </p>
              <p>
                4. <strong>Unpleasant Odors:</strong> Mold or burnt wire smells
                may mean clogged ducts or electrical issues.
              </p>
              <p>
                5. <strong>High Humidity:</strong> If the AC can't remove
                moisture effectively, it needs servicing.
              </p>
              <p className="font-semibold">
                Regular maintenance and timely attention to these signs can
                prolong the life of your AC and ensure efficient cooling during
                peak summer months.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
