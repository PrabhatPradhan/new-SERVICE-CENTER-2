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
            src="https://images.unsplash.com/photo-1603516084021-1cfa399b64ca?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Why Regular AC Maintenance Matters"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Why Regular AC Maintenance Matters
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Neglecting AC maintenance can reduce performance and lifespan.
              Understand the benefits of scheduling seasonal checkups and how it
              saves you money long-term.
            </p>

            <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
              <Image
                src="https://randomuser.me/api/portraits/men/42.jpg"
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
                Just like any appliance, your air conditioner needs regular
                maintenance to function effectively and efficiently throughout
                its years of service.
              </p>

              <p>
                Without regular servicing, your AC can lose 5% of its efficiency
                every year. Dust buildup on filters and coils restrict airflow
                and make the system work harder — costing you more in electricity.
              </p>

              <p>
                <strong>Key Benefits of Regular AC Maintenance:</strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Improves cooling performance</li>
                <li>Reduces energy consumption</li>
                <li>Prevents sudden breakdowns</li>
                <li>Extends the lifespan of your unit</li>
                <li>Keeps indoor air clean and healthy</li>
              </ul>

              <p>
                Schedule professional checkups at least once before the summer
                season begins. Cleaning filters, checking gas levels, and
                inspecting wires can prevent most common issues.
              </p>

              <p className="font-semibold">
                Final Advice: Don’t wait for problems to appear. Preventive
                maintenance is always cheaper and more efficient than reactive
                repairs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
