"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
    title: "Modern Learning Environment",
    description: "State-of-the-art computer labs and classrooms",
  },
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    title: "Expert Guidance",
    description: "Learn from industry professionals",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    title: "Practical Training",
    description: "Hands-on experience with real projects",
  },
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Navigate to the previous image
  const prev = () =>
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);

  // Navigate to the next image
  const next = () =>
    setCurrentIndex((current) => (current + 1) % images.length);

  return (
    <div className="relative h-[540px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
            index === currentIndex
              ? "translate-x-0"
              : index < currentIndex
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <h2 className="md:text-8xl text-7xl  mb-4 font-custom">{image.title}</h2>
              <p className="text-xl font-regular">{image.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 hover:bg-transparent"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </Button>

      {/* Next Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-transparent"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
