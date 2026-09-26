"use client";

import NewCard from "@/components/NewCard";
import SingleCard from "@/components/shared/SingleCard";
import { CardContext } from "@/context/CardContext";
import { Icard } from "@/types/cardtypes";
import Link from "next/link";
import { useContext } from "react";

const ListedPage = () => {
  const { saveCard, todayplan } = useContext(CardContext)!;

  const totalMinutes=todayplan.reduce(
  (total,card)=>total + Number(card.duration),0);

const totalCalories=todayplan.reduce(
  (total,card)=> total + Number(card.caloriesBurned),0)

  return (
    <div className="container mx-auto">
        <h1 className="text-2xl font-bold">MY PLAN</h1>
        <h2>Cap of five lifts for today. Finish them, then load more.</h2>
      <div className="mt-5 flex justify-between ml-10 mr-10 p-10 border border-gray-700 rounded bg-gray-900">
<div>
  <h1 className="text-2xl">Exercises</h1>
  <p className="text-center text-2xl">{todayplan.length}</p>
</div>
<div>
<h1 className="text-2xl">Minutes</h1>
<p className="text-center text-2xl">{totalMinutes}</p>
</div>
<div>
<h1 className="text-2xl">Calories</h1>
<p className="text-center text-2xl">{totalCalories}</p>
</div>
      </div>
     
<div className="tabs tabs-border mt-5">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Today's plan" />
  <div className="tab-content border-base-300 bg-base-100 p-10">
  {todayplan.length>0?
    todayplan.map((card) => (
  <NewCard
    key={card.id}
    card={card} type="today's plan"
  />
)):(
      <div className=" ">
        <p className="text-center text-white text-3xl">
        No plan card found<br/>

      <Link href={"/"}><button className="btn mt-3 bg-[#C2F800] font-bold text-black rounded-xl">Go to woktouts</button></Link>
            </p>
      </div>
    )
  }
    </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved" defaultChecked />
  <div className="tab-content border-base-300 bg-base-100 p-10 mb-3">
   {saveCard.length>0?
    saveCard.map((card:Icard)=>(
      <NewCard key={card.id} card={card} type="saved"></NewCard>
    )):(
      <p className="text-center text-white text-3xl">
        No save card found<br/>
         <Link href={"/"}><button className="btn mt-3 bg-[#C2F800] font-bold text-black rounded-xl">Go to woktouts</button></Link>
      </p>
    )
   }
    </div>


</div>
    </div>
  );
};

export default ListedPage;