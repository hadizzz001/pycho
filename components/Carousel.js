"use client";

import React from "react";

const MyCarousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Background */}
      <img
        src="https://res.cloudinary.com/dulttkbil/image/upload/v1750513344/57084120_young-woman-at-mental-therapy-talking-to-female-psychologist-scaled_jbirio.webp"
        alt="Therapy session"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* White Overlay with 50% opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 z-10" />

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full p-4 text-left text-black">
        <h1 className="text-5xl font-bold   animate-slideInLeft myBlack">
          Mind Matters, We Listen
        </h1>
        <p className="text-[14px] mt-2 animate-slideInLeft delay-200 myBlack1">
          At Psychocounseling, we provide compassionate and confidential psychological support!
        </p>
        <a
          href="/shop"
          style={{ padding: "1em" }}
          className="mt-10 px-12 py-6 bg-[#2c5668] font-semibold transition-all duration-300 transform hover:scale-105 myWhite"
        >
          Contact Us!
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default MyCarousel;
