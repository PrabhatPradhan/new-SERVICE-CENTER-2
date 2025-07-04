"use client";
import React from "react";
import Image from "next/image";

export default function InfiniteSlider() {
  const imageUrls = [
    "/Images/InfiniteSlider.jpg",
    "/Images/InfiniteSlider-2.png",
    "/Images/InfiniteSlider.jpg",
    "/Images/InfiniteSlider-2.png",
    "/Images/InfiniteSlider.jpg",
    "/Images/InfiniteSlider-2.png",
  ];

  return (
    <div className="overflow-hidden relative w-full bg-white py-6">
      <div className="flex animate-scroll">
        {/* First set of images */}
        {[...Array(2)].map((_, setIndex) => (
          <div className="flex" key={setIndex}>
            {imageUrls.map((src, i) => (
              <div
                key={`${setIndex}-${i}`}
                className="min-w-[200px] h-[120px] flex items-center justify-center"
              >
                <div className="relative w-[200px] h-[120px]">
                  <Image
                    src={src}
                    alt={`Slide ${i + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
