"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../Componets/Navbar/Navbar";
import Footer from "../../Componets/Footer/Footer";

export default function MicrowaveOvenCards() {
  const cards = [
    {
      title: "Common Microwave Oven Problems  ",
      slug: "microwave-common-problems",
      image:
        "https://newtackserviceplatform.com/uploads/city/1718050338ApplianceRepairKolkatawebp.webp",
      description:
        "From unresponsive buttonstp to to uneven heating, this guide walks you through the most common microwave oven issues and how to fix them at home safely.",
    },
    {
      title: "Microwave Oven Buying Guide 2025",
      slug: "microwave-buying-guide-2025",
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2024/08/microwaves-2048px-2-4.jpg?auto=webp&quality=75&width=1024",
      description:
        "Looking for a new microwave oven? We compare the best models of 2025 for solo, grill, and convection categories. Get expert recommendations for every budget.",
    },
    {
      title: "How to Clean Your Microwave Oven Like  ",
      slug: "microwave-cleaning-tips",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/microwave-oven-6799438f5a779.jpg?crop=0.8177295341474446xw:1xh;center,top&resize=1200:*",
      description:
        "Say goodbye to food stains and odors! Learn quick and effective ways to clean your microwave using everyday kitchen items like vinegar and lemon.",
    },
    {
      title: "Is Your Microwave Energy Efficient?",
      slug: "microwave-energy-efficiency",
      image:
        "https://storage.beko.co.uk/assets/beko/support/faqs/microwaves/how-energy-efficient-is-a-microwave-1.jpg",
      description:
        "Understand how much energy your microwave consumes, and find tips to reduce electricity usage while cooking smartly and safely at home.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 mt-16 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Microwave Oven Guides
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card) => (
            <Link
              key={card.slug}
              href={`/blog/microwave-oven/${card.slug}`}
              className="block group"
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={224}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                      {card.title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm">
                      {card.description}
                    </p>
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
