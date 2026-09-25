
import Image from "next/image";
import React from "react";
import image from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-purple-100 p-6 md:p-10 lg:p-14 shadow-xl">
          
          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-200/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            
            {/* Text Content */}
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
            WORKOUT LIBRARY
              </span>

              <h1 className="text-5xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                TRAIN WITH INTENT. LOG<br/>
                EVERY SET.
              </h1>

              <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
               FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
into today's plan, and watch the week's work add up.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn bg-[#C2F800] text-black border-none font-bold">
                  BROWSE WORKOUTS →
                </button>

                
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={image}
                  alt="Books on a bookshelf"
                  className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;


