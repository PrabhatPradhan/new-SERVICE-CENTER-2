"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../Componets/Footer/Footer";
import Navbar from "../../Componets/Navbar/Navbar";

export default function KitchenChimneyCards() {
  const cards = [
    {
      title: "How to Choose the Right Kitchen Chimney",
      slug: "choose-kitchen-chimney",
      image:
        "https://blog.wonderchef.com/wp-content/uploads/2022/05/Guide-to-buying-the-right-chimney.jpg",
      description:
        "Choosing the right kitchen chimney can be confusing. Learn how to pick one based on suction power, filter type, and kitchen size.",
    },
    {
      title: "Top 5 Kitchen Chimneys in 2025 – Expert",
      slug: "top-kitchen-chimneys-2025",
      image:
        "https://www.livemint.com/lm-img/img/2025/04/08/960x540/Best_selling_chimneys_1744105740027_1744105745783.jpg",
      description:
        "We've reviewed the top-rated kitchen chimneys for 2025. Find out which brands and models offer the best features for Indian kitchens.",
    },
    {
      title: "Cleaning Your Kitchen Chimney – Steps",
      slug: "clean-kitchen-chimney",
      image:
        "https://blog.sfapp.magefan.top/media/glen-india.myshopify.com/images/0001step/image2.jpg",
      description:
        "Oil, grease, and smoke can clog your chimney. Follow this simple step-by-step guide to clean your chimney effectively at home.",
    },
    {
      title: "Common Kitchen Chimney Problems & Fixes",
      slug: "kitchen-chimney-problems",
      image:
        "https://sunkitchenchimneyservice.com/wp-content/uploads/2022/08/chimney-not-working.jpg",
      description:
        "Is your chimney making noise or not sucking smoke? Here are the most common issues users face and how to fix them quickly.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-12 px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-10">
          Kitchen Chimney Blog
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link key={card.slug} href={`/blog/kitchen-chimney/${card.slug}`}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
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
      <Footer />
    </>
  );
}
