import Footer from "../../../Componets/Footer/Footer";
import Navbar from "../../../Componets/Navbar/Navbar";
import Image from "next/image";

export default function Page() {
  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-gray-100 py-12 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        <Image
          src="https://5.imimg.com/data5/SELLER/Default/2022/2/GE/JW/SY/25289616/front-loading-washing-machine-repair-service.png"
          alt="Washing Machine Repair"
          width={1200}
          height={400}
          className="w-full h-96 object-cover"
        />
        <div className="p-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Washing Machine Repair Guide</h1>
          <p className="text-lg text-gray-600 mb-6">
            Step-by-step solutions to common washing machine issues at home.
          </p>

          <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
            <Image
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Author"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-gray-700">Anita Sharma</p>
              <p>Published on May 31, 2025</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Is your washing machine refusing to spin, making weird noises, or leaving clothes soaking wet?
              Don't panic — many common issues can be fixed without calling a technician.
            </p>
            <p>
              This guide covers the top problems: washing machine not draining, not starting, leaking water,
              or producing loud vibrations. Each section includes causes, DIY fixes, and when to seek professional help.
            </p>
            <p>
              Check power supply and lid switches if it doesn’t start. Clean your filter regularly to prevent drainage issues.
              Balance your machine properly to avoid noise and movement.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Not spinning?</strong> Check the belt and motor coupling.</li>
              <li><strong>Leaking water?</strong> Inspect the hose and door seal.</li>
              <li><strong>Strange sounds?</strong> Remove loose objects and inspect the drum bearings.</li>
            </ul>

            <p className="font-semibold">
              Always unplug the machine and turn off the water supply before starting any repair.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
}
