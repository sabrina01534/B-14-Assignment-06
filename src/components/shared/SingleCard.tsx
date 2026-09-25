import { Icard } from '@/types/cardtypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


type IcardProps={
    card:Icard
}


const SingleCard = ({card}:IcardProps) => {
    return (
        <div className='group w-full overflow-hidden rounded-2xl border'>
           <div className="card bg-base-100 shadow-sm">
  <figure>
    <Image className='overflow-hidden object-cover h-60'
      src={card.image}
      alt={card.name} width={400} height={250}/>
  </figure>
  <div className="card-body">
   <div className='flex gap-4'>
    <button className="btn btn-xs bg-[#C2F800] font-bold text-black">{card.muscleGroups}</button>
   <button className="btn btn-xs bg-[#C2F800] font-bold text-black">{card.equipment}</button>
   
   </div>
    <h2 className="card-title">{card.name}</h2>
    <p className='mb-2'>{card.description}</p>
    <div className=" border-t">
    <div className='flex mt-2'>
         <p className=''>{card.duration}</p>
     <p>{card.caloriesBurned}</p>
     <p>{card.rating}</p>
    </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default SingleCard;