"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../Componets/Footer/Footer";
import Navbar from "../../Componets/Navbar/Navbar"

export default function ROWaterPurifierCards() {
  const cards = [
    {
      title: "How RO Water Purifiers Work – Explained",
      slug: "how-ro-purifiers-work",
      image:
        "https://www.kent.co.in/blog/wp-content/uploads/2016/12/how-ro-purifier-works.png",
      description:
        "Discover the science behind RO technology and how it removes harmful contaminants from your water to make it safe and healthy.",
    },
    {
      title: "Top 5 RO Water Purifiers in 2025 – Expert Review",
      slug: "best-ro-purifiers-2025",
      image:
        "https://www.inventiva.co.in/wp-content/uploads/2024/12/Top-10-Best-Water-Purifiers-in-India-2025-780x470.webp",
      description:
        "We reviewed over 20 models to bring you the top 5 RO purifiers you can buy in 2025. Compare their features, price, and purification quality.",
    },
    {
      title: "When to Change RO Filters – Signs & Tips",
      slug: "when-to-change-ro-filters",
      image:
        "https://roservice.center/wp-content/uploads/2024/10/Replace-RO-Filters.jpg",
      description:
        "Not sure when to replace your RO filters? Here are common signs of filter degradation and recommended schedules for each stage.",
    },
    {
      title: "RO Water vs. Bottled Water – Which is Better?",
      slug: "ro-vs-bottled-water",
      image:
        "https://www.freepurity.com/cdn/shop/articles/Freepurity-reverse_osmosis_system-bottled-water_1024x1024.jpg?v=1500446679",
      description:
        "Learn the pros and cons of RO filtered water compared to bottled water in terms of health, cost, and environmental impact.",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto mt-12 px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        RO Water Purifier Blog
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Link
            key={card.slug} // ✅ Key moved here
            href={`/blog/ro-water-purifier/${card.slug}`}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div>
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={224}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">
                    {card.title}
                  </h2>
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
