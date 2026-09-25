import { Icard } from '@/types/cardtypes';
import Image from 'next/image';
import React from 'react';


type IcardProps={
    card:Icard
}


const SingleCard = ({card}:IcardProps) => {
    return (
        <div className='group w-full overflow-hidden rounded-2xl border'>
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
      src={card.image}
      alt="card-img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{card.name}</h2>
    <p>{card.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default SingleCard;