"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../Componets/Footer/Footer";
import Navbar from "../../Componets/Navbar/Navbar"
export default function CardsPage() {
  const cards = [
    {
      title: "Refrigerator Repair Guide",
      slug: "refrigerator-repair-guide",
      image:
        "/Images/wasing-Card.jpg",
      description:
        "A comprehensive guide to diagnosing and fixing common issues with household refrigerators. From faulty thermostats to broken door seals, this guide covers all the basics you need to get your fridge running efficiently again.",
    },
    {
      title: "Air Conditioner Maintenance Tips",
      slug: "air-conditioner-maintenance-tips",
      image:
        "/Images/wasing-card-2.jpg",
      description:
        "Keep your AC running like new with our expert maintenance tips. Learn how to clean filters, check refrigerant levels, and avoid common issues that reduce performance and raise electricity bills.",
    },
    {
      title: "Washing Machine Troubleshooting",
      slug: "washing-machine-troubleshooting",
      image:
        "/Images/wasing-3.avif",
      description:
        "Understand why your washing machine won’t start, spin, or drain. This guide provides step-by-step fixes for common washer issues and helps you decide when it's time to call a professional.",
    },
    {
      title: "Microwave Oven Safety Practices",
      slug: "microwave-oven-safety-practices",
      image: "/Images/wasing-4.jpg",
      description:
        "Avoid microwave hazards with our safety checklist. We explain the do's and don'ts of microwave use and share tips to extend its lifespan and avoid unnecessary repairs.",
    },
  ];

  return (
   <>
   <Navbar/>
    <div className="max-w-6xl mx-auto mt-12 px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Our Repair Guides</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Link
            href={`/blog/geyser/${card.slug}`}
            key={card.slug}
            className="block"
          >
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={224}
                className="w-full h-56 object-cover"
              />
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
