"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../Componets/Navbar/Navbar"
import Footer from "../../Componets/Footer/Footer";

export default function GeyserCards() {
  const cards = [
    {
      title: "Common Geyser Problems & Solutions",
      slug: "common-geyser-problems",
      image:
        "https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/11/24104944/Geyser-Maintenance-Valve-Leakage.jpg",
      description:
        "Facing no hot water or water leakage from your geyser? Learn the most frequent geyser issues and how to resolve them effectively at home.",
    },
    {
      title: "How to Maintain Your Geyser for Long Life",
      slug: "geyser-maintenance-tips",
      image:
        "https://www.livemint.com/lm-img/img/2024/11/12/1600x900/geyser_service_1731411775096_1731411775384.jpeg",
      description:
        "Regular maintenance is key to keeping your geyser working efficiently. Follow these expert maintenance tips to extend its lifespan.",
    },
    {
      title: "Instant vs. Storage Geyser – Which One Should You Buy?",
      slug: "instant-vs-storage-geyser",
      image:
        "https://www.livemint.com/lm-img/img/2024/12/02/1600x900/water_heater_1733131125491_1733131136054.jpg",
      description:
        "Choosing between instant and storage geysers? Here's a detailed comparison of cost, efficiency, and best use cases to help you decide.",
    },
    {
      title: "Top 5 Geysers in India – 2025 Review",
      slug: "top-geysers-2025",
      image:
        "https://images.herzindagi.info/img-affiliate/2025/Apr/904976.webp",
      description:
        "Looking to buy a new geyser? Check out our 2025 list of the best-performing geysers available in India with energy efficiency ratings.",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto mt-12 px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Geyser Repair & Buying Guide
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Link
            key={card.slug} // ✅ Move key here
            href={`/blog/television/${card.slug}`}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div>
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={224}
                className="object-cover"
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
