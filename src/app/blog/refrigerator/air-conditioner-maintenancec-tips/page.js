"use client";
import Navbar from "../../../Componets/Navbar/Navbar";
import Footer from "../../../Componets/Footer/Footer";

export default function BlogDetailPage() {
  const post = {
    title: "Air Conditioner Maintenance Tips",
    image: "https://i.ytimg.com/vi/XRYjFJa6HEI/hq720.jpg",
    description: "Learn to keep your AC running smoothly with expert tips.",
    author: "Ravi Technician",
    date: "June 5, 2025",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    content: [
      "Clean or replace AC filters every 30-60 days.",
      "Check airflow and remove obstructions.",
      "Have a technician inspect it yearly.",
    ],
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 px-4 bg-white mt-20 rounded-xl shadow">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded" />
        <h1 className="text-3xl font-bold mt-6 mb-2">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <img src={post.avatar} alt="Author" className="w-8 h-8 rounded-full mr-2" />
          <div>
            <p>{post.author}</p>
            <p>{post.date}</p>
          </div>
        </div>
        <div className="space-y-4 text-gray-700">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
