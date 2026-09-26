
import { Icard } from "@/types/cardtypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFire, FaStar } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

type IcardProps = {
  card: Icard;
};

const NewCard = ({ card }: IcardProps) => {
  return (
    <Link href={`/cards/${card.id}`}>
      <div className="group w-full  overflow-hidden rounded-2xl border border-gray-200 bg-gray-700 shadow-sm transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col md:flex-row gap-5">

          {/* Left - Image */}
          <figure className="w-full md:w-2/5 overflow-hidden">
            <Image
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={card.image}
              alt={card.name}
              width={400}
              height={250}
            />
          </figure>

          {/* Right - Content */}
          <div className="flex flex-1 flex-col justify-center p-6">

            {/* Tags */}
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold text-black">
                {card.muscleGroups}
              </span>

              <span className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold text-black">
                {card.equipment}
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-2 text-2xl font-bold text-white">
              {card.name}
            </h2>

            {/* Description */}
            <p className="mb-5 line-clamp-3 text-white">
              {card.description}
            </p>

            {/* Stats */}
            <div className="border-t pt-4">
              <div className="flex flex-wrap items-center gap-6 text-sm text-white">

                <p className="flex items-center gap-2">
                  <MdOutlineAccessTimeFilled className="text-lg" />
                  {card.duration}
                </p>

                <p className="flex items-center gap-2">
                  <FaFire />
                  {card.caloriesBurned}
                </p>

                <p className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  {card.rating}
                </p>

              </div>
            </div>
           

          </div>
           <div className="flex gap-3 pt-30">
                <Link href={"/"}><button className="btn border-gray-400 rounded-2xl">View Details</button></Link>
            <button className="btn bg-[#C2F800] rounded-2xl text-white">Mark as Read</button>
            <button className="pb-22 mr-2"><FaDeleteLeft /></button>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default NewCard;