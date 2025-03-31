"use client";

import { useInView } from "react-intersection-observer";
import { Carousel } from "../../components/ui/carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Responsive and well-managed UI support with own website",
      src: "/img/img1.jpg",
    },
    {
      title: "Accurate and calculatable readings",
      src: "/img/img2.jpg",
    },
    {
      title: "Simple circuitry and easy to build",
      src: "/img/img3.jpg",
    },
    {
      title:
        "Enhances user experience and gives alerts via Telegram, emails, and website",
      src: "/img/img4.jpg",
    },
  ];

  // Intersection Observer for YouTube Video
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="relative w-full bg-gray-900 text-white">
      {/* 🚀 Hero Section with Carousel */}
      <div className="h-screen  flex items-center justify-center">
        <Carousel slides={slideData} />
      </div>

      {/* 🎥 Video Section */}
      <div className="w-full flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl font-extrabold text-center mb-8 uppercase tracking-widest text-[#00FFFF]">
          Watch How It Works
        </h2>
        <div
          ref={ref}
          className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl border-4 border-[#00FFFF] shadow-lg shadow-[#00FF00]/30 overflow-hidden transition-all duration-300 hover:scale-105"
        >
          {inView && (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GYLBx7VaBTw"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
