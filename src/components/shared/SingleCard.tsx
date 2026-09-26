import { Icard } from '@/types/cardtypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFire, FaStar } from 'react-icons/fa';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';


type IcardProps={
    card:Icard
}


const SingleCard = ({card}:IcardProps) => {
    return (
        <Link href={`/cards/${card.id}`}>
        <div className='group w-full overflow-hidden rounded-2xl border'>
           <div className="card bg-base-100 shadow-sm">
  <figure>
    <Image className='overflow-hidden object-cover h-60'
      src={card.image}
      alt={card.name} width={400} height={250}/>
  </figure>
  <div className="card-body">
   <div className='flex gap-3'>
    <button className="btn btn-xs bg-[#C2F800] font-bold text-black rounded-3xl">{card.muscleGroups}</button>
   <button className="btn btn-xs bg-[#C2F800] font-bold text-black rounded-3xl">{card.equipment}</button>
   
   </div>
    <h2 className="card-title">{card.name}</h2>
    <p className='mb-2'>{card.description}</p>
    <div className=" border-t">
    <div className='flex mt-2'>
         <p className='flex gap-2 items-center'><MdOutlineAccessTimeFilled />{card.duration}</p>
     <p  className='flex gap-2 items-center'><FaFire />{card.caloriesBurned}</p>
     <p  className='flex gap-2 items-center'><FaStar />{card.rating}</p>
    </div>
    </div>
  </div>
</div> 
 
        </div>
        </Link>

    );
};

export default SingleCard;