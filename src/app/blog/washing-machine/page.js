"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../Componets/Footer/Footer";
import Navbar from "../../Componets/Navbar/Navbar";

export default function WashingMachineCards() {
  const cards = [
    {
      title: "Front Load Washing Machine Maintenance",
      slug: "front-load-maintenance",
      image:
        "https://images.unsplash.com/photo-1662220984920-3bd1f88e846f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Discover essential maintenance tips for front-load washing machines. Learn how to prevent mold, improve washing efficiency, and keep your appliance running longer with proper care routines.",
    },
    {
      title: "Top 5 Washing Machine Issues and Fixes",
      slug: "top-issues-and-fixes",
      image:
        "https://plus.unsplash.com/premium_photo-1664443944828-2cdb401f0e18?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "From drainage problems to spinning failures, this guide helps you identify and fix the most common washing machine issues without needing a technician.",
    },
    {
      title: "Energy-Efficient Washing Machines in 2025",
      slug: "energy-efficient-washers-2025",
      image:
        "https://images.unsplash.com/photo-1621084846468-578db1e93b4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Explore the most energy-efficient washing machines of 2025. We cover features, pros, cons, and tips to save electricity and water with smart laundry choices.",
    },
    {
      title: "Washing Machine Buying Guide",
      slug: "washing-machine-buying-guide",
      image:
        "https://images.unsplash.com/photo-1592502712785-9cca412cac87?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Not sure which washing machine to buy? This detailed guide compares top brands, types (top-load vs front-load), capacities, and features to help you make the right choice.",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto mt-12 px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Washing Machine Guides</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Link
            href={`/blog/washing-machine/${card.slug}`}
            key={card.slug}
            className="block"
          >
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <div className="relative w-full h-56">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{card.title}</h2>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
