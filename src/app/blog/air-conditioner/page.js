"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../Componets/Footer/Footer";
import Navbar from "../../Componets/Navbar/Navbar"

export default function AirConditionerCards() {
  const cards = [
    {
      title: "How to Service Your AC at Home",
      slug: "ac-service-at-home",
      image:
        "/Images/ac-blog.jpeg",
      description:
        "Learn how to clean and maintain your air conditioner at home. This step-by-step guide helps you avoid costly repairs and improve your AC's efficiency all summer long.",
    },
    {
      title: "Top 5 Signs Your AC Needs Repair",
      slug: "signs-ac-needs-repair",
      image:
        "/Images/ac-blog-2.jpeg",
      description:
        "Is your AC making noise or not cooling enough? Discover the most common signs that your air conditioner needs immediate attention from a technician.",
    },
    {
      title: "Best Energy-Efficient Air Conditioners 2025",
      slug: "energy-efficient-ac-2025",
      image:
        "/Images/ac-blog-3.jpeg",
      description:
        "Explore top-rated energy-efficient ACs for 2025. We compare models, power usage, features, and give recommendations for different budgets and room sizes.",
    },
    {
      title: "Why Regular AC Maintenance Matters",
      slug: "importance-of-ac-maintenance",
      image:
        "/Images/ac-blog-4.jpeg",
      description:
        "Neglecting AC maintenance can reduce performance and lifespan. Understand the benefits of scheduling seasonal checkups and how it saves you money long-term.",
    },
  ];

  return (
   <>
   <Navbar/>
    <div className="max-w-6xl mx-auto px-4 mt-12 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Air Conditioner Guides</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Link href={`/blog/air-conditioner/${card.slug}`} key={card.slug}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <Image
                src={card.image}
                alt={card.title}
                width={600}
                height={224} // ≈ h-56 = 14rem
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
